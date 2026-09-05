import React, { useEffect, useState } from 'react';

export default function CustomBambooCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea, label, .cursor-pointer');
      setIsHovered(Boolean(isClickable));
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="hidden md:block fixed pointer-events-none z-[100] transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `scale(${isHovered ? 1.25 : 1})`,
      }}
    >
      <svg 
        width="30" 
        height="36" 
        viewBox="0 0 28 34" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-200 ${
          isHovered ? 'filter drop-shadow-[0_0_10px_rgba(107,180,34,0.9)] scale-110' : 'drop-shadow-md'
        }`}
      >
        {/* 3D Dark Shadow Bevel Layer */}
        <path d="M4 2L24 20L15 21L21 31L16.5 33L10.5 23L4 28V2Z" fill="#1B4D0F" />
        
        {/* Main Green Pointer Body */}
        <path d="M2 0L22 18L13 19L19 29L14.5 31L8.5 21L2 26V0Z" fill={isHovered ? "#85D92C" : "#6BB422"} stroke="#22520F" strokeWidth="1.5" />
        
        {/* White Pill Highlight Strip */}
        <rect x="4.5" y="4.5" width="3" height="12" rx="1.5" fill="white" opacity="0.95" />
        <circle cx="6" cy="19.5" r="1.5" fill="white" opacity="0.95" />
      </svg>
    </div>
  );
}
