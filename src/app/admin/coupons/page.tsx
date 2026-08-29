'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const COUPONS = [
  { id: 1, code: "WELCOME10", type: "Percentage", value: "10%", minSpend: "Rs. 0", usageLimit: "1 per user", expiry: "31 Dec 2026", status: "Active" },
  { id: 2, code: "HAYAT15", type: "Percentage", value: "15%", minSpend: "Rs. 5000", usageLimit: "Unlimited", expiry: "15 Sep 2026", status: "Active" },
  { id: 3, code: "FREESHIP", type: "Fixed Amount", value: "Rs. 250", minSpend: "Rs. 3000", usageLimit: "100 total", expiry: "31 Aug 2026", status: "Expired" },
  { id: 4, code: "EIDMUBARAK", type: "Percentage", value: "20%", minSpend: "Rs. 8000", usageLimit: "Unlimited", expiry: "30 Apr 2026", status: "Inactive" },
];

export default function CouponsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Coupons & Promotions</h1>
        <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-colors">
          + Create Coupon
        </button>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-brand-text-light uppercase tracking-wider border-b border-black/5 bg-black/[0.02]">
              <tr>
                <th className="px-6 py-4 font-bold">Coupon Code</th>
                <th className="px-6 py-4 font-bold">Type</th>
                <th className="px-6 py-4 font-bold">Discount</th>
                <th className="px-6 py-4 font-bold">Min. Spend</th>
                <th className="px-6 py-4 font-bold">Usage Limit</th>
                <th className="px-6 py-4 font-bold">Expiry Date</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {COUPONS.map(coupon => (
                <tr key={coupon.id} className="hover:bg-black/[0.01]">
                  <td className="px-6 py-4">
                    <span className="font-bold font-mono bg-brand-gold/20 text-brand-maroon px-2 py-1 rounded text-xs">
                      {coupon.code}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-brand-text">{coupon.type}</td>
                  <td className="px-6 py-4 font-bold text-brand-maroon">{coupon.value}</td>
                  <td className="px-6 py-4 text-brand-text">{coupon.minSpend}</td>
                  <td className="px-6 py-4 text-brand-text">{coupon.usageLimit}</td>
                  <td className="px-6 py-4 text-brand-text">{coupon.expiry}</td>
                  <td className="px-6 py-4">
                    <Badge variant={coupon.status === 'Active' ? 'success' : coupon.status === 'Expired' ? 'error' : 'neutral'}>
                      {coupon.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <button className="border border-black/10 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-black/5 transition-colors">Edit</button>
                      <button className="border border-red-200 text-red-600 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-red-50 transition-colors">Delete</button>
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
