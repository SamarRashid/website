import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-maroon text-white/80 py-16 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex flex-col text-brand-gold mb-6">
              <span className="text-2xl font-serif tracking-wide leading-none">E-COMMERCE</span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-brand-gold/80 mt-1 uppercase leading-none">Modest Fashion</span>
            </Link>
            <p className="text-xs mb-8 max-w-xs leading-relaxed">
              Premium abayas, dresses & coord sets for the modern, modest woman.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] hover:border-brand-gold hover:text-brand-gold cursor-pointer transition-colors">IG</div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] hover:border-brand-gold hover:text-brand-gold cursor-pointer transition-colors">FB</div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] hover:border-brand-gold hover:text-brand-gold cursor-pointer transition-colors">YT</div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] hover:border-brand-gold hover:text-brand-gold cursor-pointer transition-colors">TT</div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] hover:border-brand-gold hover:text-brand-gold cursor-pointer transition-colors">PN</div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-6">Collections</h4>
            <ul className="space-y-4 text-xs">
              <li><Link href="/collections/abayas" className="hover:text-white transition-colors">Abayas</Link></li>
              <li><Link href="/collections/dresses" className="hover:text-white transition-colors">Dresses</Link></li>
              <li><Link href="/collections/coord-sets" className="hover:text-white transition-colors">Coord Sets</Link></li>
              <li><Link href="/collections/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="/collections/sale" className="hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-6">Customer Care</h4>
            <ul className="space-y-4 text-xs">
              <li><Link href="/pages/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="/pages/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/pages/returns" className="hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link href="/account/orders" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="/pages/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-6">About</h4>
            <ul className="space-y-4 text-xs">
              <li><Link href="/pages/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pages/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/pages/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/pages/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px]">© 2026 E-Commerce Modest Fashion. All rights reserved.</p>
          <div className="flex gap-2">
            {['Visa', 'MC', 'COD', 'JazzCash', 'Bank'].map(method => (
              <div key={method} className="px-2 py-1 text-[8px] uppercase tracking-wider border border-white/20 rounded text-white/50">{method}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
