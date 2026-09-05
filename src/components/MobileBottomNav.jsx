import React from 'react';
import { Home, ShoppingBag, Heart, Search, Compass } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function MobileBottomNav({ activePage, setActivePage, onOpenSearch }) {
  const { totalItems, openCart } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-brand-green/95 backdrop-blur-xl border-t border-brand-gold/40 shadow-2xl px-3 py-2 flex items-center justify-around text-[10px] text-emerald-200">
      
      {/* Home Tab */}
      <button
        onClick={() => setActivePage('home')}
        className={`flex flex-col items-center gap-1 p-1 transition-colors ${
          activePage === 'home' ? 'text-amber-300 font-bold' : 'hover:text-white'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </button>

      {/* Shop Tab */}
      <button
        onClick={() => setActivePage('shop')}
        className={`flex flex-col items-center gap-1 p-1 transition-colors ${
          activePage === 'shop' ? 'text-amber-300 font-bold' : 'hover:text-white'
        }`}
      >
        <Compass className="w-5 h-5" />
        <span>Catalog</span>
      </button>

      {/* Search Tab */}
      <button
        onClick={onOpenSearch}
        className="flex flex-col items-center gap-1 p-1 hover:text-amber-300 transition-colors"
      >
        <Search className="w-5 h-5" />
        <span>Search</span>
      </button>

      {/* Wishlist Tab */}
      <button
        onClick={() => setActivePage('wishlist')}
        className={`flex flex-col items-center gap-1 p-1 relative transition-colors ${
          activePage === 'wishlist' ? 'text-amber-300 font-bold' : 'hover:text-white'
        }`}
      >
        <div className="relative">
          <Heart className="w-5 h-5" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-brand-charcoal text-[9px] font-extrabold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </div>
        <span>Wishlist</span>
      </button>

      {/* Bag Tab */}
      <button
        onClick={openCart}
        className="flex flex-col items-center gap-1 p-1 relative hover:text-amber-300 transition-colors text-amber-200"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 text-amber-300" />
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-brand-charcoal text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
              {totalItems}
            </span>
          )}
        </div>
        <span className="font-bold">Bag</span>
      </button>

    </div>
  );
}
