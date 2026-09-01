'use client';

import ProductCard from "@/components/ui/ProductCard";
import { useState, use, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

import { PRODUCTS } from "@/data/mockProducts";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // 0.4s delay for the premium feel
    return () => clearTimeout(timer);
  }, [resolvedParams.category]);

  const categoryTitle = resolvedParams.category === "all" ? "All Products" : resolvedParams.category.replace("-", " ");

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (resolvedParams.category !== "all" && resolvedParams.category !== "sale") {
      result = result.filter(p => p.category === resolvedParams.category);
    }
    if (resolvedParams.category === "sale") {
      result = result.filter(p => p.originalPrice);
    }

    // Filter by Size
    if (selectedSize) {
      result = result.filter(p => p.sizes.includes(selectedSize));
    }

    // Filter by Price
    if (minPrice) {
      const min = parseFloat(minPrice);
      if (!isNaN(min)) result = result.filter(p => p.price >= min);
    }
    if (maxPrice) {
      const max = parseFloat(maxPrice);
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
      case "top-rated":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
      default:
        // Mock newest by 'isNew' flag first
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
    }

    return result;
  }, [resolvedParams.category, selectedSize, sortBy, searchQuery, minPrice, maxPrice]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 w-full flex flex-col md:flex-row gap-10">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0 space-y-8">

        <div>
          <h2 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-4">Price Range (₺)</h2>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              placeholder="Min" 
              value={minPrice} 
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-3 py-2 border border-black/10 rounded-md text-sm focus:outline-none focus:border-brand-maroon bg-transparent transition-colors"
            />
            <span className="text-black/50">-</span>
            <input 
              type="number" 
              placeholder="Max" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3 py-2 border border-black/10 rounded-md text-sm focus:outline-none focus:border-brand-maroon bg-transparent transition-colors"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-4">Size</h2>
          <div className="flex flex-wrap gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button 
                key={size} 
                onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-medium transition-colors cursor-pointer ${selectedSize === size ? 'border-brand-maroon text-brand-maroon bg-brand-gold/10' : 'border-black/10 hover:border-brand-maroon hover:text-brand-maroon'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-4">Sort By</h2>
          <div className="space-y-3 text-sm text-brand-text-light">
            {[
              { id: "newest", label: "Newest First" },
              { id: "price-low", label: "Price: Low to High" },
              { id: "price-high", label: "Price: High to Low" },
              { id: "top-rated", label: "Top Rated" }
            ].map(sort => (
              <label key={sort.id} className={`flex items-center gap-3 px-3 py-2 cursor-pointer rounded-full transition-colors ${sortBy === sort.id ? 'font-bold text-brand-maroon bg-brand-gold/10 border border-brand-gold' : 'hover:text-brand-maroon border border-transparent'}`}>
                <input 
                  type="radio" 
                  name="sort" 
                  checked={sortBy === sort.id}
                  onChange={() => setSortBy(sort.id)}
                  className="accent-brand-maroon" 
                />
                {sort.label}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Our Collection</span>
            <h1 className="text-4xl font-serif text-brand-maroon capitalize mt-1">{categoryTitle}</h1>
            <p className="text-sm text-brand-text-light mt-2">{filteredProducts.length} Products Found</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search in this category..." 
                className="pl-10 pr-4 py-2 bg-white border border-black/10 rounded-full text-sm w-full md:w-64 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
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
              onClick={() => { setSelectedSize(null); setSearchQuery(""); }} 
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
