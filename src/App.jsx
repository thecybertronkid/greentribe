import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import VideoModal from './components/VideoModal';
import SearchModal from './components/SearchModal';
import ToastNotification from './components/ToastNotification';
import ArtisanConciergeWidget from './components/ArtisanConciergeWidget';
import MobileBottomNav from './components/MobileBottomNav';
import BambooForestBackground from './components/BambooForestBackground';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import StoryImpactPage from './pages/StoryImpactPage';
import ContactPage from './pages/ContactPage';
import WishlistPage from './pages/WishlistPage';

import { PRODUCTS } from './data/products';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeToast, setActiveToast] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage, selectedProduct]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setActivePage('pdp');
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setActivePage('shop');
  };

  const showToast = (toastData) => {
    setActiveToast(toastData);
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen flex flex-col font-sans bg-brand-beige dark:bg-brand-dark-bg text-brand-charcoal dark:text-brand-dark-text selection:bg-brand-green selection:text-white pb-14 md:pb-0 relative transition-colors duration-400">
            
            {/* Animated Waving Bamboo Forest Background */}
            <BambooForestBackground />

            {/* Persistent Top Header Block */}
            <div className="fixed top-0 inset-x-0 z-50">
              <AnnouncementBar />
              <Navbar 
                activePage={activePage} 
                setActivePage={(page) => {
                  if (page === 'shop') setSearchQuery('');
                  setActivePage(page);
                }} 
                onSearchClick={() => setIsSearchOpen(true)}
              />
            </div>

            {/* Main View Area with Top Padding for Fixed Navbar */}
            <main className="flex-1 relative z-10 pt-28">
              {activePage === 'home' && (
                <HomePage 
                  onNavigate={setActivePage}
                  onSelectProduct={handleSelectProduct}
                  onQuickView={setQuickViewProduct}
                  onOpenVideo={() => setIsVideoOpen(true)}
                  onShowToast={showToast}
                />
              )}

              {activePage === 'shop' && (
                <ShopPage 
                  onNavigate={setActivePage}
                  onSelectProduct={handleSelectProduct}
                  onQuickView={setQuickViewProduct}
                  searchQuery={searchQuery}
                  onShowToast={showToast}
                />
              )}

              {activePage === 'pdp' && (
                <ProductDetailPage 
                  product={selectedProduct}
                  onNavigate={setActivePage}
                  onSelectProduct={handleSelectProduct}
                  onQuickView={setQuickViewProduct}
                  onOpenVideo={() => setIsVideoOpen(true)}
                  onShowToast={showToast}
                />
              )}

              {(activePage === 'story' || activePage === 'impact') && (
                <StoryImpactPage 
                  onNavigate={setActivePage}
                  onOpenVideo={() => setIsVideoOpen(true)}
                />
              )}

              {activePage === 'contact' && (
                <ContactPage 
                  onNavigate={setActivePage}
                />
              )}

              {activePage === 'wishlist' && (
                <WishlistPage 
                  onNavigate={setActivePage}
                  onSelectProduct={handleSelectProduct}
                  onQuickView={setQuickViewProduct}
                  onShowToast={showToast}
                />
              )}
            </main>

            {/* Global Footer */}
            <Footer setActivePage={setActivePage} />

            {/* Mobile Bottom Navigation Bar */}
            <MobileBottomNav
              activePage={activePage}
              setActivePage={(page) => {
                if (page === 'shop') setSearchQuery('');
                setActivePage(page);
              }}
              onOpenSearch={() => setIsSearchOpen(true)}
            />

            {/* Slide-over Cart Drawer */}
            <CartDrawer onNavigateShop={() => setActivePage('shop')} />

            {/* Quick View Dialog */}
            <QuickViewModal 
              product={quickViewProduct} 
              onClose={() => setQuickViewProduct(null)} 
              onGoToPDP={handleSelectProduct}
            />

            {/* Video Modal ("The Making Story") */}
            <VideoModal 
              isOpen={isVideoOpen} 
              onClose={() => setIsVideoOpen(false)} 
            />

            {/* Live Search Modal */}
            <SearchModal 
              isOpen={isSearchOpen} 
              onClose={() => setIsSearchOpen(false)} 
              onSelectProduct={handleSelectProduct}
              onSearchSubmit={handleSearchSubmit}
            />

            {/* Toast Notifications */}
            <ToastNotification
              toast={activeToast}
              onClose={() => setActiveToast(null)}
              onOpenCart={() => {}}
              onOpenWishlist={() => setActivePage('wishlist')}
            />

            {/* Floating Artisan Concierge Widget */}
            <ArtisanConciergeWidget />

          </div>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
