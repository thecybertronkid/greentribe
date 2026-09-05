import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function CraftMaterialExplorer({ onNavigate, onSelectProduct }) {
  const [activeMat, setActiveMat] = useState('Bamboo');

  const materialsData = {
    Bamboo: {
      title: "Golden Assam Bamboo (Melocanna baccifera)",
      tagline: "Rapidly Renewable, Lightweight & Antimicrobial",
      desc: "Harvested from mature bamboo grooves across Meghalaya & Assam. Seasoned naturally in silted riverbeds to eliminate sugars and protect against humidity and termites.",
      tensile: "96/100",
      durability: "25+ Years",
      ecoScore: "Zero Carbon Footprint",
      origin: "Jorhat & Ri-Bhoi, North East India",
      image: "/products/swirl_pendant_light.png"
    },
    Cane: {
      title: "Assam Wild Cane (Daemonorops jenkinsiana)",
      tagline: "Ultra-Flexible & Naturally Glossy",
      desc: "Flexible cane stems harvested from sub-tropical rainforests. Hand-stripped into silky fibers for fine weaving, lamp frames, and planter baskets.",
      tensile: "98/100",
      durability: "30+ Years",
      ecoScore: "100% Biodegradable",
      origin: "Karbi Anglong, Assam",
      image: "/products/planter_lantern.png"
    }
  };

  const current = materialsData[activeMat] || materialsData['Bamboo'];
  const matchingProducts = PRODUCTS.filter(p => p.material === activeMat).slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-gold/40 shadow-xl space-y-10 relative overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border-light pb-6">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-600 animate-spin" style={{ animationDuration: '20s' }} />
              Interactive Material Guide
            </span>
            <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal mt-1">
              Explore Our Indigenous Craft Materials
            </h2>
          </div>

          {/* Interactive Material Pills */}
          <div className="flex items-center gap-2 bg-brand-beige p-1.5 rounded-2xl border border-brand-gold/30">
            {['Bamboo', 'Cane'].map((mat) => (
              <button
                key={mat}
                onClick={() => setActiveMat(mat)}
                className={`text-xs font-bold px-6 py-2.5 rounded-xl transition-all ${
                  activeMat === mat 
                    ? 'emerald-gradient-bg text-amber-200 shadow-md scale-105' 
                    : 'text-brand-gray hover:text-brand-charcoal hover:bg-white'
                }`}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Detail Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn key={activeMat}">
          
          {/* Media View */}
          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-brand-gold/30 group bg-brand-beige-dark/30">
            <img 
              src={current.image} 
              alt={current.title} 
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/30">
                Craft Origin: {current.origin}
              </span>
              <h3 className="brand-font-serif text-xl font-bold">{current.title}</h3>
            </div>
          </div>

          {/* Metrics & Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                {current.tagline}
              </span>
              <h3 className="brand-font-serif text-2xl font-bold text-brand-charcoal mt-3">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed mt-3">
                {current.desc}
              </p>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 bg-brand-beige p-4 rounded-2xl border border-brand-gold/20 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-gray">Flex Strength</span>
                <span className="brand-font-serif text-lg font-bold text-brand-green block mt-0.5">{current.tensile}</span>
              </div>
              <div className="border-x border-brand-border-light">
                <span className="text-[10px] uppercase font-bold text-brand-gray">Expected Lifespan</span>
                <span className="brand-font-serif text-lg font-bold text-amber-700 block mt-0.5">{current.durability}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-gray">Eco Impact</span>
                <span className="brand-font-serif text-xs font-bold text-emerald-800 block mt-1">{current.ecoScore}</span>
              </div>
            </div>

            {/* Matching Products Teaser */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                Products Crafted With {activeMat}:
              </span>
              <div className="grid grid-cols-3 gap-3">
                {matchingProducts.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => onSelectProduct(p)}
                    className="bg-brand-beige/60 hover:bg-emerald-50 p-2.5 rounded-xl border border-brand-border-light cursor-pointer transition-all hover:scale-105 flex items-center gap-2 group"
                  >
                    <img src={p.image} alt={p.title} className="w-10 h-10 rounded-lg object-cover shrink-0 bg-white" />
                    <div className="min-w-0">
                      <h4 className="text-[11px] font-bold text-brand-charcoal truncate group-hover:text-brand-green">{p.title}</h4>
                      <span className="text-[10px] text-brand-green font-semibold">₹{p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
