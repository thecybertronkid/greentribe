import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function QuickViewModal({ product, onClose, onGoToPDP }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedQty, setSelectedQty] = useState(1);

  if (!product) return null;

  const isLiked = isInWishlist(product.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Dialog box */}
      <div className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 border border-brand-border-light animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-brand-charcoal transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Media */}
          <div className="aspect-square bg-brand-beige-dark/30 relative">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green bg-emerald-50 px-2.5 py-1 rounded">
                {product.material} • {product.category}
              </span>
              <h2 className="brand-font-serif text-2xl font-bold text-brand-charcoal mt-2">
                {product.title}
              </h2>
              <div className="flex items-center gap-2 mt-2 text-xs">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold ml-1">{product.rating}</span>
                </div>
                <span className="text-brand-gray">• {product.reviewsCount} Artisan Reviews</span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-brand-charcoal">
                  ₹{product.price.toLocaleString('en-IN')}.00
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-brand-gray line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                  Inclusive of all taxes
                </span>
              </div>

              <p className="text-xs text-brand-gray leading-relaxed mt-4">
                {product.shortDescription}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-brand-border-light">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-brand-border-light rounded-xl overflow-hidden bg-brand-beige">
                  <button 
                    onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                    className="px-3 py-2 text-xs font-bold hover:bg-black/5"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold">{selectedQty}</span>
                  <button 
                    onClick={() => setSelectedQty(selectedQty + 1)}
                    className="px-3 py-2 text-xs font-bold hover:bg-black/5"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    addToCart(product, selectedQty);
                    onClose();
                  }}
                  className="flex-1 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> ADD TO CART
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 rounded-xl border transition-colors ${
                    isLiked ? 'bg-rose-50 border-rose-200 text-rose-600' : 'border-brand-border-light text-gray-400 hover:text-rose-600'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-600' : ''}`} />
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onGoToPDP(product);
                }}
                className="w-full text-center text-xs font-semibold text-brand-green hover:underline pt-1"
              >
                View Full Product Specs & Artisan Story →
              </button>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-brand-gray pt-2">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>3-5 Days Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>NECBDC Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
