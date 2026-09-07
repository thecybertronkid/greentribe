import React, { useState } from 'react';
import { Sparkles, ArrowRight, Grid, Layers, ShieldCheck, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function CollectionsPage({ onNavigate, onSelectProduct, onQuickView, selectedCategory, onShowToast }) {
  const [activeCollection, setActiveCollection] = useState(selectedCategory || 'all');

  const collections = [
    {
      id: 'Baskets & Storage',
      title: 'Baskets & Artisan Storage',
      tagline: 'Handwoven Bamboo Organization',
      description: 'Functional, eco-conscious storage solutions hand-knotted from Assam split bamboo. Perfect for living rooms, pantries, and vanity decor.',
      bannerBg: 'from-emerald-900 to-teal-950',
      badge: '2 Artisan Pieces',
      products: PRODUCTS.filter(p => p.category === 'Baskets & Storage')
    },
    {
      id: 'Trays & Platters',
      title: 'Cane Trays & Platters',
      tagline: 'Heritage Serveware',
      description: 'Sturdy, lightweight cane trays crafted with open-lattice weaving patterns by indigenous tribal artisans under the NECBDC initiative.',
      bannerBg: 'from-amber-900 to-stone-900',
      badge: '1 Artisan Piece',
      products: PRODUCTS.filter(p => p.category === 'Trays & Platters')
    },
    {
      id: 'Kitchen & Dining',
      title: 'Kitchen & Dining Essentials',
      tagline: 'Sustainable Culinary Utensils',
      description: 'Antimicrobial, heat-treated bamboo dish racks and dining accessories designed for natural, plastic-free homes.',
      bannerBg: 'from-green-900 to-emerald-950',
      badge: '1 Artisan Piece',
      products: PRODUCTS.filter(p => p.category === 'Kitchen & Dining')
    },
    {
      id: 'Home Decor',
      title: 'Lighting & Ambient Decor',
      tagline: 'Biophilic Illumination',
      description: 'Sculptural pendant lamps, ambient cylinder table lamps, and hydroponic planter lanterns casting hypnotic radial shadow art.',
      bannerBg: 'from-stone-900 to-emerald-950',
      badge: '4 Masterpieces',
      products: PRODUCTS.filter(p => p.category === 'Home Decor')
    }
  ];

  const displayedCollections = activeCollection === 'all' 
    ? collections 
    : collections.filter(c => c.id === activeCollection);

  return (
    <div className="space-y-16 pb-24">
      
      {/* Collections Page Hero Header */}
      <section className="relative overflow-hidden animated-mesh-bg border-b border-brand-gold/30 pt-8 pb-14 transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-gold/20 dark:bg-amber-400/20 text-brand-green dark:text-amber-300 text-xs font-bold uppercase tracking-widest border border-brand-gold/30">
            <Layers className="w-3.5 h-3.5 text-brand-gold" /> Official NECBDC Collections Showcase
          </span>
          <h1 className="brand-font-serif text-3xl sm:text-5xl font-bold tracking-tight text-brand-charcoal dark:text-amber-100">
            Curated Artisan <span className="gold-gradient-text italic">Collections</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-brand-gray dark:text-emerald-100/90 leading-relaxed font-medium">
            Explore our themed craft collections of authentic North East Indian cane and bamboo products. Each collection reflects centuries of tribal weaving heritage.
          </p>

          {/* Collection Filter Tabs */}
          <div className="pt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveCollection('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 ${
                activeCollection === 'all'
                  ? 'bg-brand-green text-amber-200 shadow-md border border-brand-gold/40'
                  : 'bg-white/80 dark:bg-brand-dark-surface/80 text-brand-charcoal dark:text-amber-100 hover:bg-brand-gold/20 border border-brand-border-light dark:border-emerald-800/40'
              }`}
            >
              All Collections ({PRODUCTS.length} Items)
            </button>

            {collections.map((col) => (
              <button
                key={col.id}
                onClick={() => setActiveCollection(col.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeCollection === col.id
                    ? 'bg-brand-green text-amber-200 shadow-md border border-brand-gold/40'
                    : 'bg-white/80 dark:bg-brand-dark-surface/80 text-brand-charcoal dark:text-amber-100 hover:bg-brand-gold/20 border border-brand-border-light dark:border-emerald-800/40'
                }`}
              >
                {col.title} ({col.products.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Collections List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {displayedCollections.map((col) => (
          <section key={col.id} id={col.id.replace(/[^a-zA-Z0-9]/g, '-')} className="space-y-8 scroll-mt-36">
            
            {/* Collection Header Banner Card */}
            <div className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-r ${col.bannerBg} text-white border border-brand-gold/30 shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6`}>
              <div className="space-y-2 max-w-2xl relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30">
                    {col.tagline}
                  </span>
                  <span className="text-xs font-bold text-emerald-200">
                    {col.badge}
                  </span>
                </div>
                <h2 className="brand-font-serif text-2xl sm:text-4xl font-bold tracking-tight text-amber-100">
                  {col.title}
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
                  {col.description}
                </p>
              </div>

              <div className="relative z-10 shrink-0">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-5 py-3 rounded-xl bg-amber-400 text-emerald-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-lg flex items-center gap-2"
                >
                  View All in Shop <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative Subtle Background Vector */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
                <Grid className="w-96 h-96 text-white" />
              </div>
            </div>

            {/* Collection Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {col.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={() => onSelectProduct(product)}
                  onQuickView={() => onQuickView(product)}
                  onShowToast={onShowToast}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
