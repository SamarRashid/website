'use client';

import { useState } from 'react';

export type Filters = {
  categories: string[];
  styles: string[];
  sizes: string[];
  colors: string[];
  fabrics: string[];
  minPrice: string;
  maxPrice: string;
};

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isNew?: boolean;
  sizes: string[];
  style?: string;
  color?: string;
  fabric?: string;
}

interface FilterSidebarProps {
  products: Product[];
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const Accordion = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-black/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-text hover:text-brand-maroon transition-colors"
      >
        <span>{title}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" height="16" 
          viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default function FilterSidebar({ products, filters, onFilterChange, isMobileOpen, onMobileClose }: FilterSidebarProps) {
  const getCount = (key: keyof Product, value: string) => {
    return products.filter(p => {
      if (Array.isArray(p[key])) {
        return (p[key] as string[]).includes(value);
      }
      return p[key] === value;
    }).length;
  };

  const handleCheckboxChange = (filterKey: keyof Filters, value: string) => {
    const currentValues = filters[filterKey] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    onFilterChange({ ...filters, [filterKey]: newValues });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = e.target.value;
    if (type === 'min') {
      onFilterChange({ ...filters, minPrice: value });
    } else {
      onFilterChange({ ...filters, maxPrice: value });
    }
  };

  // Distinct values for dynamic lists
  const styles = Array.from(new Set(products.map(p => p.style).filter(Boolean))) as string[];
  const colors = Array.from(new Set(products.map(p => p.color).filter(Boolean))) as string[];
  const fabrics = Array.from(new Set(products.map(p => p.fabric).filter(Boolean))) as string[];
  const categories = Array.from(new Set(products.map(p => p.category).filter(Boolean))) as string[];

  const SidebarContent = (
    <div className="w-full h-full flex flex-col bg-brand-bg md:bg-transparent">
      <div className="md:hidden flex items-center justify-between p-4 border-b border-black/10">
        <h2 className="font-serif text-xl text-brand-maroon">Filters</h2>
        <button onClick={onMobileClose} className="p-2 text-brand-text hover:text-brand-maroon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 md:p-0 custom-scrollbar">
        {/* Category Accordion */}
        <Accordion title="Category" defaultOpen={true}>
          <div className="space-y-2">
            {categories.map(cat => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={filters.categories.includes(cat)}
                  onChange={() => handleCheckboxChange('categories', cat)}
                  className="w-4 h-4 rounded border-black/20 text-brand-maroon focus:ring-brand-maroon" 
                />
                <span className="text-sm text-brand-text-light group-hover:text-brand-maroon transition-colors capitalize">
                  {cat.replace('-', ' ')} <span className="text-[10px] ml-1">({getCount('category', cat)})</span>
                </span>
              </label>
            ))}
          </div>
        </Accordion>

        {/* Styles Accordion */}
        {styles.length > 0 && (
          <Accordion title="Styles">
            <div className="space-y-2">
              {styles.map(style => (
                <label key={style} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={filters.styles.includes(style)}
                    onChange={() => handleCheckboxChange('styles', style)}
                    className="w-4 h-4 rounded border-black/20 text-brand-maroon focus:ring-brand-maroon" 
                  />
                  <span className="text-sm text-brand-text-light group-hover:text-brand-maroon transition-colors">
                    {style} <span className="text-[10px] ml-1">({getCount('style', style)})</span>
                  </span>
                </label>
              ))}
            </div>
          </Accordion>
        )}

        {/* Price Range Accordion */}
        <Accordion title="Price Range (PKR)" defaultOpen={true}>
          <div className="px-1 pt-2 pb-4">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-black/40">Rs</span>
                <input 
                  type="number" 
                  value={filters.minPrice}
                  onChange={(e) => handlePriceChange(e, 'min')}
                  placeholder="1000"
                  className="w-full pl-8 pr-3 py-2 bg-white border border-black/10 rounded text-sm focus:outline-none focus:border-brand-maroon transition-colors"
                />
              </div>
              <span className="text-black/30">-</span>
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-black/40">Rs</span>
                <input 
                  type="number" 
                  value={filters.maxPrice}
                  onChange={(e) => handlePriceChange(e, 'max')}
                  placeholder="5000"
                  className="w-full pl-8 pr-3 py-2 bg-white border border-black/10 rounded text-sm focus:outline-none focus:border-brand-maroon transition-colors"
                />
              </div>
            </div>
            
            <div className="relative h-1 bg-black/10 rounded-full w-full mt-6">
              <input 
                type="range" 
                min="1000" max="5000" step="100"
                value={filters.minPrice || 1000}
                onChange={(e) => handlePriceChange(e, 'min')}
                className="absolute w-full h-full opacity-0 cursor-pointer pointer-events-auto"
                style={{ zIndex: 3 }}
              />
              <input 
                type="range" 
                min="1000" max="5000" step="100"
                value={filters.maxPrice || 5000}
                onChange={(e) => handlePriceChange(e, 'max')}
                className="absolute w-full h-full opacity-0 cursor-pointer pointer-events-auto"
                style={{ zIndex: 4 }}
              />
              {/* Visual Track */}
              <div 
                className="absolute h-full bg-brand-maroon rounded-full pointer-events-none" 
                style={{ 
                  left: `${((Math.max(1000, Number(filters.minPrice || 1000)) - 1000) / 4000) * 100}%`,
                  right: `${100 - ((Math.min(5000, Number(filters.maxPrice || 5000)) - 1000) / 4000) * 100}%`
                }}
              ></div>
              {/* Thumbs */}
              <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-maroon rounded-full pointer-events-none shadow-md" style={{ left: `calc(${((Math.max(1000, Number(filters.minPrice || 1000)) - 1000) / 4000) * 100}% - 6px)` }}></div>
              <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-maroon rounded-full pointer-events-none shadow-md" style={{ left: `calc(${((Math.min(5000, Number(filters.maxPrice || 5000)) - 1000) / 4000) * 100}% - 6px)` }}></div>
            </div>
            <div className="flex justify-between text-[10px] text-brand-text-light mt-2 font-medium">
              <span>Min: 1000</span>
              <span>Max: 5000</span>
            </div>
          </div>
        </Accordion>

        {/* Size Accordion */}
        <Accordion title="Size">
          <div className="flex flex-wrap gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button 
                key={size} 
                onClick={() => handleCheckboxChange('sizes', size)}
                className={`w-10 h-10 rounded-full border flex flex-col items-center justify-center text-xs font-medium transition-colors cursor-pointer ${filters.sizes.includes(size) ? 'border-brand-maroon text-brand-maroon bg-brand-gold/10' : 'border-black/10 hover:border-brand-maroon hover:text-brand-maroon text-brand-text-light'}`}
              >
                <span>{size}</span>
              </button>
            ))}
          </div>
        </Accordion>

        {/* Color Accordion */}
        {colors.length > 0 && (
          <Accordion title="Color">
            <div className="space-y-2">
              {colors.map(color => (
                <label key={color} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={filters.colors.includes(color)}
                    onChange={() => handleCheckboxChange('colors', color)}
                    className="w-4 h-4 rounded border-black/20 text-brand-maroon focus:ring-brand-maroon" 
                  />
                  <span className="text-sm text-brand-text-light group-hover:text-brand-maroon transition-colors">
                    {color} <span className="text-[10px] ml-1">({getCount('color', color)})</span>
                  </span>
                </label>
              ))}
            </div>
          </Accordion>
        )}

        {/* Fabric Accordion */}
        {fabrics.length > 0 && (
          <Accordion title="Fabric">
            <div className="space-y-2">
              {fabrics.map(fabric => (
                <label key={fabric} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={filters.fabrics.includes(fabric)}
                    onChange={() => handleCheckboxChange('fabrics', fabric)}
                    className="w-4 h-4 rounded border-black/20 text-brand-maroon focus:ring-brand-maroon" 
                  />
                  <span className="text-sm text-brand-text-light group-hover:text-brand-maroon transition-colors">
                    {fabric} <span className="text-[10px] ml-1">({getCount('fabric', fabric)})</span>
                  </span>
                </label>
              ))}
            </div>
          </Accordion>
        )}
      </div>
      
      {/* Mobile Sticky Footer */}
      <div className="md:hidden p-4 border-t border-black/10 bg-white shrink-0">
        <button 
          onClick={onMobileClose}
          className="w-full bg-brand-maroon text-brand-gold py-3 rounded text-xs font-bold tracking-widest uppercase"
        >
          View Results
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Wrapper */}
      <aside className="hidden md:block w-64 flex-shrink-0 space-y-2 sticky top-24 self-start">
        {SidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100] md:hidden transition-opacity"
          onClick={onMobileClose}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 left-0 w-[85%] max-w-sm bg-brand-bg z-[110] transform transition-transform duration-300 ease-in-out md:hidden ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {SidebarContent}
      </div>
    </>
  );
}
