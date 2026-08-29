'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const SHIPPING_METHODS = [
  { id: 1, name: "Standard Delivery (Nationwide)", provider: "TCS / Leopards", time: "3-5 Business Days", rate: "Rs. 250", condition: "Orders below Rs. 5000", status: "Active" },
  { id: 2, name: "Free Delivery (Nationwide)", provider: "TCS / Leopards", time: "3-5 Business Days", rate: "Free", condition: "Orders over Rs. 5000", status: "Active" },
  { id: 3, name: "Express Delivery (Lahore Only)", provider: "Bykea / In-house", time: "Same Day", rate: "Rs. 500", condition: "Order before 2 PM", status: "Active" },
  { id: 4, name: "International Shipping (UAE)", provider: "DHL", time: "5-7 Business Days", rate: "AED 50", condition: "Flat Rate", status: "Inactive" },
];

export default function ShippingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Shipping Methods</h1>
        <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-colors">
          + Add Shipping Zone
        </button>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-brand-text-light uppercase tracking-wider border-b border-black/5 bg-black/[0.02]">
              <tr>
                <th className="px-6 py-4 font-bold">Method Name</th>
                <th className="px-6 py-4 font-bold">Courier Provider</th>
                <th className="px-6 py-4 font-bold">Delivery Time</th>
                <th className="px-6 py-4 font-bold">Condition</th>
                <th className="px-6 py-4 font-bold text-right">Rate</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {SHIPPING_METHODS.map(method => (
                <tr key={method.id} className="hover:bg-black/[0.01]">
                  <td className="px-6 py-4">
                    <span className="font-bold text-brand-maroon">{method.name}</span>
                  </td>
                  <td className="px-6 py-4 text-brand-text">{method.provider}</td>
                  <td className="px-6 py-4 text-brand-text">{method.time}</td>
                  <td className="px-6 py-4 text-[10px] text-brand-text-light italic">{method.condition}</td>
                  <td className="px-6 py-4 text-right font-medium text-brand-gold">{method.rate}</td>
                  <td className="px-6 py-4">
                    <Badge variant={method.status === 'Active' ? 'success' : 'neutral'}>
                      {method.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <button className="border border-black/10 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-black/5 transition-colors">Edit</button>
                    </div>
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
