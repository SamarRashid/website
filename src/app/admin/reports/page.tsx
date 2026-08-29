'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Reports & Analytics</h1>
        <select className="border border-black/10 rounded-md p-2 text-sm bg-white focus:outline-none focus:border-brand-maroon">
          <option>Last 7 Days</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-brand-text-light font-bold uppercase tracking-widest mb-1">Total Revenue</p>
            <p className="text-2xl font-serif text-brand-maroon mb-2">Rs. 4.2M</p>
            <p className="text-[10px] text-green-600 font-bold">↑ 12.5% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-brand-text-light font-bold uppercase tracking-widest mb-1">Total Orders</p>
            <p className="text-2xl font-serif text-brand-maroon mb-2">1,248</p>
            <p className="text-[10px] text-green-600 font-bold">↑ 8.2% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-brand-text-light font-bold uppercase tracking-widest mb-1">Average Order Value</p>
            <p className="text-2xl font-serif text-brand-maroon mb-2">Rs. 3,365</p>
            <p className="text-[10px] text-red-500 font-bold">↓ 1.4% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-xs text-brand-text-light font-bold uppercase tracking-widest mb-1">Conversion Rate</p>
            <p className="text-2xl font-serif text-brand-maroon mb-2">3.4%</p>
            <p className="text-[10px] text-green-600 font-bold">↑ 0.5% from last period</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end gap-2 px-2 pb-6 pt-4 border-l border-b border-black/10 relative">
              <div className="absolute -left-8 top-0 text-[10px] text-brand-text-light">1M</div>
              <div className="absolute -left-8 top-1/2 text-[10px] text-brand-text-light">500k</div>
              <div className="absolute -left-8 bottom-4 text-[10px] text-brand-text-light">0</div>
              
              {/* Mock Bars */}
              {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-brand-gold/40 hover:bg-brand-gold transition-colors rounded-t relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Rs. {h * 10}k
                  </div>
                  <div style={{ height: `${h}%` }} className="w-full bg-brand-maroon rounded-t"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-brand-text-light px-2">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Products by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-brand-text">Abayas</span>
                  <span className="text-brand-text-light">45% (Rs. 1.89M)</span>
                </div>
                <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-maroon w-[45%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-brand-text">Dresses</span>
                  <span className="text-brand-text-light">30% (Rs. 1.26M)</span>
                </div>
                <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-gold w-[30%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-brand-text">Shalwar Kameez</span>
                  <span className="text-brand-text-light">15% (Rs. 630k)</span>
                </div>
                <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-700 w-[15%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-bold text-brand-text">Coord Sets</span>
                  <span className="text-brand-text-light">10% (Rs. 420k)</span>
                </div>
                <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-700 w-[10%]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
