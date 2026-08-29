'use client';

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Page Header is handled by AdminLayout, but we can add a secondary welcome or just dive into stats */}
      <div className="mb-6">
        <h2 className="text-2xl font-serif text-brand-maroon font-bold">Welcome to the Admin Dashboard</h2>
        <p className="text-sm text-brand-text-light mt-1">Here is what's happening with your store today.</p>
      </div>

      {/* Overview Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Total Sales */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-maroon/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-brand-text-light mb-1">Total Sales</p>
              <h3 className="text-2xl font-serif text-brand-maroon">Rs. 245,500</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-maroon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
          </div>
          <div className="flex items-center text-xs text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
            ↑ 12.5% <span className="text-brand-text-light font-normal ml-1">from last month</span>
          </div>
        </div>

        {/* Card 2: Total Orders */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-maroon/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-brand-text-light mb-1">Total Orders</p>
              <h3 className="text-2xl font-serif text-brand-maroon">1,248</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-maroon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
          </div>
          <div className="flex items-center text-xs text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
            ↑ 8.2% <span className="text-brand-text-light font-normal ml-1">from last month</span>
          </div>
        </div>

        {/* Card 3: Active Products */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-maroon/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-brand-text-light mb-1">Active Products</p>
              <h3 className="text-2xl font-serif text-brand-maroon">342</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-maroon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
            </div>
          </div>
          <div className="flex items-center text-xs text-brand-maroon font-bold bg-brand-bg w-fit px-2 py-1 rounded">
            12 <span className="text-brand-text-light font-normal ml-1">out of stock</span>
          </div>
        </div>

        {/* Card 4: Customers */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-maroon/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-brand-text-light mb-1">Customers</p>
              <h3 className="text-2xl font-serif text-brand-maroon">8,591</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-maroon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
          </div>
          <div className="flex items-center text-xs text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
            ↑ 24% <span className="text-brand-text-light font-normal ml-1">new this week</span>
          </div>
        </div>
      </div>

      {/* Recent Activity or Chart Placeholder */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-brand-maroon/10 h-64 flex flex-col items-center justify-center text-brand-text-light text-sm">
        <svg className="w-12 h-12 text-brand-gold/50 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        <p>Sales Analytics Chart will be displayed here</p>
      </div>
    </div>
  );
}
