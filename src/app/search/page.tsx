import ProductCard from "@/components/ui/ProductCard";

// Mock Data for the storefront (same as homepage/collections for demo purposes)
const ALL_PRODUCTS = [
  { id: "p1", name: "Bosphorus Embroidered Abaya", price: 1290, originalPrice: 1690, rating: 5, reviewsCount: 316, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop" },
  { id: "p2", name: "Sultanahmet Evening Abaya", price: 3400, rating: 5, reviewsCount: 157, image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=800&auto=format&fit=crop", isNew: true },
  { id: "p3", name: "Hagia Sofia Velvet Abaya", price: 2780, originalPrice: 3500, rating: 4, reviewsCount: 156, image: "https://images.unsplash.com/photo-1608228068940-27f917229b00?q=80&w=800&auto=format&fit=crop" },
  { id: "p4", name: "Iznik Floral Open Abaya", price: 1150, rating: 5, reviewsCount: 203, image: "https://images.unsplash.com/photo-1550614000-4b95d466f916?q=80&w=800&auto=format&fit=crop", isNew: true },
  { id: "p5", name: "Topkapi Lace Abaya", price: 2100, originalPrice: 2600, rating: 5, reviewsCount: 189, image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=800&auto=format&fit=crop" },
  { id: "p6", name: "Anatolian Classic Abaya", price: 980, rating: 5, reviewsCount: 445, image: "https://images.unsplash.com/photo-1583391733958-d15319a31868?q=80&w=800&auto=format&fit=crop" },
  { id: "p7", name: "Tulip Garden Maxi Dress", price: 890, originalPrice: 1250, rating: 4, reviewsCount: 312, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop" },
  { id: "p8", name: "Ottoman Court Dress", price: 2200, rating: 4.8, reviewsCount: 118, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop", isNew: true }
];

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || "";
  
  // Very basic search filter
  const results = ALL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 w-full min-h-[60vh]">
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Search Results</h1>
        {query ? (
          <p className="text-sm text-brand-text-light">
            Showing {results.length} results for <span className="font-bold text-brand-maroon">"{query}"</span>
          </p>
        ) : (
          <p className="text-sm text-brand-text-light">Enter a search term to find products.</p>
        )}
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-black/10 rounded-2xl bg-white">
          <p className="text-brand-text mb-4">No products found matching your search.</p>
          <a href="/collections/all" className="inline-block bg-brand-maroon text-brand-gold px-6 py-3 rounded text-xs font-bold tracking-widest uppercase hover:bg-brand-maroon/90 transition-colors">
            Browse All Products
          </a>
        </div>
      )}
    </div>
  );
}
