'use client';

import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 min-h-[calc(100vh-100px)]">
      {/* Sidebar is fixed on desktop */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 bg-brand-bg relative overflow-y-auto">
        <div className="p-8 max-w-[1600px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
