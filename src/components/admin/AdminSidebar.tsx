'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { name: "Products", href: "/admin/products", icon: "👗" },
  { name: "Categories", href: "/admin/categories", icon: "📁" },
  { name: "Brands", href: "/admin/brands", icon: "🏷️" },
  { name: "Orders", href: "/admin/orders", icon: "📦" },
  { name: "Customers", href: "/admin/customers", icon: "👥" },
  { name: "Reviews", href: "/admin/reviews", icon: "⭐" },
  { name: "Coupons", href: "/admin/coupons", icon: "🎟️" },
  { name: "Shipping", href: "/admin/shipping", icon: "🚚" },
  { name: "Roles", href: "/admin/roles", icon: "🔐" },
  { name: "Reports", href: "/admin/reports", icon: "📉" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-brand-maroon min-h-[calc(100vh-100px)] text-white flex flex-col justify-between pt-8 pb-4">
      <div>
        <div className="px-8 mb-6">
          <h2 className="text-brand-gold font-serif text-lg tracking-wider uppercase">Admin Panel</h2>
        </div>
        
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-8 py-3 text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-brand-maroon-light text-brand-gold border-r-4 border-brand-gold" 
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-8 mt-10">
        <Link 
          href="/"
          className="text-white/60 hover:text-white text-xs flex items-center gap-2 transition-colors"
        >
          <span>←</span> Back to Store
        </Link>
      </div>
    </aside>
  );
}
