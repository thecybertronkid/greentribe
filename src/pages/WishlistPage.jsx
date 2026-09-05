import React from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';

export default function WishlistPage({ onNavigate, onSelectProduct, onQuickView }) {
  const { wishlist } = useWishlist();

  const likedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Breadcrumbs items={[{ label: 'Wishlist' }]} onNavigate={onNavigate} />

      <div className="py-6 space-y-8">
        <div className="flex items-center justify-between border-b border-brand-border-light pb-4">
          <div>
            <h1 className="brand-font-serif text-3xl font-bold text-brand-charcoal">Your Saved Items</h1>
            <p className="text-xs text-brand-gray mt-1">
              {likedProducts.length} {likedProducts.length === 1 ? 'item' : 'items'} saved to your personal wishlist
            </p>
          </div>

          {likedProducts.length > 0 && (
            <button
              onClick={() => onNavigate('shop')}
              className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
            >
              Continue Shopping <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {likedProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center space-y-4 border border-brand-border-light max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="brand-font-serif text-xl font-bold text-brand-charcoal">Your wishlist is empty</h3>
            <p className="text-xs text-brand-gray">
              Explore our handcrafted cane and bamboo collection and save your favorite pieces here.
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="bg-brand-green text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md"
            >
              Explore Shop Catalog
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {likedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
