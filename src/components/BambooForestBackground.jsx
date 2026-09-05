import React, { useEffect, useState } from 'react';

export default function BambooForestBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Gentle parallax sway based on cursor position
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35 select-none">
      
      {/* Soft Misty Sun Light Shafts */}
      <div 
        className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-radial from-amber-100/40 via-emerald-100/20 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-radial from-emerald-100/30 via-amber-50/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '12s' }}
      />

      {/* SVG Bamboo Stalks & Waving Leaves Layer */}
      <svg 
        className="w-full h-full text-brand-green/20"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0px)`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        <defs>
          <linearGradient id="bambooGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#153B2C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0F291E" stopOpacity="0.03" />
          </linearGradient>
          
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#153B2C" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Left Bamboo Stalk Cluster */}
        <g className="animate-swayWind" style={{ animationDuration: '9s', transformOrigin: 'bottom left' }}>
          <rect x="80" y="0" width="8" height="900" fill="url(#bambooGrad1)" rx="4" />
          <rect x="78" y="200" width="12" height="3" fill="#153B2C" opacity="0.2" />
          <rect x="78" y="450" width="12" height="3" fill="#153B2C" opacity="0.2" />
          <rect x="78" y="700" width="12" height="3" fill="#153B2C" opacity="0.2" />

          <rect x="140" y="0" width="14" height="900" fill="url(#bambooGrad1)" rx="7" />
          <rect x="137" y="150" width="20" height="4" fill="#153B2C" opacity="0.2" />
          <rect x="137" y="380" width="20" height="4" fill="#153B2C" opacity="0.2" />
          <rect x="137" y="620" width="20" height="4" fill="#153B2C" opacity="0.2" />
          
          {/* Leaves Waving left top */}
          <path d="M148,150 C180,120 250,140 280,180 C240,180 180,170 148,150 Z" fill="url(#leafGrad)" />
          <path d="M148,155 C210,160 270,210 290,260 C240,230 190,190 148,155 Z" fill="url(#leafGrad)" />
          <path d="M84,200 C40,170 -10,190 -30,230 C20,220 60,210 84,200 Z" fill="url(#leafGrad)" />
        </g>

        {/* Right Bamboo Stalk Cluster */}
        <g className="animate-swayWind" style={{ animationDuration: '11s', animationDelay: '1.5s', transformOrigin: 'bottom right' }}>
          <rect x="1320" y="0" width="16" height="900" fill="url(#bambooGrad1)" rx="8" />
          <rect x="1316" y="180" width="24" height="4" fill="#153B2C" opacity="0.2" />
          <rect x="1316" y="420" width="24" height="4" fill="#153B2C" opacity="0.2" />
          <rect x="1316" y="680" width="24" height="4" fill="#153B2C" opacity="0.2" />

          <rect x="1390" y="0" width="10" height="900" fill="url(#bambooGrad1)" rx="5" />
          <rect x="1387" y="260" width="16" height="3" fill="#153B2C" opacity="0.2" />
          <rect x="1387" y="520" width="16" height="3" fill="#153B2C" opacity="0.2" />

          {/* Leaves Waving right top */}
          <path d="M1320,180 C1260,140 1200,150 1150,190 C1200,200 1260,200 1320,180 Z" fill="url(#leafGrad)" />
          <path d="M1320,185 C1250,210 1190,270 1160,320 C1210,280 1270,230 1320,185 Z" fill="url(#leafGrad)" />
        </g>

        {/* Center Top Swaying Canopy Leaves */}
        <g className="animate-swayWind" style={{ animationDuration: '13s', animationDelay: '3s', transformOrigin: 'top center' }}>
          <path d="M600,0 C680,60 780,80 850,50 C760,100 680,80 600,0 Z" fill="url(#leafGrad)" />
          <path d="M720,0 C800,80 920,100 1000,60 C900,110 810,90 720,0 Z" fill="url(#leafGrad)" />
          <path d="M400,0 C480,90 560,120 640,90 C560,130 470,110 400,0 Z" fill="url(#leafGrad)" />
        </g>
      </svg>

      {/* Floating Falling Bamboo Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-leafDrift"
            style={{
              left: `${15 + i * 15}%`,
              top: `-5%`,
              animationDuration: `${12 + i * 3}s`,
              animationDelay: `${i * 2.5}s`,
              animationIterationCount: 'infinite'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 2C6.5 2 2 6.5 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" 
                fill="#C5A059" 
                opacity="0.35"
              />
            </svg>
          </div>
        ))}
      </div>

    </div>
  );
}
