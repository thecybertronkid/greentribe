import React, { useState, useEffect } from 'react';
import { Heart, Star, ShoppingBag, Plus, Minus, Truck, RefreshCw, ChevronDown, Play, Leaf, HeartHandshake, Users, Sparkles } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';
import { createShopifyCheckout } from '../services/shopify';

export default function ProductDetailPage({ product, onNavigate, onSelectProduct, onQuickView, onOpenVideo, onShowToast }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('details');
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50, isHovering: false });

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const currentImage = selectedImage || product.image;
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const isLiked = isInWishlist(product.id);

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (tab) => {
    setActiveAccordion(activeAccordion === tab ? null : tab);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y, isHovering: true });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    if (onShowToast) {
      onShowToast({
        type: 'cart',
        product,
        message: `Added ${quantity} x ${product.title} to Cart`
      });
    }
  };

  const handleWishlistClick = () => {
    toggleWishlist(product.id);
    if (onShowToast) {
      onShowToast({
        type: 'wishlist',
        product,
        message: isLiked ? `Removed ${product.title} from Wishlist` : `Added ${product.title} to Wishlist`
      });
    }
  };

  const handleBuyNow = async () => {
    addToCart(product, quantity);
    try {
      const checkoutUrl = await createShopifyCheckout([{ product, quantity }]);
      if (checkoutUrl) {
        window.open(checkoutUrl, '_blank');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 md:pb-20">
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { label: product.category, page: 'shop' },
          { label: product.title }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Main PDP Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-2 sm:pt-4">
        
        {/* Left Media Gallery (6 cols) */}
        <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4">
          
          {/* Vertical/Horizontal Thumbnail Strip */}
          <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto shrink-0 py-1 max-w-full">
            {gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(imgUrl)}
                className={`w-14 h-14 sm:w-18 sm:h-18 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-white dark:bg-brand-dark-card ${
                  currentImage === imgUrl 
                    ? 'border-brand-gold ring-2 sm:ring-4 ring-brand-gold/20 scale-105 shadow-md' 
                    : 'border-brand-border-light dark:border-emerald-800/60 hover:border-brand-gold/50 opacity-80 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}

            {/* Play video thumb trigger */}
            <button
              onClick={onOpenVideo}
              className="w-14 h-14 sm:w-18 sm:h-18 rounded-xl sm:rounded-2xl border-2 border-brand-gold/40 emerald-gradient-bg text-amber-300 flex flex-col items-center justify-center gap-0.5 sm:gap-1 hover:scale-105 transition-all shrink-0 shadow-md"
              title="Watch Crafting Video"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-300" />
              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">Video</span>
            </button>
          </div>

          {/* Main Viewer with Interactive Lens Zoom */}
          <div 
            className="relative flex-1 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-brand-dark-card border border-brand-gold/30 shadow-xl group cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomPos({ ...zoomPos, isHovering: false })}
          >
            <img 
              src={currentImage} 
              alt={product.title} 
              className={`w-full h-full object-cover transition-transform duration-200 ${
                zoomPos.isHovering ? 'scale-150' : 'scale-100'
              }`}
              style={
                zoomPos.isHovering 
                  ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } 
                  : undefined
              }
            />

            <button
              onClick={handleWishlistClick}
              className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-3 rounded-full backdrop-blur-md shadow-xl transition-all ${
                isLiked ? 'bg-rose-50 text-rose-600' : 'bg-white/80 dark:bg-emerald-950/80 text-gray-600 dark:text-amber-200 hover:text-rose-600 hover:bg-white'
              }`}
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-rose-600' : ''}`} />
            </button>

            <button
              onClick={onOpenVideo}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 p-2.5 sm:p-3 rounded-full emerald-gradient-bg text-white hover:opacity-95 backdrop-blur-md shadow-xl flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold px-3.5 sm:px-5 border border-brand-gold/40"
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-300 text-amber-300" /> Watch Story
            </button>
          </div>

        </div>

        {/* Right Info Column (6 cols) */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-amber-700 dark:text-amber-400 font-bold uppercase tracking-widest bg-amber-50 dark:bg-emerald-950 px-2.5 py-1 rounded-md border border-amber-200/60 dark:border-amber-500/30 flex items-center gap-1 text-[10px] sm:text-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> NECBDC Certified Craft
              </span>
              <div className="flex items-center gap-1.5 text-amber-500 font-bold text-xs sm:text-sm">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-brand-gray dark:text-emerald-200/80 font-normal text-[10px] sm:text-xs">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1 className="brand-font-serif text-2xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100 mt-2 sm:mt-3">
              {product.title}
            </h1>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-brand-charcoal dark:text-amber-200">
                ₹{product.price.toLocaleString('en-IN')}.00
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-base text-brand-gray dark:text-emerald-300/60 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-[10px] font-bold text-emerald-900 dark:text-amber-300 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-amber-500/30">
                Save ₹{((product.originalPrice || product.price + 300) - product.price).toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-brand-gray dark:text-emerald-200/80 font-medium mt-1">Inclusive of all taxes & free eco-packaging</p>
          </div>

          <p className="text-xs sm:text-sm text-brand-gray dark:text-emerald-100/90 leading-relaxed border-t border-brand-border-light dark:border-emerald-800/60 pt-4 font-medium">
            {product.description}
          </p>

          {/* Value props bar in PDP */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-brand-border-light/80 dark:border-emerald-800/60 text-center text-[10px] sm:text-[11px] text-brand-charcoal dark:text-amber-100 font-bold bg-white dark:bg-brand-dark-card rounded-2xl p-2 border border-brand-gold/20">
            <div className="flex flex-col items-center gap-1 p-1">
              <Leaf className="w-4 h-4 text-emerald-800 dark:text-amber-300" />
              <span>Eco Materials</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-1">
              <HeartHandshake className="w-4 h-4 text-emerald-800 dark:text-amber-300" />
              <span>Handmade</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-1">
              <Users className="w-4 h-4 text-emerald-800 dark:text-amber-300" />
              <span>Artisan Support</span>
            </div>
          </div>

          {/* Desktop Quantity & Action Buttons */}
          <div className="hidden sm:block space-y-4 pt-2">
            <div className="flex items-center gap-4">
              
              <div className="flex items-center border border-brand-gold/40 rounded-2xl bg-white dark:bg-emerald-950 shadow-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3.5 text-sm font-bold text-brand-charcoal dark:text-amber-100 hover:bg-brand-beige dark:hover:bg-emerald-900 rounded-l-2xl"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-bold text-brand-charcoal dark:text-amber-100 min-w-[36px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3.5 text-sm font-bold text-brand-charcoal dark:text-amber-100 hover:bg-brand-beige dark:hover:bg-emerald-900 rounded-r-2xl"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 emerald-gradient-bg hover:opacity-95 text-amber-200 text-xs sm:text-sm font-bold py-4 px-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 border border-brand-gold/30 shimmer-btn"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" /> ADD TO CART
              </button>

            </div>

            <button
              onClick={handleBuyNow}
              className="w-full bg-white dark:bg-emerald-950 hover:bg-brand-beige dark:hover:bg-emerald-900 text-brand-green dark:text-amber-200 border-2 border-brand-gold text-xs sm:text-sm font-bold py-3.5 px-6 rounded-2xl transition-all uppercase tracking-widest shadow-sm"
            >
              BUY NOW
            </button>
          </div>

          {/* Delivery & COD Badges */}
          <div className="bg-white dark:bg-brand-dark-card p-4 rounded-2xl border border-brand-gold/30 space-y-2 text-xs text-brand-charcoal dark:text-amber-100 shadow-xs">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-800 dark:text-amber-300 shrink-0" />
              <span>Estimated Delivery: <strong className="text-brand-green dark:text-amber-300">3 - 5 working days</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-emerald-800 dark:text-amber-300 shrink-0" />
              <span>COD Available | Easy 7 Days Hassle-Free Returns</span>
            </div>
          </div>

          {/* Interactive Accordions */}
          <div className="border-t border-brand-border-light dark:border-emerald-800/60 pt-2 space-y-2 text-xs">
            
            <div className="border-b border-brand-border-light dark:border-emerald-800/60 pb-2">
              <button
                onClick={() => toggleAccordion('details')}
                className="w-full py-3 flex justify-between items-center font-bold text-brand-charcoal dark:text-amber-100 hover:text-brand-green dark:hover:text-amber-300"
              >
                <span>Product Details</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'details' ? 'rotate-180' : ''}`} />
              </button>
              {activeAccordion === 'details' && (
                <ul className="pb-3 space-y-1.5 text-brand-gray dark:text-emerald-200/80 pl-4 list-disc animate-fadeIn font-medium">
                  {product.details ? (
                    product.details.map((item, i) => <li key={i}>{item}</li>)
                  ) : (
                    <li>Material: Assam Cane & Bamboo</li>
                  )}
                </ul>
              )}
            </div>

            <div className="border-b border-brand-border-light dark:border-emerald-800/60 pb-2">
              <button
                onClick={() => toggleAccordion('care')}
                className="w-full py-3 flex justify-between items-center font-bold text-brand-charcoal dark:text-amber-100 hover:text-brand-green dark:hover:text-amber-300"
              >
                <span>Care Instructions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'care' ? 'rotate-180' : ''}`} />
              </button>
              {activeAccordion === 'care' && (
                <ul className="pb-3 space-y-1.5 text-brand-gray dark:text-emerald-200/80 pl-4 list-disc animate-fadeIn font-medium">
                  {product.careInstructions ? (
                    product.careInstructions.map((item, i) => <li key={i}>{item}</li>)
                  ) : (
                    <li>Wipe with dry microfiber cloth. Avoid prolonged water exposure.</li>
                  )}
                </ul>
              )}
            </div>

            <div className="border-b border-brand-border-light dark:border-emerald-800/60 pb-2">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full py-3 flex justify-between items-center font-bold text-brand-charcoal dark:text-amber-100 hover:text-brand-green dark:hover:text-amber-300"
              >
                <span>Shipping & Returns</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'shipping' ? 'rotate-180' : ''}`} />
              </button>
              {activeAccordion === 'shipping' && (
                <p className="pb-3 text-brand-gray dark:text-emerald-200/80 leading-relaxed animate-fadeIn font-medium">
                  {product.shippingInfo || "Free shipping on orders above ₹1,999. Shipped in protective eco-packaging within 24 hours."}
                </p>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Sticky Mobile Action Bar */}
      <div className="sm:hidden fixed bottom-12 inset-x-0 bg-white/95 dark:bg-brand-dark-card/95 backdrop-blur-xl border-t border-brand-gold/30 p-3 shadow-2xl z-30 flex items-center gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 emerald-gradient-bg text-amber-200 text-xs font-bold py-3 px-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 border border-brand-gold/30"
        >
          <ShoppingBag className="w-4 h-4 text-amber-300" /> ADD TO BAG
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-amber-500 text-brand-charcoal text-xs font-extrabold py-3 px-3 rounded-xl shadow-md uppercase tracking-wider"
        >
          BUY NOW
        </button>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 sm:mt-20 space-y-6 border-t border-brand-border-light dark:border-emerald-800/60 pt-12">
          <h2 className="brand-font-serif text-2xl font-bold text-brand-charcoal dark:text-amber-100">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
                onShowToast={onShowToast}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
