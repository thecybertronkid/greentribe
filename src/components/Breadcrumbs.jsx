import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items, onNavigate }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-brand-gray py-4">
      <button 
        onClick={() => onNavigate('home')} 
        className="flex items-center gap-1 hover:text-brand-green transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          {item.page ? (
            <button 
              onClick={() => onNavigate(item.page)}
              className="hover:text-brand-green transition-colors font-medium"
            >
              {item.label}
            </button>
          ) : (
            <span className="font-semibold text-brand-charcoal">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
