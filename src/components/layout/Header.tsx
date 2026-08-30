'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const { language, setLanguage, t } = useLanguage();
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full sticky top-0 z-50 shadow-sm flex flex-col">
      {/* Top Banner */}
      <div className="w-full bg-brand-gold py-1.5 text-center text-[9px] md:text-[10px] font-bold tracking-widest text-brand-maroon uppercase px-2">
        {t('free_shipping')}
      </div>

      {/* Main Nav */}
      <div className="w-full bg-brand-maroon text-white px-3 sm:px-6 relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-3 md:py-4">
          
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-brand-gold p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex flex-col text-brand-gold">
              <span className="text-xl md:text-2xl font-serif tracking-wide leading-none">E-COMMERCE</span>
              <span className="text-[7px] md:text-[9px] font-medium tracking-[0.2em] text-brand-gold/80 mt-1 uppercase leading-none hidden sm:block">Modest Fashion Store</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-[11px] font-medium tracking-wider text-white/80 uppercase">
            <Link href="/" className="hover:text-brand-gold transition-colors">{t('nav_home')}</Link>
            <Link href="/collections/abayas" className="hover:text-brand-gold transition-colors">{t('nav_abayas')}</Link>
            <Link href="/collections/dresses" className="hover:text-brand-gold transition-colors">{t('nav_dresses')}</Link>
            <Link href="/collections/shalwar-kameez" className="hover:text-brand-gold transition-colors">{t('nav_shalwar')}</Link>
            <Link href="/collections/coord-sets" className="hover:text-brand-gold transition-colors">{t('nav_coord')}</Link>
            <Link href="/collections/all" className="hover:text-brand-gold transition-colors">{t('nav_all')}</Link>
            <Link href="/collections/sale" className="text-orange-400 hover:text-orange-300 transition-colors flex items-center">
              {t('nav_sale')}
            </Link>
          </nav>

          {/* Icons & Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-5 text-white/90">
            {/* Language Selector Dropdown */}
            <div className="relative group">
              <button 
                onClick={(e) => { e.preventDefault(); setIsLangOpen(!isLangOpen); }}
                className="flex items-center gap-1 sm:gap-2 hover:text-brand-gold transition-colors text-[10px] sm:text-[11px] font-medium tracking-wider uppercase"
              >
                <span className="hidden lg:inline">LANG</span>
                <img 
                  src={language === "EN" ? "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" : "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"} 
                  alt={language} 
                  className="w-4 h-3 object-cover rounded-sm shadow-sm"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform text-white/80 hidden sm:block ${isLangOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
              </button>

              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-black/5 z-50 overflow-hidden">
                  <div className="flex flex-col text-sm text-brand-maroon">
                    <button 
                      onClick={() => { setLanguage("EN"); setIsLangOpen(false); }}
                      className={`flex items-center gap-3 px-4 py-3 hover:bg-brand-bg transition-colors ${language === 'EN' ? 'bg-brand-bg font-bold' : ''}`}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="English" className="w-5 h-3.5 object-cover rounded-sm border border-black/10" />
                      EN
                    </button>
                    <button 
                      onClick={() => { setLanguage("TR"); setIsLangOpen(false); }}
                      className={`flex items-center gap-3 px-4 py-3 hover:bg-brand-bg transition-colors ${language === 'TR' ? 'bg-brand-bg font-bold' : ''}`}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" alt="Turkish" className="w-5 h-3.5 object-cover rounded-sm border border-black/10" />
                      TR
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search */}
            <div className="relative">
              <button 
                onClick={(e) => { e.preventDefault(); setIsSearchOpen(!isSearchOpen); }}
                className={`transition-colors flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-white/10 ${isSearchOpen ? 'text-brand-gold bg-white/10' : 'text-white'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none sm:w-[18px] sm:h-[18px]"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-4 w-[250px] sm:w-72 md:w-96 bg-white rounded-md shadow-xl border border-black/5 p-3 md:p-4 z-50 flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder={t('search_placeholder')} 
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-xs md:text-sm text-brand-maroon outline-none placeholder:text-brand-text-light min-w-0"
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
            <Link href="/wishlist" className="relative text-white hover:text-brand-gold transition-colors hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              {wishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">
                  {wishlistItems}
                </span>
              )}
            </Link>
            {/* Bag */}
            <Link href="/cart" className="relative bg-brand-gold text-brand-maroon flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 rounded-full hover:bg-brand-gold-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="text-[10px] sm:text-[11px] font-bold hidden sm:inline">{t('nav_bag')}</span>
              {cartItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] sm:text-[10px] font-bold w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center rounded-full border border-brand-maroon">
                  {cartItems}
                </span>
              )}
            </Link>
            {/* Profile Dropdown */}
            <div className="relative group">
              <Link href="/login" className="bg-white/10 text-white flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-[10px] sm:text-[11px] font-medium hidden sm:inline">{t('login')}</span>
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="flex flex-col text-sm text-brand-maroon">
                  <Link href="/account" className="px-4 py-3 hover:bg-brand-bg border-b border-black/5 transition-colors">{t('my_account')}</Link>
                  <Link href="/account/orders" className="px-4 py-3 hover:bg-brand-bg border-b border-black/5 transition-colors">{t('my_orders')}</Link>
                  <Link href="/account/notifications" className="px-4 py-3 hover:bg-brand-bg border-b border-black/5 transition-colors">{t('notifications')}</Link>
                  <Link href="/admin/dashboard" className="px-4 py-3 hover:bg-brand-bg border-b border-black/5 transition-colors">{t('admin_panel')}</Link>
                  <button className="text-left px-4 py-3 text-red-600 hover:bg-red-50 transition-colors">{t('sign_out')}</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-maroon border-t border-white/10 shadow-xl z-50 pb-4">
            <nav className="flex flex-col text-sm font-medium tracking-wider text-white/90 uppercase px-6">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="py-4 border-b border-white/10 hover:text-brand-gold transition-colors">{t('nav_home')}</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/collections/abayas" className="py-4 border-b border-white/10 hover:text-brand-gold transition-colors">{t('nav_abayas')}</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/collections/dresses" className="py-4 border-b border-white/10 hover:text-brand-gold transition-colors">{t('nav_dresses')}</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/collections/shalwar-kameez" className="py-4 border-b border-white/10 hover:text-brand-gold transition-colors">{t('nav_shalwar')}</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/collections/coord-sets" className="py-4 border-b border-white/10 hover:text-brand-gold transition-colors">{t('nav_coord')}</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/collections/all" className="py-4 border-b border-white/10 hover:text-brand-gold transition-colors">{t('nav_all')}</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/collections/sale" className="py-4 text-orange-400 hover:text-orange-300 transition-colors">
                {t('nav_sale')}
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/wishlist" className="py-4 border-t border-white/20 text-brand-gold hover:text-white transition-colors flex items-center justify-between mt-2">
                Wishlist
                {wishlistItems > 0 && <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{wishlistItems}</span>}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
