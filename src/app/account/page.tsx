'use client';

import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="w-full bg-brand-bg min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-6">
        
        <div className="flex justify-between items-end mb-8 border-b border-black/5 pb-4">
          <div>
            <h1 className="text-3xl font-serif text-brand-maroon">My Account</h1>
            <p className="text-xs text-brand-text-light mt-1">Manage your personal information and preferences.</p>
          </div>
          <button className="text-[10px] uppercase font-bold tracking-widest text-red-500 hover:underline">
            Sign Out
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-black/5 p-8 mb-8">
          <h2 className="text-xl font-serif text-brand-maroon mb-6">Profile Details</h2>
          
          <form className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">First Name</label>
                <input type="text" defaultValue="Fatima" className="w-full bg-[#FDFBF7] border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Last Name</label>
                <input type="text" defaultValue="Ahmed" className="w-full bg-[#FDFBF7] border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Email Address</label>
              <input type="email" defaultValue="fatima@email.com" className="w-full bg-[#FDFBF7] border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Phone Number</label>
              <input type="tel" defaultValue="+92 300 1234567" className="w-full bg-[#FDFBF7] border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
            </div>
            
            <div className="pt-4 border-t border-black/5">
              <h3 className="text-sm font-bold text-brand-maroon mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">Current Password</label>
                  <input type="password" placeholder="Leave blank to keep same" className="w-full bg-[#FDFBF7] border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-brand-text mb-1.5 ml-1">New Password</label>
                  <input type="password" placeholder="New password" className="w-full bg-[#FDFBF7] border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-maroon transition-colors" />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button type="button" className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-brand-maroon/90 transition-colors shadow-sm">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/account/orders" className="bg-white p-6 rounded-xl shadow-sm border border-black/5 flex items-center justify-between group hover:border-brand-maroon transition-colors">
            <div>
              <h3 className="text-lg font-serif text-brand-maroon mb-1">My Orders</h3>
              <p className="text-xs text-brand-text-light">View your order history and track shipments.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-maroon group-hover:bg-brand-maroon group-hover:text-brand-gold transition-colors">
              →
            </div>
          </Link>

          <Link href="/account/notifications" className="bg-white p-6 rounded-xl shadow-sm border border-black/5 flex items-center justify-between group hover:border-brand-maroon transition-colors">
            <div>
              <h3 className="text-lg font-serif text-brand-maroon mb-1">Notifications</h3>
              <p className="text-xs text-brand-text-light">Check updates on orders and exclusive offers.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-maroon group-hover:bg-brand-maroon group-hover:text-brand-gold transition-colors relative">
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-gold rounded-full border border-white"></span>
              →
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
