import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

const TRENDING_PRODUCTS = [
  { id: "p1", name: "Bosphorus Embroidered Abaya", price: 1290, originalPrice: 1690, rating: 5, reviewsCount: 316, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop" },
  { id: "p2", name: "Sultanahmet Evening Abaya", price: 3400, rating: 5, reviewsCount: 157, image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=800&auto=format&fit=crop", isNew: true },
  { id: "p3", name: "Hagia Sofia Velvet Abaya", price: 2780, originalPrice: 3500, rating: 4, reviewsCount: 156, image: "https://images.unsplash.com/photo-1608228068940-27f917229b00?q=80&w=800&auto=format&fit=crop" },
  { id: "p4", name: "Iznik Floral Open Abaya", price: 1150, rating: 5, reviewsCount: 203, image: "https://images.unsplash.com/photo-1550614000-4b95d466f916?q=80&w=800&auto=format&fit=crop", isNew: true },
  { id: "p5", name: "Topkapi Lace Abaya", price: 2100, originalPrice: 2600, rating: 5, reviewsCount: 189, image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=800&auto=format&fit=crop" },
  { id: "p6", name: "Anatolian Classic Abaya", price: 980, rating: 5, reviewsCount: 445, image: "https://images.unsplash.com/photo-1583391733958-d15319a31868?q=80&w=800&auto=format&fit=crop" },
  { id: "p7", name: "Tulip Garden Maxi Dress", price: 890, originalPrice: 1250, rating: 4, reviewsCount: 312, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop" },
  { id: "p8", name: "Ottoman Court Dress", price: 2200, rating: 4.8, reviewsCount: 118, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop", isNew: true }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-brand-bg">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-black/20 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
          alt="Ottoman Elegance" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative z-10 text-white px-6 md:px-20 max-w-2xl">
          <div className="inline-block px-4 py-1.5 border border-brand-gold text-brand-gold text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
            Exclusive Collection
          </div>
          <h1 className="text-6xl md:text-7xl font-serif mb-2">Ottoman</h1>
          <h1 className="text-6xl md:text-7xl font-serif text-brand-gold mb-6 italic">Elegance</h1>
          <p className="text-sm md:text-base font-light tracking-wide mb-10 text-white/90">
            Hand-embroidered abayas & velvet gowns with the finest fabrics.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/collections/all" className="bg-brand-gold text-brand-maroon px-8 py-3 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
              View Collection →
            </Link>
            <Link href="/collections/abayas" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-white/20 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg> View Product Page
            </Link>
          </div>
        </div>
      </section>

      {/* Category Icons Bar */}
      <div className="w-full bg-brand-maroon py-6 relative z-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-16">
          {[
            { icon: "👗", name: "Abayas", count: "8 Styles", href: "/collections/abayas" },
            { icon: "🌸", name: "Dresses", count: "12 Styles", href: "/collections/dresses" },
            { icon: "🪄", name: "Shalwar Kameez", count: "6 Styles", href: "/collections/shalwar-kameez" },
            { icon: "🎁", name: "Coord Sets", count: "10 Styles", href: "/collections/coord-sets" },
            { icon: "🔥", name: "Sale", count: "Up to 40% Off", href: "/collections/sale" },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="flex flex-col items-center group bg-white/5 hover:bg-white/10 px-6 py-4 rounded-xl transition-colors min-w-[120px]">
              <span className="text-2xl mb-2 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{item.icon}</span>
              <span className="text-xs font-bold text-white tracking-wider">{item.name}</span>
              <span className="text-[9px] text-white/50 tracking-widest uppercase mt-1">{item.count}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="w-full bg-[#F5EFE6] py-6 border-b border-black/5">
        <div className="mx-auto max-w-5xl px-6 flex flex-wrap justify-between items-center gap-6 text-center divide-x divide-black/10">
          <div className="flex-1">
            <div className="text-lg font-serif text-brand-maroon">50K+</div>
            <div className="text-[9px] uppercase tracking-widest text-brand-text-light font-bold mt-1">Happy Customers</div>
          </div>
          <div className="flex-1">
            <div className="text-lg font-serif text-brand-maroon">1,200+</div>
            <div className="text-[9px] uppercase tracking-widest text-brand-text-light font-bold mt-1">Unique Styles</div>
          </div>
          <div className="flex-1">
            <div className="text-lg font-serif text-brand-maroon flex items-center justify-center gap-1">4.9 <svg className="w-3 h-3 text-brand-maroon" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg></div>
            <div className="text-[9px] uppercase tracking-widest text-brand-text-light font-bold mt-1">Average Rating</div>
          </div>
          <div className="flex-1">
            <div className="text-lg font-serif text-brand-maroon">FREE</div>
            <div className="text-[9px] uppercase tracking-widest text-brand-text-light font-bold mt-1">Easy Returns</div>
          </div>
        </div>
      </div>

      {/* Shop By Category Image Cards */}
      <section className="w-full py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-brand-maroon">Shop by Category</h2>
          <p className="text-xs uppercase tracking-widest text-brand-text-light mt-3">Choose what you are looking for</p>
        </div>
        
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/collections/abayas" className="relative group rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[450px]">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop" alt="Abayas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="text-[9px] text-white/80 uppercase tracking-widest font-bold mb-1">6 Styles Available</div>
              <h3 className="text-3xl font-serif text-white mb-2">Abayas</h3>
              <p className="text-xs text-white/80 mb-6">Elegant full-length abayas.</p>
              <button className="bg-brand-gold text-brand-maroon px-6 py-2.5 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors">
                Shop Abayas →
              </button>
            </div>
          </Link>
          <Link href="/collections/dresses" className="relative group rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[450px]">
            <img src="https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=800&auto=format&fit=crop" alt="Dresses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="text-[9px] text-white/80 uppercase tracking-widest font-bold mb-1">12 Styles Available</div>
              <h3 className="text-3xl font-serif text-white mb-2">Dresses</h3>
              <p className="text-xs text-white/80 mb-6">Modest maxi & midi dresses.</p>
              <button className="bg-brand-gold text-brand-maroon px-6 py-2.5 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors">
                Shop Dresses →
              </button>
            </div>
          </Link>
          <Link href="/collections/shalwar-kameez" className="relative group rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[450px]">
            <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop" alt="Shalwar Kameez" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="text-[9px] text-white/80 uppercase tracking-widest font-bold mb-1">8 Styles Available</div>
              <h3 className="text-3xl font-serif text-white mb-2">Shalwar Kameez</h3>
              <p className="text-xs text-white/80 mb-6">Embroidered & printed shalwar kameez.</p>
              <button className="bg-brand-gold text-brand-maroon px-6 py-2.5 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors">
                Shop Shalwar Kameez →
              </button>
            </div>
          </Link>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {TRENDING_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="w-full bg-[#FDFBF7] py-16 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-black/5 flex flex-col items-center">
            <span className="text-4xl mb-4">🚚</span>
            <h4 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">Free Shipping</h4>
            <p className="text-[10px] text-brand-text-light">Free on orders over Rs. 5000</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-black/5 flex flex-col items-center">
            <span className="text-4xl mb-4">🔄</span>
            <h4 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">Easy Returns</h4>
            <p className="text-[10px] text-brand-text-light">14-day return policy</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-black/5 flex flex-col items-center">
            <span className="text-4xl mb-4">🔒</span>
            <h4 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">Secure Payment</h4>
            <p className="text-[10px] text-brand-text-light">100% safe checkout</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-black/5 flex flex-col items-center">
            <span className="text-4xl mb-4">✨</span>
            <h4 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">Premium Quality</h4>
            <p className="text-[10px] text-brand-text-light">Handpicked fabrics</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-[#F5EFE6] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Customer Love</span>
            <h2 className="text-4xl font-serif text-brand-maroon mt-2">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Fatima A.", loc: "Lahore", text: "The Bosphorus Abaya is stunning. The embroidery is so detailed and the fabric is incredibly soft.", product: "Bosphorus Embroidered Abaya" },
              { name: "Ayesha K.", loc: "Karachi", text: "My Tulip Maxi Dress arrived beautifully packed. I wore it to a wedding and got so many compliments!", product: "Tulip Garden Maxi Dress" },
              { name: "Sara M.", loc: "Islamabad", text: "The Linen Coord Set is exactly what I needed — modest, stylish and perfect for work.", product: "Linen Pant Suit Set" },
              { name: "Nadia R.", loc: "Dubai", text: "Exceptional quality! The Ottoman Court Dress is everything and more. Worth every penny.", product: "Ottoman Court Dress" },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-brand-gold text-xs">
                    ★★★★★
                  </div>
                  <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider flex items-center gap-1">
                    ✓ Verified
                  </span>
                </div>
                <p className="text-xs text-brand-text flex-grow leading-relaxed mb-4">"{review.text}"</p>
                <div className="text-[9px] text-brand-gold font-bold mb-4">{review.product}</div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-maroon text-brand-gold flex items-center justify-center text-xs font-bold font-serif">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-maroon">{review.name}</div>
                    <div className="text-[9px] text-brand-text-light">{review.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full bg-[#F5EFE6] py-10 pb-20 px-6">
        <div className="mx-auto max-w-5xl bg-brand-maroon rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Join Our Community</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-4">Get <span className="text-brand-gold italic">15% Off</span> Your First Order</h2>
            <p className="text-sm text-white/80 max-w-md mx-auto mb-8">New arrivals, exclusive offers & style inspiration delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-1 bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-brand-gold" />
              <button className="bg-brand-gold text-brand-maroon px-8 py-3 rounded-md text-sm font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors">
                Get 15% Off
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}