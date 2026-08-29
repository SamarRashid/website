'use client';

import ProductCard from "@/components/ui/ProductCard";
import { useState, use, useMemo } from "react";
import { useRouter } from "next/navigation";

// Mock Data for the storefront
const PRODUCTS = [
  // Dresses
  { id: "p1", name: "Cappadocia Pale Dress", category: "dresses", price: 1850, originalPrice: 2050, rating: 4.5, reviewsCount: 124, image: "/images/Image (Dresses).png", isNew: true, sizes: ['S', 'M', 'L'] },
  { id: "p2", name: "Bosphorus Coast Dress", category: "dresses", price: 3300, rating: 5, reviewsCount: 89, image: "/images/coord_set_floral.jpg", sizes: ['XS', 'S', 'M'] },
  { id: "p3", name: "Asilah Evening Gown", category: "dresses", price: 2150, originalPrice: 2500, rating: 4, reviewsCount: 56, image: "/images/abaya_velvet.jpg", isNew: true, sizes: ['M', 'L', 'XL'] },
  { id: "p4", name: "Istanbul Wrap Dress", category: "dresses", price: 750, originalPrice: 950, rating: 4.5, reviewsCount: 231, image: "/images/Image (Coord Sets).png", sizes: ['S', 'L', 'XXL'] },
  
  // Abayas
  { id: "p6", name: "Milano Velvet Abaya", category: "abayas", price: 4500, rating: 5.0, reviewsCount: 305, image: "/images/abaya_velvet.jpg", sizes: ['M', 'L', 'XL'] },
  { id: "a1", name: "Bosphorus Embroidered Abaya", category: "abayas", price: 5500, rating: 4.9, reviewsCount: 120, image: "/images/abaya_embroidered.jpg", isNew: true, sizes: ['S', 'M', 'L'] },
  { id: "a2", name: "Sultanahmet Elegance", category: "abayas", price: 3800, originalPrice: 4200, rating: 4.7, reviewsCount: 85, image: "/images/Image (Abayas).png", sizes: ['M', 'L', 'XL', 'XXL'] },
  { id: "a3", name: "Ottoman Heritage Abaya", category: "abayas", price: 6200, rating: 5.0, reviewsCount: 210, image: "/images/hero_banner.jpg", isNew: true, sizes: ['XS', 'S', 'M', 'L'] },
  { id: "a4", name: "Iznik Classic Open Abaya", category: "abayas", price: 3200, rating: 4.5, reviewsCount: 45, image: "/images/abaya_embroidered.jpg", sizes: ['S', 'M', 'L'] },

  // Coord Sets
  { id: "p8", name: "Cairo Cotton Set", category: "coord-sets", price: 1500, rating: 4.2, reviewsCount: 88, image: "/images/Image (Coord Sets).png", sizes: ['XS', 'S', 'M'] },
  
  // Shalwar Kameez
  { id: "p9", name: "Lahore Signature Shalwar Kameez", category: "shalwar-kameez", price: 3200, originalPrice: 4000, rating: 5.0, reviewsCount: 156, image: "/images/shalwar_kameez_pink.jpg", isNew: true, sizes: ['S', 'M', 'L'] },
  { id: "p10", name: "Karachi Evening Shalwar Kameez", category: "shalwar-kameez", price: 2800, rating: 4.7, reviewsCount: 92, image: "/images/Image (Shalwar Kameez).png", sizes: ['M', 'L', 'XL'] }
];

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("newest");
  const [searchQuery, setSearchQuery] = useState("");

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
  }, [resolvedParams.category, selectedSize, sortBy, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 w-full flex flex-col md:flex-row gap-10">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
        <div>
          <h2 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-4">Category</h2>
          <div className="space-y-3 text-sm text-brand-text-light">
            {[
              { id: "all", label: "All" },
              { id: "abayas", label: "Abayas" },
              { id: "dresses", label: "Dresses" },
              { id: "coord-sets", label: "Coord Set" },
              { id: "shalwar-kameez", label: "Shalwar Kameez" }
            ].map(cat => (
              <label key={cat.id} className={`flex items-center gap-3 px-3 py-2 cursor-pointer rounded-full transition-colors ${resolvedParams.category === cat.id ? 'font-bold text-brand-maroon bg-brand-gold/10 border border-brand-gold' : 'hover:text-brand-maroon border border-transparent'}`}>
                <input 
                  type="radio" 
                  name="category" 
                  checked={resolvedParams.category === cat.id}
                  onChange={() => router.push(`/collections/${cat.id}`)}
                  className="accent-brand-maroon" 
                />
                {cat.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-4">Size</h2>
          <div className="flex flex-wrap gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button 
                key={size} 
                onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-medium transition-colors ${selectedSize === size ? 'border-brand-maroon text-brand-maroon bg-brand-gold/10' : 'border-black/10 hover:border-brand-maroon hover:text-brand-maroon'}`}
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

        {filteredProducts.length > 0 ? (
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
