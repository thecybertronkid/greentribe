import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  const marqueeItems = Array(6).fill("Free Shipping on Orders Over ₹1,999 | 100% Handcrafted Artisanal Heritage");

  return (
    <div className="bg-brand-green text-white text-[11px] sm:text-xs py-2 overflow-hidden relative border-b border-brand-gold/30 select-none shadow-sm">
      <div className="flex whitespace-nowrap animate-marquee">
        
        {/* Track 1 */}
        <div className="flex items-center gap-8 px-4 font-bold tracking-widest text-amber-200">
          {marqueeItems.map((text, i) => (
            <React.Fragment key={`track1-${i}`}>
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
                {text}
              </span>
              <span className="text-amber-400/60 font-normal">✦</span>
            </React.Fragment>
          ))}
        </div>

        {/* Track 2 (Duplicate for Seamless Loop) */}
        <div className="flex items-center gap-8 px-4 font-bold tracking-widest text-amber-200" aria-hidden="true">
          {marqueeItems.map((text, i) => (
            <React.Fragment key={`track2-${i}`}>
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
                {text}
              </span>
              <span className="text-amber-400/60 font-normal">✦</span>
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
}
