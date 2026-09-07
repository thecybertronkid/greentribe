import React from 'react';
import { Users, Heart, ShieldCheck, Leaf, Award, Globe, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export default function ImpactPage({ onNavigate, onOpenVideo }) {
  const impactMetrics = [
    {
      value: "50+",
      label: "Tribal Artisans Employed",
      desc: "Providing dignified, year-round fair wages to indigenous weavers across Assam & Meghalaya.",
      icon: Users,
      color: "text-amber-500"
    },
    {
      value: "60%",
      label: "Women Artisan Empowerment",
      desc: "Enabling rural women to gain financial independence through flexible home-based weaving clusters.",
      icon: Heart,
      color: "text-emerald-500"
    },
    {
      value: "100%",
      label: "Biodegradable & Zero-Plastic",
      desc: "Every item is crafted from 100% natural, ethically harvested cane and organic Assam bamboo.",
      icon: Leaf,
      color: "text-teal-500"
    },
    {
      value: "3,500+ Kg",
      label: "Plastic Replaced",
      desc: "Eliminating synthetic plastic storage and synthetic tableware in modern Indian homes.",
      icon: ShieldCheck,
      color: "text-amber-600"
    }
  ];

  const sdgGoals = [
    {
      code: "SDG 8",
      title: "Decent Work & Economic Growth",
      desc: "Promoting sustained, inclusive economic growth and fair trade wages for indigenous tribal craft clusters.",
      bg: "bg-amber-900/40 border-amber-500/30"
    },
    {
      code: "SDG 12",
      title: "Responsible Production",
      desc: "Zero-waste manufacturing process utilizing 100% renewable, fast-growing Assam bamboo.",
      bg: "bg-emerald-900/40 border-emerald-500/30"
    },
    {
      code: "SDG 15",
      title: "Life on Land & Forestry",
      desc: "Protecting natural forest ecosystems by discouraging timber deforestation in favor of sustainable bamboo.",
      bg: "bg-teal-900/40 border-teal-500/30"
    }
  ];

  const impactStories = [
    {
      name: "Sunita Rabha",
      role: "Master Bamboo Weaver, Jorhat Cluster",
      quote: "Working with GreenTribe under the NECBDC initiative allowed me to send my daughter to college while continuing the craft my grandmother taught me.",
      badge: "Lead Artisan"
    },
    {
      name: "Biren Gogoi",
      role: "Cane Craftsman, Dibrugarh",
      quote: "Before, middlemen bought our handwoven trays for pennies. Now we receive direct fair-trade pricing that honors our labor and heritage.",
      badge: "Master Craftsman"
    }
  ];

  return (
    <div className="space-y-20 pb-24 overflow-hidden">
      
      {/* Impact Hero Section */}
      <section className="relative overflow-hidden animated-mesh-bg border-b border-brand-gold/30 pt-12 pb-20 transition-colors duration-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 dark:bg-amber-400/20 text-brand-green dark:text-amber-300 text-xs font-bold uppercase tracking-widest border border-brand-gold/30">
            <Globe className="w-3.5 h-3.5 text-brand-gold" /> Socio-Economic & Ecological Impact
          </span>

          <h1 className="brand-font-serif text-4xl sm:text-6xl font-bold tracking-tight text-brand-charcoal dark:text-amber-100 leading-tight">
            Our Purpose & <span className="gold-gradient-text italic">Measurable Impact</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-brand-gray dark:text-emerald-100/90 leading-relaxed font-medium">
            Empowering indigenous tribal artisans, championing fair-trade livelihoods, and replacing synthetic plastics with zero-carbon bamboo craftsmanship across India.
          </p>
        </div>
      </section>

      {/* Impact Metric Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div 
                key={metric.label}
                className="p-8 rounded-3xl bg-brand-beige dark:bg-brand-dark-card border border-brand-gold/30 shadow-xl space-y-4 hover:border-brand-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 dark:bg-amber-400/10 flex items-center justify-center border border-brand-gold/30 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div>
                  <span className="brand-font-serif text-4xl font-extrabold text-brand-green dark:text-amber-200">
                    {metric.value}
                  </span>
                  <h3 className="font-bold text-sm text-brand-charcoal dark:text-amber-100 mt-1">
                    {metric.label}
                  </h3>
                </div>
                <p className="text-xs text-brand-gray dark:text-emerald-100/80 leading-relaxed font-medium">
                  {metric.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sustainable Bamboo Environmental Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl emerald-gradient-bg text-white border border-brand-gold/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-3.5 py-1.5 rounded-full border border-amber-300/30">
              <Leaf className="w-3.5 h-3.5 text-amber-300" /> Why Bamboo is the Future
            </span>
            <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-amber-100 leading-snug">
              The Eco-Superpower of Assam Bamboo
            </h2>
            <p className="text-sm text-emerald-100/90 leading-relaxed font-medium">
              Bamboo is the fastest-growing wooden plant on Earth, capable of growing up to 3 feet per day. Harvested ethically without uprooting the mother plant, bamboo naturally regenerates itself continuously.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2.5 bg-black/20 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Absorbs 35% more CO₂ than trees</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/20 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Zero pesticides or artificial fertilizers</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/20 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Prevents soil erosion in riverbanks</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/20 p-3 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>100% naturally compostable & zero-waste</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="p-8 rounded-2xl bg-black/30 border border-amber-400/30 text-center space-y-4 max-w-sm">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 mx-auto flex items-center justify-center border border-amber-400/40">
                <TrendingUp className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="brand-font-serif text-2xl font-bold text-amber-200">
                Zero Carbon Footprint
              </h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">
                By choosing handcrafted bamboo products, you actively lower household carbon footprints and reduce global reliance on single-use plastics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UN Sustainable Development Goals (SDGs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Global Alignment</span>
          <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100">
            Aligned with UN <span className="gold-gradient-text italic">Sustainable Development Goals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sdgGoals.map((sdg) => (
            <div 
              key={sdg.code}
              className={`p-8 rounded-3xl border shadow-xl space-y-4 ${sdg.bg} text-amber-100`}
            >
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-brand-gold text-brand-charcoal font-mono">
                {sdg.code}
              </span>
              <h3 className="brand-font-serif text-xl font-bold text-white mt-2">
                {sdg.title}
              </h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">
                {sdg.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Artisan Testimonial Quotes */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Artisan Voices</span>
          <h2 className="brand-font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100">
            Real Stories, Real <span className="gold-gradient-text italic">Livelihoods</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactStories.map((story) => (
            <div key={story.name} className="p-8 rounded-3xl bg-brand-beige dark:bg-brand-dark-card border border-brand-gold/30 shadow-xl space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                {story.badge}
              </span>
              <blockquote className="text-sm italic text-brand-charcoal dark:text-emerald-100/90 leading-relaxed font-serif">
                "{story.quote}"
              </blockquote>
              <div className="pt-2 border-t border-brand-border-light dark:border-emerald-800/40">
                <h4 className="font-bold text-sm text-brand-green dark:text-amber-200">{story.name}</h4>
                <p className="text-xs text-brand-gray dark:text-emerald-100/70 font-medium">{story.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-beige dark:bg-brand-dark-card border border-brand-gold/40 shadow-2xl space-y-6">
          <h3 className="brand-font-serif text-2xl sm:text-4xl font-bold text-brand-charcoal dark:text-amber-100">
            Support Indigenous Artisans Today
          </h3>
          <p className="text-xs sm:text-sm text-brand-gray dark:text-emerald-100/90 max-w-xl mx-auto font-medium leading-relaxed">
            Every purchase directly funds fair-trade artisan wages and preserves the rich cane and bamboo weaving traditions of North East India.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('shop')}
              className="px-6 py-3.5 rounded-xl bg-brand-green text-amber-200 font-bold text-xs hover:bg-brand-green-hover transition-colors shadow-lg flex items-center gap-2 border border-brand-gold/40"
            >
              Shop Handcrafted Catalog <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
