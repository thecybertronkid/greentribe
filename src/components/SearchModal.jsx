import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onSearchSubmit }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearchSubmit(query);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full mx-auto overflow-hidden shadow-2xl z-10 border border-brand-border-light animate-fadeIn">
        <form onSubmit={handleFormSubmit} className="p-4 border-b border-brand-border-light flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-green shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search bamboo trays, storage boxes, wall decor..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-brand-charcoal placeholder-brand-gray focus:outline-none font-medium"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="p-1 text-gray-400 hover:text-brand-charcoal">
              <X className="w-4 h-4" />
            </button>
          )}
          <button type="button" onClick={onClose} className="text-xs font-semibold text-brand-gray hover:text-brand-green px-2">
            Cancel
          </button>
        </form>

        {/* Results / Suggestions */}
        <div className="p-4 max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="space-y-3 py-2">
              <span className="text-[10px] uppercase font-bold text-brand-gray tracking-wider">Popular Searches</span>
              <div className="flex flex-wrap gap-2">
                {['Round Cane Tray', 'Green Storage Box', 'Bamboo Plate Stand', 'Wall Decor', 'Assam Cane'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      onSearchSubmit(term);
                      onClose();
                    }}
                    className="text-xs bg-brand-beige hover:bg-emerald-100 text-brand-charcoal hover:text-brand-green px-3 py-1.5 rounded-lg border border-brand-border-light transition-colors font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-brand-gray">
              No products found matching "<strong className="text-brand-charcoal">{query}</strong>".
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-brand-gray">
                <span>Matching Products ({results.length})</span>
                <button 
                  onClick={() => {
                    onSearchSubmit(query);
                    onClose();
                  }}
                  className="text-brand-green hover:underline flex items-center gap-0.5"
                >
                  View all in Shop →
                </button>
              </div>

              <div className="space-y-2">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-brand-beige transition-colors cursor-pointer border border-transparent hover:border-brand-border-light"
                  >
                    <img src={product.image} alt={product.title} className="w-12 h-12 rounded-lg object-cover bg-brand-beige-dark/20" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-brand-charcoal truncate">{product.title}</h4>
                      <span className="text-[10px] text-brand-gray">{product.material} • {product.category}</span>
                    </div>
                    <span className="text-xs font-bold text-brand-green">₹{product.price.toLocaleString('en-IN')}.00</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
