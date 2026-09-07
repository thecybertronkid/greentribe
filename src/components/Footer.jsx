import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-brand-green text-white pt-16 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top NECBDC Banner */}
        <div className="bg-emerald-900/60 rounded-2xl p-6 sm:p-8 mb-12 border border-emerald-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-amber-300 font-bold text-xl border border-amber-300/30 shrink-0">
              NEC
            </div>
            <div>
              <h3 className="brand-font-serif text-lg sm:text-xl font-medium text-amber-100">
                In Partnership with NECBDC
              </h3>
              <p className="text-xs text-emerald-200/90 mt-0.5">
                North East Cane & Bamboo Development Council (Govt. of India Initiative) empowering indigenous artisans.
              </p>
            </div>
          </div>
          <button 
            onClick={() => setActivePage('impact')}
            className="shrink-0 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"
          >
            Learn About Our Impact <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Column Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/60 text-xs">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="brand-font-serif text-2xl font-bold tracking-tight text-white">
              gree<span className="text-amber-400">N</span>trib<span className="text-white">E</span>
            </div>
            <p className="text-emerald-100/80 leading-relaxed">
              Sustainable. Handcrafted. Meaningful. Eco-friendly bamboo and cane lifestyle creations that care for you and the planet.
            </p>
            <div className="flex items-center gap-2 text-emerald-300">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-medium">100% Certified Authentic Artisanal Craft</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-amber-200 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-emerald-100/90">
              <li><button onClick={() => setActivePage('home')} className="hover:text-amber-300 transition-colors">Home</button></li>
              <li><button onClick={() => setActivePage('shop')} className="hover:text-amber-300 transition-colors">Shop All Products</button></li>
              <li><button onClick={() => setActivePage('collections')} className="hover:text-amber-300 transition-colors">Curated Collections</button></li>
              <li><button onClick={() => setActivePage('story')} className="hover:text-amber-300 transition-colors">Our Story & Heritage</button></li>
              <li><button onClick={() => setActivePage('impact')} className="hover:text-amber-300 transition-colors">Artisan Impact</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-amber-300 transition-colors">Contact & Craft Centers</button></li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-amber-200 uppercase tracking-wider">Product Collections</h4>
            <ul className="space-y-2 text-emerald-100/90">
              <li><button onClick={() => setActivePage('collections')} className="hover:text-amber-300 transition-colors">Baskets & Storage</button></li>
              <li><button onClick={() => setActivePage('collections')} className="hover:text-amber-300 transition-colors">Trays & Platters</button></li>
              <li><button onClick={() => setActivePage('collections')} className="hover:text-amber-300 transition-colors">Lighting & Ambient Decor</button></li>
              <li><button onClick={() => setActivePage('collections')} className="hover:text-amber-300 transition-colors">Kitchen & Dining</button></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-amber-200 uppercase tracking-wider">Join The Tribe</h4>
            <p className="text-emerald-100/80 leading-relaxed">
              Subscribe to get updates on artisan collections, eco-living tips, and special offers.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to GreenTribe newsletter!"); }} className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  className="w-full bg-white/10 border border-emerald-700 rounded-lg py-2.5 px-3 pr-10 text-white placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-amber-400 text-xs"
                />
                <button type="submit" className="absolute right-2 top-2.5 text-amber-300 hover:text-white">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Credits & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <p>© {new Date().getFullYear()} GreenTribe (NECBDC Initiative). All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-emerald-200">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>for Sustainable Living in India</span>
          </div>
          <div className="flex items-center space-x-3 text-emerald-200/90 font-medium">
            <span>Shopify Storefront Powered</span>
            <span>•</span>
            <span>Razorpay / UPI / COD</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
