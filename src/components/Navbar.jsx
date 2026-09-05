import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ activePage, setActivePage, onSearchClick }) {
  const { totalItems, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsHovered, setIsCollectionsHovered] = useState(false);

  const navLinks = [
    { name: 'HOME', page: 'home' },
    { name: 'SHOP', page: 'shop' },
    { name: 'COLLECTIONS', page: 'shop', hasDropdown: true },
    { name: 'OUR STORY', page: 'story' },
    { name: 'OUR IMPACT', page: 'impact' },
    { name: 'CONTACT', page: 'contact' },
  ];

  const collectionsDropdown = [
    { label: 'Baskets & Storage', filter: 'Baskets & Storage' },
    { label: 'Trays & Platters', filter: 'Trays & Platters' },
    { label: 'Home Decor', filter: 'Home Decor' },
    { label: 'Kitchen & Dining', filter: 'Kitchen & Dining' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-beige/95 dark:bg-[#08120C]/95 backdrop-blur-xl border-b border-brand-gold/30 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-charcoal dark:text-amber-200 hover:text-brand-gold focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActivePage('home')}>
            <div className="w-10 h-10 rounded-full emerald-gradient-bg border border-brand-gold/50 flex items-center justify-center text-amber-300 font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              G
            </div>
            <div className="flex flex-col">
              <span className="brand-font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-green dark:text-amber-100 select-none">
                gree<span className="gold-gradient-text italic">N</span>trib<span className="text-brand-green dark:text-amber-100">E</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-brand-gold-dark dark:text-amber-400 font-sans -mt-1 font-bold flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400 inline" /> NECBDC Artisan Craft
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest text-brand-charcoal dark:text-amber-100">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setIsCollectionsHovered(true)}
                    onMouseLeave={() => setIsCollectionsHovered(false)}
                  >
                    <button
                      onClick={() => setActivePage('shop')}
                      className={`flex items-center gap-1 hover:text-brand-gold transition-colors ${
                        activePage === 'shop' ? 'text-brand-green dark:text-amber-300 border-b-2 border-brand-gold pb-1' : ''
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-brand-gold" />
                    </button>

                    {/* Dropdown Menu */}
                    {isCollectionsHovered && (
                      <div className="absolute top-full left-0 w-56 bg-white/95 dark:bg-brand-dark-card/95 rounded-xl shadow-2xl border border-brand-gold/30 py-2 z-50 backdrop-blur-md animate-fadeIn">
                        {collectionsDropdown.map((cat) => (
                          <button
                            key={cat.label}
                            onClick={() => {
                              setActivePage('shop');
                              setIsCollectionsHovered(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-xs text-brand-charcoal dark:text-amber-100 hover:bg-brand-beige dark:hover:bg-emerald-950/60 hover:text-brand-green dark:hover:text-amber-300 font-semibold transition-colors flex items-center justify-between"
                          >
                            <span>{cat.label}</span>
                            <span className="text-[10px] text-amber-700 dark:text-amber-400 font-normal">Explore →</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => setActivePage(link.page)}
                  className={`hover:text-amber-700 dark:hover:text-amber-300 transition-colors relative py-2 ${
                    activePage === link.page ? 'text-brand-green dark:text-amber-300 font-extrabold border-b-2 border-brand-gold pb-1' : ''
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Actions right */}
          <div className="flex items-center space-x-2.5 sm:space-x-4">
            
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Search */}
            <button 
              onClick={onSearchClick}
              className="p-2 text-brand-charcoal dark:text-amber-100 hover:text-brand-green dark:hover:text-amber-300 transition-colors rounded-full hover:bg-brand-gold/10"
              title="Search Products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button 
              onClick={() => alert("Customer Account Login modal coming soon. Integrated with Shopify Customer Accounts.")}
              className="hidden sm:flex p-2 text-brand-charcoal dark:text-amber-100 hover:text-brand-green dark:hover:text-amber-300 transition-colors rounded-full hover:bg-brand-gold/10"
              title="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button 
              onClick={() => setActivePage('wishlist')}
              className="p-2 text-brand-charcoal dark:text-amber-100 hover:text-brand-green dark:hover:text-amber-300 transition-colors relative rounded-full hover:bg-brand-gold/10"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger */}
            <button 
              onClick={openCart}
              className="p-2.5 bg-brand-green hover:bg-brand-green-hover text-white rounded-xl shadow-md transition-all flex items-center gap-2 group relative border border-brand-gold/30"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-amber-100 hidden sm:inline">Bag</span>
              <span className="bg-brand-gold text-brand-charcoal text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ml-1">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-beige dark:bg-brand-dark-surface border-b border-brand-gold/30 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActivePage(link.page);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 px-4 text-sm font-bold rounded-xl ${
                activePage === link.page ? 'bg-brand-green text-amber-200' : 'text-brand-charcoal dark:text-amber-100 hover:bg-black/5'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
