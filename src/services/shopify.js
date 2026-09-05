/**
 * Shopify Storefront API Integration Service
 * 
 * To connect your Shopify store backend:
 * 1. Create a `.env` file in the project root with:
 *    VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
 *    VITE_SHOPIFY_STOREFRONT_TOKEN=your_storefront_access_token
 * 2. This service will automatically fetch live Shopify products & generate checkout URLs.
 */

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || '';
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || '';
const API_VERSION = '2024-01';

export const isShopifyConfigured = () => {
  return Boolean(SHOPIFY_DOMAIN && SHOPIFY_TOKEN);
};

async function shopifyFetch({ query, variables = {} }) {
  if (!isShopifyConfigured()) {
    console.warn("Shopify Storefront API keys not set. Falling back to local catalog data.");
    return null;
  }

  const endpoint = `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();
    if (json.errors) {
      console.error('Shopify GraphQL Errors:', json.errors);
      throw new Error(json.errors[0].message);
    }
    return json.data;
  } catch (error) {
    console.error('Shopify Fetch Error:', error);
    return null;
  }
}

/**
 * Fetch products from Shopify Storefront API
 */
export async function getShopifyProducts(limit = 20) {
  const query = `
    query getProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            handle
            title
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 4) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch({ query, variables: { first: limit } });
  if (!data || !data.products) return null;

  return data.products.edges.map(({ node }) => ({
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    price: parseFloat(node.priceRange.minVariantPrice.amount),
    currency: node.priceRange.minVariantPrice.currencyCode,
    image: node.images.edges[0]?.node?.url || '',
    images: node.images.edges.map(e => e.node.url),
    variants: node.variants.edges.map(e => e.node),
  }));
}

/**
 * Create a Shopify Cart Checkout URL
 */
export async function createShopifyCheckout(cartItems) {
  if (!isShopifyConfigured()) {
    alert("Shopify Integration Note:\n\nTo complete real checkout, add your VITE_SHOPIFY_STORE_DOMAIN and VITE_SHOPIFY_STOREFRONT_TOKEN to .env.\n\nSimulating checkout redirect now...");
    return "https://checkout.shopify.com";
  }

  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const lines = cartItems.map(item => ({
    merchandiseId: item.shopifyVariantId || item.id,
    quantity: item.quantity,
  }));

  const data = await shopifyFetch({ query, variables: { input: { lines } } });
  if (data?.cartCreate?.cart?.checkoutUrl) {
    return data.cartCreate.cart.checkoutUrl;
  }
  
  throw new Error("Unable to create Shopify checkout session.");
}
