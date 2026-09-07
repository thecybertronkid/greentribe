import React, { useState } from 'react';
import { Sparkles, Play, Compass, Feather, Award, Heart, ArrowRight, ShieldCheck, BookOpen, Wind } from 'lucide-react';

export default function StoryPage({ onNavigate, onOpenVideo }) {
  const [activeTab, setActiveTab] = useState('sourcing');

  const craftSteps = {
    sourcing: {
      step: "01",
      title: "Sustainable Wild Sourcing",
      subtitle: "Ethically Harvested Assam Bamboo & Cane",
      desc: "Artisans harvest mature 3-to-5-year-old bamboo poles from eco-managed bamboo groves in Assam during specific lunar cycles to ensure natural durability and pest resistance.",
      image: "/products/bamboo_basket.png",
      tag: "100% Organic Origin"
    },
    splitting: {
      step: "02",
      title: "Precision Hand Splitting",
      subtitle: "Centuries-Old Blade Mastery",
      desc: "Using specialized indigenous knives ('Dao'), master craftsmen split thick bamboo trunks into razor-thin, pliable ribbons with sub-millimeter precision without machine processing.",
      image: "/products/round_cane_tray.png",
      tag: "Artisan Craftsmanship"
    },
    weaving: {
      step: "03",
      title: "Open-Lattice Hand Weaving",
      subtitle: "Intricate Geometric Artistry",
      desc: "Ribbons are hand-woven using traditional diamond and wave lattice techniques passed down across generations, creating structural integrity and mesmerizing light patterns.",
      image: "/products/wave_pendant_light.png",
      tag: "Tribal Heritage Weave"
    },
    finishing: {
      step: "04",
      title: "Natural Protective Finishing",
      subtitle: "Zero-Chemical Preservation",
      desc: "Each finished piece is treated with natural organic oils and solar seasoning, giving it a rich warm luster while preserving 100% biodegradability.",
      image: "/products/table_lamp.png",
      tag: "Zero-Waste & Eco-Safe"
    }
  };

  const storyChapters = [
    {
      num: "Chapter I",
      title: "The Whispers of the Bamboo Forests",
      location: "Brahmaputra Valley, North East India",
      excerpt: "For over a thousand years, the indigenous communities of North East India have lived in quiet harmony with bamboo. Bamboo is not merely a material here; it is woven into birth cradles, family homes, daily utensils, and sacred ancestral rituals.",
      quote: "Bamboo is the green soul of North East India. It bends in the fierce storm, yet never breaks.",
      bg: "bg-emerald-950/80 text-amber-100 border-brand-gold/40"
    },
    {
      num: "Chapter II",
      title: "The Hands That Weave Stories",
      location: "Jorhat & Guwahati Craft Clusters",
      excerpt: "Every curve of a GreenTribe pendant lamp and every weave of a cane tray carries the touch of a human hand. Master artisans sitting under bamboo thatched roofs channel generations of tribal wisdom, transforming humble raw culms into living art.",
      quote: "No two pieces are identical. Each weave holds the heartbeat and quiet patience of the artisan.",
      bg: "bg-brand-beige dark:bg-brand-dark-surface text-brand-charcoal dark:text-amber-100 border-brand-gold/30"
    },
    {
      num: "Chapter III",
      title: "The Genesis of GreenTribe under NECBDC",
      location: "Official Govt. Council Initiative",
      excerpt: "GreenTribe was born to bridge ancient artisan heritage with modern eco-conscious living. Partnered officially with the North East Cane and Bamboo Development Council (NECBDC), we empower rural tribal craftspeople with dignified livelihoods.",
      quote: "Bringing sustainable tribal luxury directly from indigenous forest communities to conscious modern homes.",
      bg: "bg-emerald-900/90 text-white border-emerald-700/60"
    }
  ];

  return (
    <div className="space-y-20 pb-24 overflow-hidden">
      
      {/* Storytelling Hero Section with Animated Falling Bamboo Leaf Wind */}
      <section className="relative overflow-hidden animated-mesh-bg border-b border-brand-gold/30 pt-12 pb-20 transition-colors duration-400">
        
        {/* Floating Animated Leaf Vectors in Wind */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-10 animate-bounce duration-10000">
            <Wind className="w-16 h-16 text-emerald-600/40 dark:text-emerald-400/40" />
          </div>
          <div className="absolute top-1/2 right-12 animate-pulse duration-7000">
            <Feather className="w-20 h-20 text-amber-600/30 dark:text-amber-400/30" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 dark:bg-amber-400/20 text-brand-green dark:text-amber-300 text-xs font-bold uppercase tracking-widest border border-brand-gold/30 animate-pulse">
            <BookOpen className="w-3.5 h-3.5 text-brand-gold" /> An Indigenous Craft Legend
          </span>

          <h1 className="brand-font-serif text-4xl sm:text-6xl font-bold tracking-tight text-brand-charcoal dark:text-amber-100 leading-tight">
            The Story of <span className="gold-gradient-text italic">GreenTribe</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brand-gray dark:text-emerald-100/90 leading-relaxed font-medium">
            Where ancient tribal wisdom meets sustainable modern living. Step into the misty bamboo groves of North East India and discover the hands that weave timeless heritage.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={onOpenVideo}
              className="px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2.5 border border-brand-gold/40 hover:scale-105"
            >
              <Play className="w-4 h-4 fill-amber-300 text-amber-300" /> Watch Artisan Story Film
            </button>
          </div>
        </div>
      </section>

      {/* Animated Story Chapters - Scroll Book Layout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Heritage Chronicles</span>
          <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100">
            Unfolding the <span className="gold-gradient-text italic">Craft Chapters</span>
          </h2>
        </div>

        <div className="space-y-12">
          {storyChapters.map((chap, idx) => (
            <div 
              key={chap.num}
              className={`p-8 sm:p-12 rounded-3xl border shadow-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.01] ${chap.bg}`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-current/20">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase opacity-75">{chap.num}</span>
                  <h3 className="brand-font-serif text-2xl sm:text-3xl font-bold mt-1">{chap.title}</h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-current/20">
                  {chap.location}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base leading-relaxed opacity-90 font-medium">
                    {chap.excerpt}
                  </p>
                  <blockquote className="italic border-l-2 border-brand-gold pl-4 py-1 text-xs sm:text-sm font-serif opacity-85">
                    "{chap.quote}"
                  </blockquote>
                </div>

                <div className="lg:col-span-4 flex justify-end">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-brand-gold/40 flex items-center justify-center text-center p-2 text-[10px] uppercase font-bold tracking-widest opacity-80 rotate-12">
                    Official NECBDC Story Seal
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Craft Process Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">The Art of Creation</span>
          <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100">
            From Bamboo Grove to <span className="gold-gradient-text italic">Finished Masterpiece</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray dark:text-emerald-100/90 font-medium">
            Explore the 4 traditional steps our artisans take to hand-craft every single GreenTribe creation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(craftSteps).map((key) => {
            const item = craftSteps[key];
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-2xl text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeTab === key
                    ? 'bg-brand-green text-amber-200 shadow-xl border border-brand-gold/50 scale-105'
                    : 'bg-white/80 dark:bg-brand-dark-surface/80 text-brand-charcoal dark:text-amber-100 border border-brand-border-light dark:border-emerald-800/40 hover:bg-brand-gold/10'
                }`}
              >
                <span className="text-brand-gold font-serif">{item.step}.</span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-beige dark:bg-brand-dark-card border border-brand-gold/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/30">
              {craftSteps[activeTab].tag}
            </span>
            <div className="space-y-2">
              <span className="text-2xl font-serif font-bold text-brand-gold">{craftSteps[activeTab].step}</span>
              <h3 className="brand-font-serif text-3xl font-bold text-brand-charcoal dark:text-amber-100">
                {craftSteps[activeTab].title}
              </h3>
              <h4 className="text-sm font-semibold text-brand-green dark:text-amber-300">
                {craftSteps[activeTab].subtitle}
              </h4>
            </div>
            <p className="text-sm text-brand-gray dark:text-emerald-100/90 leading-relaxed font-medium">
              {craftSteps[activeTab].desc}
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group overflow-hidden rounded-2xl border-2 border-brand-gold/40 shadow-xl max-w-sm">
              <img
                src={craftSteps[activeTab].image}
                alt={craftSteps[activeTab].title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-amber-200 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Authenticity Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center pt-8">
        <div className="p-8 sm:p-12 rounded-3xl emerald-gradient-bg border border-brand-gold/40 text-white shadow-2xl space-y-6">
          <h3 className="brand-font-serif text-2xl sm:text-4xl font-bold text-amber-100">
            Be Part of Our Next Chapter
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl mx-auto font-medium leading-relaxed">
            By bringing GreenTribe handcrafted cane and bamboo items into your home, you preserve ancient tribal craft heritage and support rural artisan livelihoods.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('shop')}
              className="px-6 py-3.5 rounded-xl bg-amber-400 text-emerald-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-lg flex items-center gap-2"
            >
              Explore Artisan Collection <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
