import ProductCard from "@/components/ui/ProductCard";

// Extended Dummy data for shop
const DUMMY_PRODUCTS = [
  { id: "1", name: "Bosphorus Embroidered Abaya", price: 1290, rating: 4.5, reviewsCount: 12, image: "/images/abaya_embroidered.jpg", isNew: true },
  { id: "2", name: "Hagia Sofia Velvet Abaya", price: 1590, originalPrice: 1990, rating: 5, reviewsCount: 8, image: "/images/abaya_velvet.jpg" },
  { id: "3", name: "Ankara Floral Coord Set", price: 2100, rating: 4, reviewsCount: 24, image: "/images/coord_set_floral.jpg" },
  { id: "4", name: "Rose Pink Embroidered Shalwar Kameez", price: 2850, rating: 4.8, reviewsCount: 15, image: "/images/shalwar_kameez_pink.jpg", isNew: true },
  { id: "5", name: "Istanbul Evening Dress", price: 3200, rating: 4.2, reviewsCount: 6, image: "/images/abaya_velvet.jpg" },
  { id: "6", name: "Classic Black Basic Abaya", price: 950, rating: 4.9, reviewsCount: 52, image: "/images/abaya_embroidered.jpg" },
  { id: "7", name: "Cotton Everyday Coord Set", price: 1850, rating: 4.6, reviewsCount: 18, image: "/images/coord_set_floral.jpg" },
  { id: "8", name: "Silk Chiffon Party Dress", price: 4500, originalPrice: 5000, rating: 5, reviewsCount: 3, image: "/images/shalwar_kameez_pink.jpg" },
];

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-72 flex-shrink-0">
        <h2 className="text-2xl font-semibold text-[var(--color-primary)] logo-tracking mb-6">Filters</h2>
        
        {/* Categories */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Categories</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[var(--color-primary)]" /> <span>Abayas</span></label></li>
            <li><label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[var(--color-primary)]" /> <span>Dresses</span></label></li>
            <li><label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[var(--color-primary)]" /> <span>Shalwar Kameez</span></label></li>
            <li><label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[var(--color-primary)]" /> <span>Coord Sets</span></label></li>
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Price Range</h3>
          <div className="flex items-center space-x-2 text-sm">
            <input type="number" placeholder="Min" className="w-full border rounded px-2 py-1" />
            <span>-</span>
            <input type="number" placeholder="Max" className="w-full border rounded px-2 py-1" />
          </div>
        </div>

        {/* Size */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Size</h3>
          <div className="flex flex-wrap gap-2">
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button key={size} className="border rounded px-3 py-1 text-xs badge-uppercase hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-[var(--color-primary)] text-[var(--color-secondary)] py-3 rounded font-bold badge-uppercase hover:bg-opacity-90 transition-opacity">
          Apply Filters
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-[var(--color-primary)] logo-tracking">All Products</h1>
          <select className="border rounded px-3 py-1.5 text-sm bg-white">
            <option>Sort by: Newest</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
            <option>Sort by: Best Rated</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_PRODUCTS.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* Pagination Placeholder */}
        <div className="mt-12 flex justify-center space-x-3">
          <button className="px-4 py-2 border rounded bg-[var(--color-primary)] text-white badge-uppercase">1</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">3</button>
        </div>
      </div>
    </div>
  );
}
