import ProductCard from "@/components/ui/ProductCard";

// Mock Data for the storefront
const PRODUCTS = [
  {
    id: "p1",
    name: "Cappadocia Pale Dress",
    price: 1850,
    originalPrice: 2050,
    rating: 4.5,
    reviewsCount: 124,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "p2",
    name: "Bosphorus Coast Dress",
    price: 3300,
    rating: 5,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Asilah Evening Gown",
    price: 2150,
    originalPrice: 2500,
    rating: 4,
    reviewsCount: 56,
    image: "https://images.unsplash.com/photo-1608228068940-27f917229b00?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "p4",
    name: "Istanbul Wrap Dress",
    price: 750,
    originalPrice: 950,
    rating: 4.5,
    reviewsCount: 231,
    image: "https://images.unsplash.com/photo-1550614000-4b95d466f916?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "Florence Lace Dress",
    price: 2100,
    rating: 4.8,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "Milano Velvet Abaya",
    price: 4500,
    rating: 5.0,
    reviewsCount: 305,
    image: "https://images.unsplash.com/photo-1583391733958-d15319a31868?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p7",
    name: "Dubai Sparkle Gown",
    price: 5200,
    originalPrice: 6000,
    rating: 4.9,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "p8",
    name: "Cairo Cotton Set",
    price: 1500,
    rating: 4.2,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
  }
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryTitle = params.category === "all" ? "All Products" : params.category.replace("-", " ");

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 w-full flex flex-col md:flex-row gap-10">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
        <div>
          <h2 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-4">Category</h2>
          <div className="space-y-3 text-sm text-brand-text-light">
            <label className="flex items-center gap-3 font-bold text-brand-maroon bg-brand-gold/10 px-3 py-2 rounded-full border border-brand-gold">
              <input type="radio" name="category" defaultChecked className="accent-brand-maroon" />
              All
            </label>
            <label className="flex items-center gap-3 px-3 py-1 hover:text-brand-maroon cursor-pointer">
              <input type="radio" name="category" className="accent-brand-maroon" />
              Abayas
            </label>
            <label className="flex items-center gap-3 px-3 py-1 hover:text-brand-maroon cursor-pointer">
              <input type="radio" name="category" className="accent-brand-maroon" />
              Dresses
            </label>
            <label className="flex items-center gap-3 px-3 py-1 hover:text-brand-maroon cursor-pointer">
              <input type="radio" name="category" className="accent-brand-maroon" />
              Coord Set
            </label>
            <label className="flex items-center gap-3 px-3 py-1 hover:text-brand-maroon cursor-pointer">
              <input type="radio" name="category" className="accent-brand-maroon" />
              Shalwar Kameez
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-4">Size</h2>
          <div className="flex flex-wrap gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button key={size} className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-xs font-medium hover:border-brand-maroon hover:text-brand-maroon transition-colors">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-4">Sort By</h2>
          <div className="space-y-3 text-sm text-brand-text-light">
            <label className="flex items-center gap-3 font-bold text-brand-maroon bg-brand-gold/10 px-3 py-2 rounded-full border border-brand-gold">
              <input type="radio" name="sort" defaultChecked className="accent-brand-maroon" />
              Newest First
            </label>
            <label className="flex items-center gap-3 px-3 py-1 hover:text-brand-maroon cursor-pointer">
              <input type="radio" name="sort" className="accent-brand-maroon" />
              Price: Low to High
            </label>
            <label className="flex items-center gap-3 px-3 py-1 hover:text-brand-maroon cursor-pointer">
              <input type="radio" name="sort" className="accent-brand-maroon" />
              Price: High to Low
            </label>
            <label className="flex items-center gap-3 px-3 py-1 hover:text-brand-maroon cursor-pointer">
              <input type="radio" name="sort" className="accent-brand-maroon" />
              Top Rated
            </label>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Our Collection</span>
            <h1 className="text-4xl font-serif text-brand-maroon capitalize mt-1">{categoryTitle}</h1>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search by name or SKU..." 
                className="pl-10 pr-4 py-2 bg-white border border-black/10 rounded-full text-sm w-64 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
