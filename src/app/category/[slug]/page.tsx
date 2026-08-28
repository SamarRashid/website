import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

// Extended Dummy data for shop
const DUMMY_PRODUCTS = [
  { id: "1", name: "Bosphorus Embroidered Abaya", price: 1290, rating: 4.5, reviewsCount: 12, image: "/images/abaya_embroidered.jpg", isNew: true },
  { id: "2", name: "Hagia Sofia Velvet Abaya", price: 1590, originalPrice: 1990, rating: 5, reviewsCount: 8, image: "/images/abaya_velvet.jpg" },
  { id: "3", name: "Classic Black Basic Abaya", price: 950, rating: 4.9, reviewsCount: 52, image: "/images/abaya_embroidered.jpg" },
];

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <h2 className="text-xl font-bold text-[var(--color-primary)] uppercase tracking-widest mb-6">Filters</h2>
        
        {/* Categories */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[var(--color-primary)]" defaultChecked={slug === 'abayas'} /> <span>Abayas</span></label></li>
            <li><label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[var(--color-primary)]" defaultChecked={slug === 'dresses'} /> <span>Dresses</span></label></li>
            <li><label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[var(--color-primary)]" defaultChecked={slug === 'shalwar-kameez'} /> <span>Shalwar Kameez</span></label></li>
            <li><label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[var(--color-primary)]" defaultChecked={slug === 'coord-sets'} /> <span>Coord Sets</span></label></li>
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Price Range</h3>
          <div className="flex items-center space-x-2 text-sm">
            <input type="number" placeholder="Min" className="w-full border rounded px-2 py-1" />
            <span>-</span>
            <input type="number" placeholder="Max" className="w-full border rounded px-2 py-1" />
          </div>
        </div>
        
        <button className="w-full bg-[var(--color-primary)] text-[var(--color-secondary)] py-2 rounded font-bold uppercase tracking-wide hover:bg-opacity-90 transition-opacity">
          Apply Filters
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-wider">{categoryName}</h1>
          <select className="border rounded px-3 py-1.5 text-sm bg-white">
            <option>Sort by: Newest</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
            <option>Sort by: Best Rated</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_PRODUCTS.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
