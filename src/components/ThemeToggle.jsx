import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-500 border relative group shadow-sm ${
        isDark 
          ? 'bg-emerald-950/80 border-amber-400/40 text-amber-300 hover:bg-emerald-900 hover:scale-110' 
          : 'bg-white/90 border-brand-gold/40 text-brand-charcoal hover:text-brand-green hover:bg-brand-beige hover:scale-110'
      }`}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-300 animate-spin-once transition-transform transform rotate-0 hover:rotate-90" />
        ) : (
          <Moon className="w-5 h-5 text-brand-green transition-transform transform rotate-0 hover:-rotate-45" />
        )}
      </div>
    </button>
  );
}
