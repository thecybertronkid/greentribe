import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, Grid, LayoutGrid, RotateCcw, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { PRODUCTS, CATEGORIES, MATERIALS } from '../data/products';

export default function ShopPage({ onNavigate, onSelectProduct, onQuickView, searchQuery, onShowToast }) {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState("bestselling");
  const [gridCols, setGridCols] = useState(4);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev => 
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const resetFilters = () => {
    setSelectedCategory("All Products");
    setSelectedMaterials([]);
    setMaxPrice(5000);
    setAppliedMaxPrice(5000);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase()) && !product.category.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (selectedCategory !== "All Products" && product.category !== selectedCategory) {
        return false;
      }
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) {
        return false;
      }
      if (product.price > appliedMaxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [selectedCategory, selectedMaterials, appliedMaxPrice, sortBy, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[{ label: 'Shop Catalog' }]} 
        onNavigate={onNavigate} 
      />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-brand-gold/30">
        <div>
          <h1 className="brand-font-serif text-3xl font-bold text-brand-charcoal dark:text-amber-100 flex items-center gap-2">
            Shop Catalog <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </h1>
          {searchQuery && (
            <p className="text-xs text-brand-gray dark:text-emerald-200/80 mt-1">
              Search results for "<strong className="text-brand-green dark:text-amber-300">{searchQuery}</strong>"
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 text-xs">
          <span className="text-brand-gray dark:text-emerald-200/80 font-semibold">
            Showing 1 - {filteredProducts.length} of {PRODUCTS.length} results
          </span>

          <div className="flex items-center gap-2">
            <span className="text-brand-gray dark:text-emerald-200/80 font-semibold hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-emerald-950 border border-brand-gold/30 rounded-xl px-3 py-2 font-bold text-brand-charcoal dark:text-amber-100 focus:outline-none focus:ring-1 focus:ring-brand-gold cursor-pointer shadow-xs"
            >
              <option value="bestselling">Best selling</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="hidden lg:flex items-center bg-white dark:bg-brand-dark-card border border-brand-gold/30 rounded-xl p-1 space-x-1 shadow-xs">
            <button
              onClick={() => setGridCols(3)}
              className={`p-1.5 rounded-lg transition-colors ${gridCols === 3 ? 'emerald-gradient-bg text-amber-200' : 'text-brand-gray dark:text-emerald-200/80 hover:text-brand-charcoal dark:hover:text-amber-100'}`}
              title="3 Columns Grid"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setGridCols(4)}
              className={`p-1.5 rounded-lg transition-colors ${gridCols === 4 ? 'emerald-gradient-bg text-amber-200' : 'text-brand-gray dark:text-emerald-200/80 hover:text-brand-charcoal dark:hover:text-amber-100'}`}
              title="4 Columns Grid"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden flex items-center gap-1.5 bg-white dark:bg-brand-dark-card border border-brand-gold/30 px-3 py-2 rounded-xl text-brand-charcoal dark:text-amber-100 font-bold shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4 text-brand-green dark:text-amber-300" /> Filters
          </button>
        </div>
      </div>

      {/* Main Grid & Sidebar Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
        
        {/* Left Sidebar Filters */}
        <aside className={`md:col-span-3 space-y-6 ${isMobileFilterOpen ? 'block animate-fadeIn' : 'hidden md:block'}`}>
          
          {/* CATEGORIES Filter */}
          <div className="space-y-3 bg-white dark:bg-brand-dark-card p-6 rounded-2xl border border-brand-gold/30 shadow-xs transition-colors duration-400">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal dark:text-amber-300 border-b border-brand-border-light dark:border-emerald-800/60 pb-2">
              Categories
            </h3>
            <ul className="space-y-1 text-xs">
              {CATEGORIES.map((cat) => {
                const count = cat === "All Products" 
                  ? PRODUCTS.length 
                  : PRODUCTS.filter(p => p.category === cat).length;
                
                const isSelected = selectedCategory === cat;

                return (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left py-2 px-3 rounded-xl font-bold transition-all flex justify-between items-center ${
                        isSelected 
                          ? 'emerald-gradient-bg text-amber-200 shadow-sm' 
                          : 'text-brand-gray dark:text-emerald-200/80 hover:text-brand-charcoal dark:hover:text-amber-100 hover:bg-brand-beige dark:hover:bg-emerald-950/60'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] font-bold ${isSelected ? 'text-amber-300' : 'text-gray-400 dark:text-emerald-400/60'}`}>({count})</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* FILTER BY MATERIAL */}
          <div className="space-y-3 bg-white dark:bg-brand-dark-card p-6 rounded-2xl border border-brand-gold/30 shadow-xs transition-colors duration-400">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal dark:text-amber-300 border-b border-brand-border-light dark:border-emerald-800/60 pb-2">
              Filter By Material
            </h3>
            <div className="space-y-2.5 text-xs">
              {MATERIALS.map((mat) => (
                <label key={mat} className="flex items-center gap-3 cursor-pointer text-brand-charcoal dark:text-amber-100 hover:text-brand-green dark:hover:text-amber-300 font-bold">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => toggleMaterial(mat)}
                    className="w-4 h-4 rounded text-brand-green focus:ring-brand-gold accent-brand-green cursor-pointer"
                  />
                  <span>{mat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* PRICE SLIDER */}
          <div className="space-y-4 bg-white dark:bg-brand-dark-card p-6 rounded-2xl border border-brand-gold/30 shadow-xs transition-colors duration-400">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal dark:text-amber-300 border-b border-brand-border-light dark:border-emerald-800/60 pb-2">
              Price Range
            </h3>
            
            <div className="space-y-3">
              <input 
                type="range" 
                min="500" 
                max="5000" 
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-brand-green cursor-pointer"
              />
              <div className="flex justify-between items-center text-xs text-brand-gray dark:text-emerald-200/80 font-bold">
                <span>₹0</span>
                <span className="text-brand-green dark:text-amber-300 font-extrabold">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => setAppliedMaxPrice(maxPrice)}
              className="w-full emerald-gradient-bg hover:opacity-95 text-amber-200 text-xs font-bold py-3 px-4 rounded-xl shadow-md transition-colors uppercase tracking-wider border border-brand-gold/30"
            >
              APPLY FILTER
            </button>
          </div>

          {/* RESET FILTERS */}
          <button
            onClick={resetFilters}
            className="w-full flex items-center justify-center gap-1.5 text-xs text-brand-gray dark:text-emerald-200/80 hover:text-brand-green dark:hover:text-amber-300 py-2 transition-colors font-bold"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset All Filters
          </button>

        </aside>

        {/* Right Product Grid */}
        <main className="md:col-span-9 space-y-6">
          {filteredProducts.length === 0 ? (
            <div className="bg-white dark:bg-brand-dark-card rounded-3xl p-12 text-center space-y-4 border border-brand-gold/30 shadow-sm">
              <h3 className="brand-font-serif text-2xl font-bold text-brand-charcoal dark:text-amber-100">No products match your filters</h3>
              <p className="text-xs text-brand-gray dark:text-emerald-200/80">Try adjusting your price range or clearing material selections.</p>
              <button
                onClick={resetFilters}
                className="emerald-gradient-bg text-amber-200 text-xs font-bold px-6 py-3 rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                  onQuickView={onQuickView}
                  onShowToast={onShowToast}
                />
              ))}
            </div>
          )}
        </main>

      </div>

    </div>
  );
}
