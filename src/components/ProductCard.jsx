import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onSelectProduct, onQuickView, onShowToast }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const isLiked = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
    if (onShowToast) {
      onShowToast({
        type: 'wishlist',
        product,
        message: isLiked ? `Removed ${product.title} from Wishlist` : `Added ${product.title} to Wishlist`
      });
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    if (onShowToast) {
      onShowToast({
        type: 'cart',
        product,
        message: `Added ${product.title} to Cart`
      });
    }
  };

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden border border-brand-border-light/80 luxury-card-shadow transition-all duration-500 flex flex-col h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Box */}
      <div className="relative aspect-square overflow-hidden bg-brand-beige-dark/30 cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && (
            <span className="emerald-gradient-bg text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider border border-brand-gold/40 shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" /> Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-amber-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider shadow-sm">
              Artisan Heritage
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-10 ${
            isLiked 
              ? 'bg-rose-50 text-rose-600 shadow-md scale-110' 
              : 'bg-white/80 text-gray-600 hover:text-rose-600 hover:bg-white shadow-sm hover:scale-110'
          }`}
          title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 transition-transform ${isLiked ? 'fill-rose-600' : ''}`} />
        </button>

        {/* Quick View & Quick Add Hover Bar */}
        <div className="absolute inset-x-0 bottom-3 px-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex gap-2 justify-center z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 bg-white/95 hover:bg-white text-brand-charcoal text-xs font-bold py-2.5 px-3 rounded-xl shadow-lg backdrop-blur-md flex items-center justify-center gap-1.5 transition-all hover:text-brand-green"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>

          <button
            onClick={handleAddToCart}
            className="bg-brand-green hover:bg-brand-green-hover text-amber-300 p-2.5 rounded-xl shadow-lg border border-brand-gold/40 transition-transform active:scale-95 shimmer-btn"
            title="Quick Add to Bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Info */}
      <div className="p-5 flex flex-col justify-between flex-grow cursor-pointer" onClick={() => onSelectProduct(product)}>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold-dark">
            {product.material} • {product.category}
          </span>
          <h3 className="brand-font-serif text-base font-bold text-brand-charcoal mt-1 group-hover:text-brand-green transition-colors line-clamp-1">
            {product.title}
          </h3>
        </div>

        <div className="mt-4 flex items-baseline justify-between pt-3 border-t border-brand-border-light/60">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-brand-charcoal">
              ₹{product.price.toLocaleString('en-IN')}.00
            </span>
            {product.originalPrice && (
              <span className="text-xs text-brand-gray line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
