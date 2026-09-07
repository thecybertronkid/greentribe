import React, { useState } from 'react';
import { ArrowRight, Leaf, Heart, Users, ShieldCheck, Play, Award, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CraftMaterialExplorer from '../components/CraftMaterialExplorer';
import { PRODUCTS } from '../data/products';

export default function HomePage({ onNavigate, onSelectProduct, onQuickView, onOpenVideo, onShowToast }) {
  const [activeTab, setActiveTab] = useState('all');

  const displayedProducts = activeTab === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => {
        if (activeTab === 'lighting') return p.category === 'Home Decor';
        if (activeTab === 'baskets') return p.category === 'Baskets & Storage';
        return true;
      });

  const valueProps = [
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      desc: "100% biodegradable Assam cane & organic bamboo"
    },
    {
      icon: Heart,
      title: "Handcrafted with Love",
      desc: "Meticulously woven by traditional master artisans"
    },
    {
      icon: Users,
      title: "Supporting Artisans",
      desc: "Direct livelihood impact under NECBDC initiative"
    },
    {
      icon: ShieldCheck,
      title: "Sustainable Living",
      desc: "Zero-waste natural home decor & utility items"
    }
  ];

  const categoryHighlights = [
    { name: "Bamboo Pendant Lighting", count: "3 Masterpieces", image: "/products/wave_pendant_light.png" },
    { name: "Ambient Table Lamps", count: "1 Classic Item", image: "/products/table_lamp.png" },
    { name: "Artisan Basketry", count: "1 Handwoven Item", image: "/products/bamboo_basket.png" },
    { name: "Planter Lanterns", count: "1 Biophilic Item", image: "/products/planter_lantern.png" }
  ];

  return (
    <div className="space-y-24 pb-24">
      
      {/* Luxury Hero Section with Animated Mesh */}
      <section className="relative overflow-hidden animated-mesh-bg border-b border-brand-gold/30 pt-4 sm:pt-6 pb-16 lg:pb-24 transition-colors duration-400">
        
        {/* Animated Background Ambient Light Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200/30 dark:bg-amber-500/15 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-600/15 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-7 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-emerald-950/90 text-brand-green dark:text-amber-200 px-4 py-2 rounded-full text-xs font-bold tracking-wider border border-brand-gold/40 dark:border-amber-500/40 shadow-sm backdrop-blur-md">
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-pulse" />
              <span>Official NECBDC Craft Brand • North East India</span>
            </div>
            
            <h1 className="brand-font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-charcoal dark:text-amber-100 leading-[1.12]">
              Bringing <span className="gold-gradient-text italic font-normal">Nature</span> Into Your Everyday
            </h1>

            <p className="text-sm sm:text-base text-brand-gray dark:text-emerald-100/90 leading-relaxed max-w-lg font-medium">
              Sustainable. Handcrafted. Meaningful. Explore GreenTribe's official collection of handwoven bamboo lighting, baskets, and ambient lamps crafted by indigenous tribal artisans.
            </p>

            <div className="pt-3 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onNavigate('shop')}
                className="emerald-gradient-bg hover:opacity-95 text-amber-200 text-xs sm:text-sm font-bold uppercase tracking-widest px-9 py-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-2 border border-brand-gold/40 shimmer-btn"
              >
                SHOP 8 ARTISAN PRODUCTS <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <button
                onClick={() => onNavigate('story')}
                className="bg-white dark:bg-emerald-950 hover:bg-brand-beige dark:hover:bg-emerald-900 border border-brand-gold/40 text-brand-charcoal dark:text-amber-200 text-xs sm:text-sm font-bold px-7 py-4 rounded-2xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Our Artisans' Story
              </button>
            </div>

            {/* Quick stats trust badge */}
            <div className="pt-6 border-t border-brand-border-light dark:border-emerald-800/60 flex items-center gap-8 text-xs font-semibold text-brand-charcoal dark:text-amber-100">
              <div>
                <span className="brand-font-serif text-xl font-bold text-brand-green dark:text-amber-300 block">8</span>
                <span className="text-[10px] text-brand-gray dark:text-emerald-200/80 uppercase font-bold">Exclusive Items</span>
              </div>
              <div className="h-8 w-px bg-brand-border-light dark:bg-emerald-800/60" />
              <div>
                <span className="brand-font-serif text-xl font-bold text-amber-700 dark:text-amber-400 block">50+</span>
                <span className="text-[10px] text-brand-gray dark:text-emerald-200/80 uppercase font-bold">Tribal Artisans</span>
              </div>
              <div className="h-8 w-px bg-brand-border-light dark:bg-emerald-800/60" />
              <div>
                <span className="brand-font-serif text-xl font-bold text-brand-green dark:text-amber-300 block">100%</span>
                <span className="text-[10px] text-brand-gray dark:text-emerald-200/80 uppercase font-bold">Organic & Plastic Free</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Image Banner with Floating Parallax */}
          <div className="lg:col-span-6 relative animate-fadeIn">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-emerald-900 aspect-[4/3] group cursor-pointer bg-white dark:bg-brand-dark-card" onClick={() => onSelectProduct(PRODUCTS[4])}>
              <img 
                src="/products/wave_pendant_light.png" 
                alt="Wave Woven Bamboo Pendant Lamp" 
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Floating Animated Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 dark:bg-brand-dark-card/95 backdrop-blur-md p-4.5 rounded-2xl shadow-xl border border-brand-gold/40 flex items-center justify-between animate-floatSlow">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-brand-gold/30 bg-brand-beige dark:bg-emerald-950">
                    <img src="/products/wave_pendant_light.png" alt="Thumb" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" /> Signature Masterpiece
                    </span>
                    <h4 className="text-xs font-bold text-brand-charcoal dark:text-amber-100">Wave Woven Bamboo Pendant Lamp</h4>
                    <p className="text-[10px] text-brand-gray dark:text-emerald-200/80">Sculptural Assam Bamboo • Warm Glow</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-brand-green dark:text-amber-300 block">₹2,499.00</span>
                  <span className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-300/30">In Stock</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Value Props Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-brand-dark-card rounded-3xl p-8 shadow-md border border-brand-gold/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-colors duration-400">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-beige dark:hover:bg-emerald-950/60 transition-all duration-300 group hover:-translate-y-1 cursor-pointer">
                <div className="p-3.5 bg-brand-beige dark:bg-emerald-950 text-brand-green dark:text-amber-300 rounded-2xl border border-brand-gold/30 group-hover:bg-brand-green group-hover:text-amber-200 transition-all duration-300 group-hover:scale-110 shrink-0">
                  <Icon className="w-6 h-6 text-amber-700 dark:text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-charcoal dark:text-amber-100">{item.title}</h3>
                  <p className="text-xs text-brand-gray dark:text-emerald-200/80 mt-1 leading-snug font-medium">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bestsellers Selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border-light dark:border-emerald-800/60 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 tracking-widest uppercase flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Official GreenTribe Catalog
            </span>
            <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100 mt-1">
              Shop Our Signature 8 Products
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-white dark:bg-brand-dark-card p-1.5 rounded-2xl border border-brand-gold/30 shadow-xs overflow-x-auto">
            {[
              { id: 'all', label: 'All 8 Products' },
              { id: 'lighting', label: 'Lighting & Decor' },
              { id: 'baskets', label: 'Baskets & Storage' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'emerald-gradient-bg text-amber-200 shadow-md scale-105' 
                    : 'text-brand-gray dark:text-emerald-200/80 hover:text-brand-charcoal dark:hover:text-amber-200 hover:bg-brand-beige dark:hover:bg-emerald-950/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelectProduct={onSelectProduct}
              onQuickView={onQuickView}
              onShowToast={onShowToast}
            />
          ))}
        </div>
      </section>

      {/* Interactive Craft Material Explorer */}
      <CraftMaterialExplorer 
        onNavigate={onNavigate} 
        onSelectProduct={onSelectProduct} 
      />

      {/* Category Spotlight Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 tracking-widest uppercase">Curated Collections</span>
          <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100">
            Crafted for Every Corner of Your Home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryHighlights.map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigate('shop')}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-brand-gold/30 hover:-translate-y-1.5 bg-white dark:bg-brand-dark-card"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/30">
                  {cat.count}
                </span>
                <h3 className="brand-font-serif text-xl font-bold pt-1">{cat.name}</h3>
                <span className="text-xs text-amber-200 font-semibold group-hover:underline flex items-center gap-1 pt-1">
                  Explore Collection →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Story Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="emerald-animated-bg text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-brand-gold/40">
          
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="bg-brand-gold text-brand-charcoal text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              NECBDC Craft Empowerment Mission
            </span>

            <h2 className="brand-font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Rooted in Nature.<br />
              <span className="gold-gradient-text italic">Made for a Better Tomorrow.</span>
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              At greeNtribE, we create sustainable products that celebrate tradition, support artisans, and protect our planet for future generations. Every purchase directly empowers indigenous craftspeople across Assam, Tripura, and Meghalaya.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => onNavigate('impact')}
                className="bg-amber-500 hover:bg-amber-600 text-brand-charcoal text-xs sm:text-sm font-bold px-7 py-4 rounded-xl transition-all shadow-lg hover:scale-105"
              >
                Our Impact & Artisan Story
              </button>

              <button 
                onClick={onOpenVideo}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold px-6 py-4 rounded-xl transition-all flex items-center gap-2 backdrop-blur-md hover:scale-105"
              >
                <Play className="w-4 h-4 fill-white" /> Watch The Making Story
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
