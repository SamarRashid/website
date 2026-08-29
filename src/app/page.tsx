'use client';

import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import HeroBanner from "@/components/home/HeroBanner";

const TRENDING_PRODUCTS = [
  { id: "p1", name: "Bosphorus Embroidered Abaya", price: 1290, originalPrice: 1690, rating: 5, reviewsCount: 316, image: "/images/abaya_embroidered.jpg" },
  { id: "p2", name: "Sultanahmet Evening Abaya", price: 3400, rating: 5, reviewsCount: 157, image: "/images/abaya_velvet.jpg", isNew: true },
  { id: "p3", name: "Hagia Sofia Velvet Abaya", price: 2780, originalPrice: 3500, rating: 4, reviewsCount: 156, image: "/images/hero_banner.jpg" },
  { id: "p4", name: "Iznik Floral Open Abaya", price: 1150, rating: 5, reviewsCount: 203, image: "/images/Image (Abayas).png", isNew: true },
  { id: "p5", name: "Topkapi Lace Abaya", price: 2100, originalPrice: 2600, rating: 5, reviewsCount: 189, image: "/images/Image (Dresses).png" },
  { id: "p6", name: "Anatolian Classic Abaya", price: 980, rating: 5, reviewsCount: 445, image: "/images/coord_set_floral.jpg" },
  { id: "p7", name: "Tulip Garden Maxi Dress", price: 890, originalPrice: 1250, rating: 4, reviewsCount: 312, image: "/images/shalwar_kameez_pink.jpg" },
  { id: "p8", name: "Ottoman Court Dress", price: 2200, rating: 4.8, reviewsCount: 118, image: "/images/Image (Coord Sets).png", isNew: true }
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <HeroBanner />

      {/* Category Icons Bar */}
      <div className="w-full bg-brand-maroon py-6 relative z-20">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-16">
          {[
            { icon: "👗", name: t('nav_abayas'), count: `8 ${t('styles')}`, href: "/collections/abayas" },
            { icon: "🌸", name: t('nav_dresses'), count: `12 ${t('styles')}`, href: "/collections/dresses" },
            { icon: "🪄", name: t('nav_shalwar'), count: `6 ${t('styles')}`, href: "/collections/shalwar-kameez" },
            { icon: "🎁", name: t('nav_coord'), count: `10 ${t('styles')}`, href: "/collections/coord-sets" },
            { icon: "🔥", name: t('nav_sale'), count: t('sale_off'), href: "/collections/sale" },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="flex flex-col items-center group bg-white/5 hover:bg-white/10 px-6 py-4 rounded-xl transition-colors min-w-[120px]">
              <span className="text-2xl mb-2 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{item.icon}</span>
              <span className="text-xs font-bold text-white tracking-wider">{item.name}</span>
              <span className="text-[9px] text-white/50 tracking-widest uppercase mt-1">{item.count}</span>
            </Link>
          ))}
        </div>
      </div>



      {/* Shop By Category Bento Box */}
      <section className="w-full py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-brand-maroon">{t('shop_by_category')}</h2>
          <p className="text-[10px] uppercase tracking-widest text-brand-text-light mt-3 font-bold">{t('choose_looking_for')}</p>
        </div>
        
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row (3 boxes) */}
          <Link href="/collections/abayas" className="relative group rounded-2xl overflow-hidden aspect-square">
            <img src="/images/Image (Abayas).png" alt="Abayas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6 p-2 flex justify-between items-end">
              <h3 className="text-xl font-serif text-white">{t('nav_abayas')}</h3>
              <button className="bg-brand-gold text-brand-maroon px-4 py-1.5 rounded text-[9px] font-bold tracking-widest uppercase shadow-md hover:bg-brand-gold-light transition-colors">
                {t('shop_now')}
              </button>
            </div>
          </Link>
          
          <Link href="/collections/dresses" className="relative group rounded-2xl overflow-hidden aspect-square">
            <img src="/images/Image (Dresses).png" alt="Dresses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6 p-2 flex justify-between items-end">
              <h3 className="text-xl font-serif text-white">{t('nav_dresses')}</h3>
              <button className="bg-brand-gold text-brand-maroon px-4 py-1.5 rounded text-[9px] font-bold tracking-widest uppercase shadow-md hover:bg-brand-gold-light transition-colors">
                {t('shop_now')}
              </button>
            </div>
          </Link>

          <Link href="/collections/shalwar-kameez" className="relative group rounded-2xl overflow-hidden aspect-square">
            <img src="/images/Image (Shalwar Kameez).png" alt="Shalwar Kameez" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6 p-2 flex justify-between items-end">
              <h3 className="text-xl font-serif text-white">{t('nav_shalwar')}</h3>
              <button className="bg-brand-gold text-brand-maroon px-4 py-1.5 rounded text-[9px] font-bold tracking-widest uppercase shadow-md hover:bg-brand-gold-light transition-colors">
                {t('shop_now')}
              </button>
            </div>
          </Link>

          {/* Second Row (1 box, aligned left) */}
          <Link href="/collections/coord-sets" className="relative group rounded-2xl overflow-hidden aspect-square col-span-1">
            <img src="/images/Image (Coord Sets).png" alt="Coord Sets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6 p-2 flex justify-between items-end">
              <h3 className="text-xl font-serif text-white">{t('nav_coord')}</h3>
              <button className="bg-brand-gold text-brand-maroon px-4 py-1.5 rounded text-[9px] font-bold tracking-widest uppercase shadow-md hover:bg-brand-gold-light transition-colors">
                {t('shop_now')}
              </button>
            </div>
          </Link>
        </div>
      </section>

      {/* Sale Banner */}
      <div className="w-full bg-brand-maroon py-6 my-10">
        <div className="mx-auto max-w-4xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
            </div>
            <div>
              <div className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">{t('limited_time')}</div>
              <h3 className="text-2xl font-serif text-white">{t('sale_banner_title')}</h3>
            </div>
          </div>
          <Link href="/collections/sale" className="bg-brand-gold text-brand-maroon px-6 py-2.5 rounded text-[10px] font-bold tracking-widest uppercase shadow-md hover:bg-brand-gold-light transition-colors whitespace-nowrap">
            {t('shop_now')}
          </Link>
        </div>
      </div>

      {/* Product Grid */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-brand-maroon mb-2">{t('trending_now')}</h2>
              <p className="text-xs uppercase tracking-widest text-brand-text-light">{t('trending_desc')}</p>
            </div>
            
            {/* Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
              <button className="bg-brand-maroon text-brand-gold px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">{t('nav_all')}</button>
              <button className="bg-gray-100 text-brand-text px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors whitespace-nowrap">{t('nav_abayas')}</button>
              <button className="bg-gray-100 text-brand-text px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors whitespace-nowrap">{t('nav_dresses')}</button>
              <button className="bg-gray-100 text-brand-text px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors whitespace-nowrap">{t('nav_coord')}</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
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
            <h4 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">{t('free_shipping_title')}</h4>
            <p className="text-[10px] text-brand-text-light">{t('free_shipping_desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-black/5 flex flex-col items-center">
            <span className="text-4xl mb-4">🔄</span>
            <h4 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">{t('easy_returns')}</h4>
            <p className="text-[10px] text-brand-text-light">{t('easy_returns_desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-black/5 flex flex-col items-center">
            <span className="text-4xl mb-4">🔒</span>
            <h4 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">{t('secure_payment')}</h4>
            <p className="text-[10px] text-brand-text-light">{t('secure_payment_desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-black/5 flex flex-col items-center">
            <span className="text-4xl mb-4">✨</span>
            <h4 className="text-sm font-bold text-brand-maroon uppercase tracking-wider mb-2">{t('premium_quality')}</h4>
            <p className="text-[10px] text-brand-text-light">{t('premium_quality_desc')}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-[#F5EFE6] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t('customer_love')}</span>
            <h2 className="text-4xl font-serif text-brand-maroon mt-2">{t('what_customers_say')}</h2>
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
                    ✓ {t('verified')}
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
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t('join_community')}</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-4">{t('get_off')}</h2>
            <p className="text-sm text-white/80 max-w-md mx-auto mb-8">{t('newsletter_desc')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
              <input type="email" placeholder={t('email_placeholder')} className="flex-1 bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-brand-gold" />
              <button className="bg-brand-gold text-brand-maroon px-8 py-3 rounded-md text-sm font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors whitespace-nowrap">
                {t('get_discount')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}