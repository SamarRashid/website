'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const [language, setLanguage] = useState("EN");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);
  
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
            {/* Language Selector */}
            <div className="relative flex items-center">
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-transparent hover:text-brand-gold transition-colors text-[11px] font-medium tracking-wider uppercase cursor-pointer pr-4 outline-none border-none"
              >
                <option value="EN" className="text-brand-maroon text-sm">Language (English)</option>
                <option value="TR" className="text-brand-maroon text-sm">Language (Turkish)</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-0 pointer-events-none"><path d="m6 9 6 6 6-6"/></svg>
            </div>

            {/* Search */}
            <div className="relative">
              <button 
                onClick={(e) => { e.preventDefault(); setIsSearchOpen(!isSearchOpen); }}
                className={`transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 ${isSearchOpen ? 'text-brand-gold bg-white/10' : 'text-white'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-4 w-72 md:w-96 bg-white rounded-md shadow-xl border border-black/5 p-4 z-50 flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Search for abayas, dresses..." 
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-brand-maroon outline-none placeholder:text-brand-text-light"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }
                    }}
                  />
                  <button onClick={(e) => { e.preventDefault(); setIsSearchOpen(false); }} className="text-gray-400 hover:text-brand-maroon p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative text-brand-text hover:text-brand-maroon transition-colors hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              {wishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
                  {wishlistItems}
                </span>
              )}
            </Link>
            {/* Bag */}
            <Link href="/cart" className="relative bg-brand-gold text-brand-maroon flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-brand-gold-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="text-[11px] font-bold">Bag</span>
              {cartItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-brand-maroon">
                  {cartItems}
                </span>
              )}
            </Link>
            {/* Profile Dropdown */}
            <div className="relative group">
              <Link href="/login" className="bg-white/10 text-white flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-[11px] font-medium">Login</span>
              </Link>

              {/* Dropdown Menu (Hover to reveal for now) */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
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
