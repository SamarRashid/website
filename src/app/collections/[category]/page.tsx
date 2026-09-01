'use client';

import ProductCard from "@/components/ui/ProductCard";
import { useState, use, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

import { PRODUCTS } from "@/data/mockProducts";
import FilterSidebar, { Filters } from "@/components/shop/FilterSidebar";
import SortDropdown from "@/components/ui/SortDropdown";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const [sortBy, setSortBy] = useState<string>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [filters, setFilters] = useState<Filters>({
    categories: [],
    styles: [],
    sizes: [],
    colors: [],
    fabrics: [],
    minPrice: "",
    maxPrice: ""
  });

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // 0.4s delay for the premium feel
    return () => clearTimeout(timer);
  }, [resolvedParams.category, filters]);

  const categoryTitle = resolvedParams.category === "all" ? "All Products" : resolvedParams.category.replace("-", " ");

  // Initial products before dynamic filters, used to pass to FilterSidebar for counts
  const baseProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (resolvedParams.category !== "all" && resolvedParams.category !== "sale") {
      result = result.filter(p => p.category === resolvedParams.category);
    }
    if (resolvedParams.category === "sale") {
      result = result.filter(p => p.originalPrice);
    }
    return result;
  }, [resolvedParams.category]);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...baseProducts];

    // Filter by Dynamic Categories
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Filter by Styles
    if (filters.styles.length > 0) {
      result = result.filter(p => p.style && filters.styles.includes(p.style));
    }

    // Filter by Colors
    if (filters.colors.length > 0) {
      result = result.filter(p => p.color && filters.colors.includes(p.color));
    }

    // Filter by Fabrics
    if (filters.fabrics.length > 0) {
      result = result.filter(p => p.fabric && filters.fabrics.includes(p.fabric));
    }

    // Filter by Size
    if (filters.sizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => filters.sizes.includes(s)));
    }

    // Filter by Price
    if (filters.minPrice) {
      const min = parseFloat(filters.minPrice);
      if (!isNaN(min)) result = result.filter(p => p.price >= min);
    }
    if (filters.maxPrice) {
      const max = parseFloat(filters.maxPrice);
      if (!isNaN(max)) result = result.filter(p => p.price <= max);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "new-arrival":
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case "top-sellers":
        result.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case "most-popular":
        result.sort((a, b) => (b.rating * b.reviewsCount) - (a.rating * a.reviewsCount));
        break;
      case "recommended":
      default:
        // Default original order or some custom logic
        break;
    }

    return result;
  }, [baseProducts, filters, sortBy, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 w-full flex flex-col md:flex-row gap-10 relative">
      <FilterSidebar 
        products={baseProducts} 
        filters={filters} 
        onFilterChange={setFilters} 
        isMobileOpen={isMobileFilterOpen}
        onMobileClose={() => setIsMobileFilterOpen(false)}
      />

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Our Collection</span>
            <h1 className="text-4xl font-serif text-brand-maroon capitalize mt-1">{categoryTitle}</h1>
            <p className="text-sm text-brand-text-light mt-2">{filteredProducts.length} items</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden w-full sm:w-auto px-6 py-2 border border-brand-maroon text-brand-maroon rounded-full text-sm font-bold tracking-widest uppercase hover:bg-brand-maroon hover:text-brand-gold transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filter by
            </button>
            <div className="relative w-full sm:w-auto">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-white border border-black/10 rounded-full text-sm w-full sm:w-48 xl:w-64 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 relative">
              <span className="text-xs font-bold text-brand-text uppercase tracking-wider hidden xl:block">Sort By:</span>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="w-full py-32 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-brand-gold/30 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <span className="text-5xl font-serif text-brand-gold leading-none relative top-1">H</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-brand-maroon/60 mt-6 font-bold animate-pulse">Loading Collection</span>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-black/10 rounded-2xl bg-white w-full">
            <p className="text-brand-text mb-4">No products found matching your filters.</p>
            <button 
              onClick={() => { 
                setFilters({ categories: [], styles: [], sizes: [], colors: [], fabrics: [], minPrice: "", maxPrice: "" }); 
                setSearchQuery(""); 
              }} 
              className="inline-block bg-brand-maroon text-brand-gold px-6 py-3 rounded text-xs font-bold tracking-widest uppercase hover:bg-brand-maroon/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
