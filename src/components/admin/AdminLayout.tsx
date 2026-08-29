'use client';

import AdminSidebar from "./AdminSidebar";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAdminLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAdminLoggedIn && !pathname.includes('/admin/login')) {
      router.push('/admin/login');
    }
  }, [isAdminLoggedIn, pathname, router]);

  if (!isAdminLoggedIn && !pathname.includes('/admin/login')) {
    return null; // Prevent flicker while redirecting
  }

  // If we are on the login page, don't show sidebar and topbar
  if (pathname.includes('/admin/login')) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-1 h-screen overflow-hidden bg-brand-bg text-brand-text">
      {/* Sidebar is fixed on desktop */}
      <div className="hidden md:block w-64 flex-shrink-0 border-r border-black/5 shadow-sm">
        <AdminSidebar />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-black/5 flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-brand-maroon hover:bg-brand-bg rounded-md"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
            <h1 className="text-lg font-serif font-bold text-brand-maroon hidden sm:block">Welcome to the Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-[11px] font-bold text-brand-maroon uppercase tracking-wider">Super Admin</span>
                <span className="text-[10px] text-brand-text-light">samar@gmail.com</span>
              </div>
              <div className="w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center text-brand-maroon font-bold font-serif shadow-sm">
                S
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#FDFBF7]">
          <div className="p-8 max-w-[1600px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
