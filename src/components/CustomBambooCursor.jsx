import React, { useEffect, useState } from 'react';

export default function CustomBambooCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);

      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 45;

      setPos({ x: e.clientX, y: e.clientY });
      if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
        setAngle(newAngle);
      }

      lastX = e.clientX;
      lastY = e.clientY;

      // Check if hovering over clickable elements
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer');
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
      className="hidden md:block fixed pointer-events-none z-[100] transition-transform duration-100 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `translate(-50%, -50%) rotate(${angle}deg) scale(${isHovered ? 1.4 : 1})`,
      }}
    >
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        className={`transition-all duration-300 drop-shadow-md ${
          isHovered ? 'fill-amber-400 stroke-brand-green filter drop-shadow-[0_0_8px_rgba(230,194,101,0.8)]' : 'fill-brand-gold stroke-brand-green/80'
        }`}
      >
        <path 
          d="M12 2C6.5 2 2 6.5 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" 
          strokeWidth="1.5" 
        />
      </svg>
    </div>
  );
}
