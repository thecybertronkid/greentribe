import React, { useEffect } from 'react';
import { ShoppingBag, Heart, CheckCircle2, X } from 'lucide-react';

export default function ToastNotification({ toast, onClose, onOpenCart, onOpenWishlist }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto z-50 animate-slideUp">
      <div className="bg-brand-green text-white p-4 rounded-2xl shadow-2xl border border-brand-gold/40 max-w-sm flex items-center gap-3.5 backdrop-blur-md">
        
        {toast.product?.image ? (
          <img src={toast.product.image} alt={toast.product.title} className="w-12 h-12 rounded-xl object-cover border border-brand-gold/30 shrink-0" />
        ) : (
          <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center shrink-0 text-amber-300">
            {toast.type === 'cart' ? <ShoppingBag className="w-5 h-5" /> : <Heart className="w-5 h-5 fill-amber-300" />}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{toast.type === 'cart' ? 'Added to Shopping Bag' : 'Added to Wishlist'}</span>
          </div>
          <p className="text-xs font-semibold text-white truncate mt-0.5">
            {toast.product?.title || toast.message}
          </p>
          <button
            onClick={() => {
              if (toast.type === 'cart') onOpenCart();
              else onOpenWishlist();
              onClose();
            }}
            className="text-[11px] font-bold text-amber-200 hover:text-white underline mt-1 block"
          >
            {toast.type === 'cart' ? 'View Cart & Checkout →' : 'View Wishlist →'}
          </button>
        </div>

        <button onClick={onClose} className="text-emerald-300 hover:text-white p-1">
          <X className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
