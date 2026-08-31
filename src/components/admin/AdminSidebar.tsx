'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { name: "Products", href: "/admin/products", icon: "👗" },
  { name: "Categories", href: "/admin/categories", icon: "📁" },
  { name: "Brands", href: "/admin/brands", icon: "🏷️" },
  { name: "Orders", href: "/admin/orders", icon: "📦" },
  { name: "Customers", href: "/admin/customers", icon: "👥" },
  { name: "Reviews", href: "/admin/reviews", icon: "⭐" },
  { name: "Coupons", href: "/admin/coupons", icon: "🎫" },
  { name: "Shipping", href: "/admin/shipping", icon: "🚚" },
  { name: "Roles", href: "/admin/roles", icon: "🛡️" },
  { name: "Reports", href: "/admin/reports", icon: "📈" }
];

export default function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { logoutAdmin } = useAuth();

  return (
    <aside className="w-full h-full bg-brand-maroon text-white flex flex-col justify-between pt-6 pb-6 overflow-y-auto custom-scrollbar">
      <div>
        <div className="px-6 mb-8">
          <h2 className="text-brand-gold font-serif text-xl tracking-wide uppercase">ADMIN PANEL</h2>
        </div>
        
        <nav className="flex flex-col space-y-1 px-4">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={onNavigate}
                className={`flex items-center gap-4 px-4 py-3 text-[13px] font-medium rounded-lg transition-colors ${
                  isActive 
                    ? "bg-brand-gold text-brand-maroon shadow-sm" 
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-lg opacity-90">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-6 mt-12 flex flex-col gap-3">
        <Link 
          href="/"
          className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-maroon font-bold text-[13px] py-3 rounded-md flex items-center justify-center gap-2 transition-colors shadow-md uppercase tracking-wider"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Store
        </Link>
        <button 
          onClick={logoutAdmin}
          className="w-full text-white/70 hover:text-white text-[13px] py-2 flex items-center justify-center gap-2 transition-colors uppercase tracking-wider font-bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
