import React from 'react';
import { Play, Award, Heart, Leaf, Users, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function StoryImpactPage({ onNavigate, onOpenVideo }) {
  const impactStats = [
    { number: "500+", label: "Products Sold", desc: "Handcrafted across India" },
    { number: "50+", label: "Artisans Supported", desc: "Craft clusters in North East" },
    { number: "100%", label: "Eco-Friendly Materials", desc: "Sustainably harvested cane & bamboo" },
    { number: "1,000+", label: "Happy Customers", desc: "Rating 4.9/5 stars" }
  ];

  const pillars = [
    {
      title: "Sustainable",
      desc: "We use natural, renewable and eco-friendly materials harvested from North East forests without pesticides or deforestation.",
      icon: Leaf
    },
    {
      title: "Handcrafted",
      desc: "Each piece is carefully handmade by skilled artisans using ancestral lattice weaving techniques passed down through generations.",
      icon: Sparkles
    },
    {
      title: "Community",
      desc: "We work closely with local artisans and rural communities under the guidance of NECBDC to ensure fair trade and sustainable income.",
      icon: Users
    },
    {
      title: "Better Planet",
      desc: "Small choices today for a greener tomorrow. Plastic-free packaging and zero-carbon craft production processes.",
      icon: Heart
    }
  ];

  const regions = [
    { name: "Assam", focus: "Finest Split Bamboo & Utility Basketry" },
    { name: "Tripura", focus: "Intricate Assam Cane Wall Medallions & Furniture" },
    { name: "Meghalaya", focus: "Traditional Lattice Serving Trays & Storage Containers" },
    { name: "Nagaland", focus: "Tribal Dye Crafts & Rattan Desktop Accessories" }
  ];

  return (
    <div className="space-y-20 pb-24">
      
      {/* Hero Banner */}
      <section className="relative emerald-gradient-bg text-white overflow-hidden py-16 sm:py-24 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-emerald-900/80 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-emerald-700 shadow-sm">
              <Award className="w-4 h-4 text-amber-400" /> North East Cane & Bamboo Development Council
            </span>

            <h1 className="brand-font-serif text-4xl sm:text-5xl font-bold leading-tight">
              Rooted in Nature.<br />
              <span className="gold-gradient-text italic">Made for a Better Tomorrow.</span>
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-xl font-medium">
              At greeNtribE, we create sustainable products that celebrate tradition, support artisans, and protect our planet for future generations.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="bg-amber-500 hover:bg-amber-600 text-brand-charcoal text-xs sm:text-sm font-bold px-7 py-4 rounded-2xl transition-all shadow-lg hover:scale-105"
              >
                Shop Handcrafted Catalog
              </button>

              <button
                onClick={onOpenVideo}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold px-6 py-4 rounded-2xl transition-all flex items-center gap-2 backdrop-blur-md hover:scale-105"
              >
                <Play className="w-4 h-4 fill-white" /> Watch The Making Story
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-800 relative group cursor-pointer" onClick={onOpenVideo}>
              <img 
                src="/products/wave_pendant_light.png" 
                alt="Artisan weaving cane" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 text-brand-green flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-brand-green ml-1" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Impact in Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 tracking-widest uppercase">Empowerment Metrics</span>
          <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100">
            Our Impact in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-brand-dark-card p-8 rounded-3xl border border-brand-border-light dark:border-brand-gold/30 text-center luxury-card-shadow space-y-2 transition-colors duration-400">
              <span className="brand-font-serif text-4xl font-bold text-brand-green dark:text-amber-300 block">
                {stat.number}
              </span>
              <h3 className="text-sm font-bold text-brand-charcoal dark:text-amber-100">{stat.label}</h3>
              <p className="text-xs text-brand-gray dark:text-emerald-200/80 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Drives Us 4 Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 tracking-widest uppercase">Our Core Beliefs</span>
          <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100">
            What Drives Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-white dark:bg-brand-dark-card p-7 rounded-3xl border border-brand-border-light dark:border-brand-gold/30 luxury-card-shadow space-y-3.5 transition-colors duration-400">
                <div className="w-12 h-12 rounded-2xl bg-brand-beige dark:bg-emerald-950 text-brand-green dark:text-amber-300 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                </div>
                <h3 className="brand-font-serif text-lg font-bold text-brand-charcoal dark:text-amber-100">{p.title}</h3>
                <p className="text-xs text-brand-gray dark:text-emerald-200/80 leading-relaxed font-medium">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Making Story Video Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-brand-dark-card rounded-3xl p-6 sm:p-10 border border-brand-border-light dark:border-brand-gold/30 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-colors duration-400">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">Documentary Feature</span>
            <h2 className="brand-font-serif text-3xl font-bold text-brand-charcoal dark:text-amber-100">
              The Making Story
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray dark:text-emerald-200/80 leading-relaxed font-medium">
              Watch how our products come to life through centuries-old bamboo splitting, natural dying, and hand-weaving techniques in the rural craft clusters of North East India.
            </p>
            <button
              onClick={onOpenVideo}
              className="emerald-gradient-bg text-amber-200 text-xs font-bold px-7 py-3.5 rounded-xl shadow-md hover:opacity-95 transition-all flex items-center gap-2 border border-brand-gold/30"
            >
              <Play className="w-4 h-4 fill-amber-300 text-amber-300" /> PLAY VIDEO DOCUMENTARY
            </button>
          </div>

          <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-brand-gold/30 cursor-pointer group bg-brand-dark-card" onClick={onOpenVideo}>
            <img 
              src="/products/swirl_pendant_light.png" 
              alt="Making Story Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white text-brand-green flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-brand-green ml-1" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Craft Cluster Regional Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 tracking-widest uppercase">Heritage Clusters</span>
          <h2 className="brand-font-serif text-3xl font-bold text-brand-charcoal dark:text-amber-100">
            North East Artisan Regions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((reg, idx) => (
            <div key={idx} className="bg-brand-beige-dark/30 dark:bg-emerald-950/60 p-6 rounded-3xl border border-brand-border-light dark:border-brand-gold/30 space-y-2 transition-colors duration-400">
              <div className="flex items-center gap-2 text-brand-green dark:text-amber-300 font-bold text-sm">
                <MapPin className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>{reg.name}</span>
              </div>
              <p className="text-xs text-brand-gray dark:text-emerald-200/80 leading-relaxed font-medium">{reg.focus}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
