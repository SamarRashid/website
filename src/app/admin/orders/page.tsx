import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const ORDERS_STATS = [
  { label: "Total Orders", value: "281", color: "text-brand-text" },
  { label: "Pending", value: "4", color: "text-red-500", border: "border-red-500" },
  { label: "Confirmed", value: "8", color: "text-purple-500", border: "border-purple-500" },
  { label: "Processing", value: "12", color: "text-yellow-600", border: "border-yellow-500" },
  { label: "Packed", value: "6", color: "text-orange-500" },
  { label: "Shipped", value: "18", color: "text-blue-500", border: "border-blue-500" },
  { label: "Out for Delivery", value: "5", color: "text-teal-500" },
  { label: "Delivered", value: "247", color: "text-green-600", border: "border-green-500" },
  { label: "Cancelled", value: "3", color: "text-red-700" },
  { label: "Returned", value: "2", color: "text-red-700" },
  { label: "Refund Requested", value: "1", color: "text-purple-400" },
  { label: "Refunded", value: "1", color: "text-gray-400" },
  { label: "Failed", value: "0", color: "text-gray-400" },
];

const ORDERS_DATA = [
  { id: "HAY-28451", customer: "Fatima Ahmed", phone: "+92 300 1234567", items: 2, total: "Rs. 2,180", method: "COD", payment: "Paid", status: "Shipped", delivery: "Shipped", date: "20 Aug 2026" },
  { id: "HAY-19832", customer: "Sara Malik", phone: "+92 321 9876543", items: 1, total: "Rs. 980", method: "COD", payment: "Paid", status: "Shipped", delivery: "Shipped", date: "19 Aug 2026" },
  { id: "HAY-05671", customer: "Nadia Rehman", phone: "+92 333 4567890", items: 3, total: "Rs. 3,700", method: "COD", payment: "Pending", status: "Processing", delivery: "Processing", date: "18 Aug 2026" },
  { id: "HAY-12345", customer: "Aisha Khan", phone: "+92 301 2345678", items: 1, total: "Rs. 1,290", method: "COD", payment: "Failed", status: "Pending", delivery: "Pending", date: "18 Aug 2026" },
  { id: "HAY-67890", customer: "Hira Tariq", phone: "+92 345 6789012", items: 2, total: "Rs. 1,640", method: "COD", payment: "Paid", status: "Confirmed", delivery: "Confirmed", date: "17 Aug 2026" },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon">Order Management</h1>
        <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-md font-medium text-sm hover:bg-brand-gold-light transition-colors">
          Export CSV
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {ORDERS_STATS.map((stat, i) => (
          <Card key={i} className={`flex flex-col items-center justify-center py-4 px-2 ${stat.border ? `border-2 ${stat.border}` : ''}`}>
            <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] text-center font-medium text-brand-text-light uppercase tracking-wider">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 bg-brand-bg py-2">
        <input 
          type="text" 
          placeholder="Search by Order ID, Customer, Phone..." 
          className="flex-1 px-4 py-2 bg-black/5 border border-transparent rounded-md focus:border-brand-gold focus:outline-none text-sm"
        />
        <div className="flex gap-2 flex-wrap">
          <select className="px-4 py-2 bg-black/5 rounded-md text-sm outline-none border border-transparent focus:border-brand-gold">
            <option>All Statuses</option>
          </select>
          <select className="px-4 py-2 bg-black/5 rounded-md text-sm outline-none border border-transparent focus:border-brand-gold">
            <option>Payment: All</option>
          </select>
          <select className="px-4 py-2 bg-black/5 rounded-md text-sm outline-none border border-transparent focus:border-brand-gold">
            <option>Delivery: All</option>
          </select>
          <select className="px-4 py-2 bg-black/5 rounded-md text-sm outline-none border border-transparent focus:border-brand-gold">
            <option>Last 30 Days</option>
          </select>
          <button className="bg-brand-maroon text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-brand-maroon-light transition-colors">
            Filter
          </button>
        </div>
      </div>

      {/* Data Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-[11px] text-brand-text-light uppercase bg-black/[0.02] border-b border-black/5">
              <tr>
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Phone</th>
                <th className="px-6 py-4 font-semibold text-center">Items</th>
                <th className="px-6 py-4 font-semibold text-right">Total</th>
                <th className="px-6 py-4 font-semibold text-center">Method</th>
                <th className="px-6 py-4 font-semibold text-center">Payment</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-center">Delivery</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {ORDERS_DATA.map((order, i) => (
                <tr key={i} className="hover:bg-black/[0.01]">
                  <td className="px-6 py-4 font-medium">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4 text-brand-text-light">{order.phone}</td>
                  <td className="px-6 py-4 text-center">{order.items}</td>
                  <td className="px-6 py-4 text-right font-medium text-brand-gold">{order.total}</td>
                  <td className="px-6 py-4 text-center text-xs">{order.method}</td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant={order.payment === 'Paid' ? 'success' : order.payment === 'Failed' ? 'error' : 'warning'}>
                      {order.payment}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant={order.status === 'Shipped' ? 'info' : order.status === 'Processing' ? 'warning' : order.status === 'Confirmed' ? 'success' : 'neutral'}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant={order.delivery === 'Shipped' ? 'info' : order.delivery === 'Processing' ? 'warning' : order.delivery === 'Confirmed' ? 'success' : 'neutral'}>
                      {order.delivery}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-brand-text-light text-xs">{order.date}</td>
                  <td className="px-6 py-4 text-center">
                    <Link href={`/admin/orders/${order.id}`} className="text-brand-gold font-medium hover:underline text-xs">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
