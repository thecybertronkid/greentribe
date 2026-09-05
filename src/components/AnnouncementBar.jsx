import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-green text-white text-xs py-2 px-4 flex justify-between items-center transition-colors">
      <div className="hidden md:flex items-center gap-2 text-emerald-200">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Official Partner of NECBDC (North East Cane & Bamboo Development Council)</span>
      </div>
      
      <div className="mx-auto md:mx-0 flex items-center gap-1.5 font-medium tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>Free Shipping on Orders Over ₹1,999 | 100% Handcrafted Artisanal Heritage</span>
      </div>

      <div className="hidden md:flex items-center gap-4 text-emerald-100">
        <span>INR (₹)</span>
        <span className="opacity-40">|</span>
        <a href="#contact" className="hover:underline">Need Help?</a>
      </div>
    </div>
  );
}
