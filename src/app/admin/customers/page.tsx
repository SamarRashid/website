'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const CUSTOMERS = [
  { id: 1, name: "Fatima Ahmed", email: "fatima@email.com", phone: "+92 300 1234567", orders: 5, spent: "Rs. 25,400", registered: "12 Jan 2026", status: "Active" },
  { id: 2, name: "Sara Malik", email: "sara.m@email.com", phone: "+92 321 7654321", orders: 2, spent: "Rs. 8,900", registered: "05 Mar 2026", status: "Active" },
  { id: 3, name: "Ayesha Khan", email: "ayesha_k@email.com", phone: "+92 333 9876543", orders: 12, spent: "Rs. 54,200", registered: "10 Nov 2025", status: "VIP" },
  { id: 4, name: "Nida Raza", email: "nida.raza@email.com", phone: "+92 345 1122334", orders: 1, spent: "Rs. 3,500", registered: "22 Aug 2026", status: "Active" },
  { id: 5, name: "Zainab Tariq", email: "zainabtariq@email.com", phone: "+92 300 5566778", orders: 0, spent: "Rs. 0", registered: "25 Aug 2026", status: "Inactive" },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Customers</h1>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search customers..." 
            className="border border-black/10 rounded-md p-2 text-sm focus:outline-none focus:border-brand-maroon bg-white w-64"
          />
          <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-brand-text-light uppercase tracking-wider border-b border-black/5 bg-black/[0.02]">
              <tr>
                <th className="px-6 py-4 font-bold">Customer Name</th>
                <th className="px-6 py-4 font-bold">Contact Info</th>
                <th className="px-6 py-4 font-bold text-center">Orders</th>
                <th className="px-6 py-4 font-bold text-right">Total Spent</th>
                <th className="px-6 py-4 font-bold">Registered</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {CUSTOMERS.map(customer => (
                <tr key={customer.id} className="hover:bg-black/[0.01]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-maroon text-brand-gold flex items-center justify-center font-serif text-xs font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <span className="font-bold text-brand-maroon">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-brand-text">{customer.email}</div>
                    <div className="text-[10px] text-brand-text-light">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-brand-text">{customer.orders}</td>
                  <td className="px-6 py-4 text-right font-medium text-brand-gold">{customer.spent}</td>
                  <td className="px-6 py-4 text-brand-text">{customer.registered}</td>
                  <td className="px-6 py-4">
                    <Badge variant={customer.status === 'VIP' ? 'success' : customer.status === 'Inactive' ? 'neutral' : 'info'}>
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="border border-black/10 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-black/5 transition-colors">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
