'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  // Don't show store header in admin routes if they have their own, but based on screenshots Admin has the same header on top.
  // Actually, let's keep it global and just conditionally render things if needed, or assume admin shares it.
  // Image 1 shows the header is present in Admin as well.

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm flex flex-col">
      {/* Top Banner */}
      <div className="w-full bg-brand-gold py-1.5 text-center text-[10px] font-bold tracking-widest text-brand-maroon uppercase">
        Free Shipping on Orders Over Rs. 5000 - Code <span className="font-extrabold">HAYATI15</span> for 15% OFF
      </div>

      {/* Main Nav */}
      <div className="w-full bg-brand-maroon text-white px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col text-brand-gold">
            <span className="text-2xl font-serif tracking-wide leading-none">E-COMMERCE</span>
            <span className="text-[9px] font-medium tracking-[0.2em] text-brand-gold/80 mt-1 uppercase leading-none">Modest Fashion Store</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-[11px] font-medium tracking-wider text-white/80 uppercase">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <Link href="/collections/abayas" className="hover:text-brand-gold transition-colors">Abayas</Link>
            <Link href="/collections/dresses" className="hover:text-brand-gold transition-colors">Dresses</Link>
            <Link href="/collections/shalwar-kameez" className="hover:text-brand-gold transition-colors">Shalwar Kameez</Link>
            <Link href="/collections/coord-sets" className="hover:text-brand-gold transition-colors">Coord Sets</Link>
            <Link href="/collections/all" className="hover:text-brand-gold transition-colors">All</Link>
            <Link href="/collections/sale" className="text-orange-400 hover:text-orange-300 transition-colors flex items-center">
              🔥 Sale
            </Link>
          </nav>

          {/* Icons & Actions */}
          <div className="flex items-center space-x-5 text-white/90">
            {/* Search */}
            <button className="hover:text-brand-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            {/* Wishlist */}
            <Link href="/wishlist" className="hover:text-brand-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </Link>
            {/* Bag */}
            <Link href="/cart" className="bg-brand-gold text-brand-maroon flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-brand-gold-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="text-[11px] font-bold">Bag</span>
            </Link>
            {/* Profile Dropdown */}
            <div className="relative group">
              <Link href="/login" className="bg-white/10 text-white flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-[11px] font-medium">Login</span>
              </Link>

              {/* Dropdown Menu (Hover to reveal for now) */}
              <div className="absolute right-0 mt-2 w-48 bg-brand-surface rounded-md shadow-lg border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="flex flex-col text-sm text-brand-maroon">
                  <Link href="/account" className="px-4 py-3 hover:bg-brand-bg border-b border-black/5 transition-colors">My Account</Link>
                  <Link href="/account/orders" className="px-4 py-3 hover:bg-brand-bg border-b border-black/5 transition-colors">My Orders</Link>
                  <Link href="/account/notifications" className="px-4 py-3 hover:bg-brand-bg border-b border-black/5 transition-colors">Notifications</Link>
                  <Link href="/admin/dashboard" className="px-4 py-3 hover:bg-brand-bg border-b border-black/5 transition-colors">Admin Panel</Link>
                  <button className="text-left px-4 py-3 text-red-600 hover:bg-red-50 transition-colors">Sign Out</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}
