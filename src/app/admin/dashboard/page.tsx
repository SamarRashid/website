import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const STATS = [
  { label: "Total Sales", value: "Rs. 1,28,450", change: "+15%", positive: true, icon: "💰" },
  { label: "Orders Today", value: "47", change: "+12%", positive: true, icon: "📦" },
  { label: "Total Customers", value: "3,284", change: "+5%", positive: true, icon: "👥" },
  { label: "Low Stock Items", value: "6", change: "-2", positive: false, icon: "⚠️" },
];

const RECENT_ORDERS = [
  { id: "HAY-28451", customer: "Fatima A.", items: 2, total: "Rs. 2,180", status: "Delivered", date: "20 Aug" },
  { id: "HAY-19832", customer: "Sara M.", items: 1, total: "Rs. 980", status: "Shipped", date: "19 Aug" },
  { id: "HAY-05671", customer: "Nadia R.", items: 3, total: "Rs. 3,700", status: "Processing", date: "18 Aug" },
  { id: "HAY-12345", customer: "Aisha K.", items: 1, total: "Rs. 1,290", status: "Pending", date: "18 Aug" },
  { id: "HAY-67890", customer: "Hira T.", items: 2, total: "Rs. 1,640", status: "Confirmed", date: "17 Aug" },
];

const TOP_PRODUCTS = [
  { name: "Sultanahmet Evening Abaya", sold: "258 sold", price: "Rs. 3,400" },
  { name: "Hagia Sofia Velvet Abaya", sold: "211 sold", price: "Rs. 2,780" },
  { name: "Bosphorus Embroidered Abaya", sold: "189 sold", price: "Rs. 1,290" },
  { name: "Topkapi Lace Abaya", sold: "147 sold", price: "Rs. 2,100" },
  { name: "Iznik Floral Open Abaya", sold: "121 sold", price: "Rs. 1,150" },
];

function getStatusVariant(status: string) {
  switch (status) {
    case "Delivered": return "success";
    case "Shipped": return "info";
    case "Processing": return "warning";
    case "Pending": return "neutral";
    case "Confirmed": return "success";
    default: return "default";
  }
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="text-2xl mb-4">{stat.icon}</div>
                <div className={`text-xs font-bold px-2 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-bold text-brand-maroon mb-1">{stat.value}</div>
              <div className="text-sm text-brand-text-light">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-brand-text-light uppercase border-b border-black/5 bg-black/[0.02]">
                  <tr>
                    <th className="px-6 py-4 font-medium">Order ID</th>
                    <th className="px-6 py-4 font-medium">Customer</th>
                    <th className="px-6 py-4 font-medium text-right">Items</th>
                    <th className="px-6 py-4 font-medium text-right">Total</th>
                    <th className="px-6 py-4 font-medium text-center">Status</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {RECENT_ORDERS.map((order, i) => (
                    <tr key={i} className="hover:bg-black/[0.01]">
                      <td className="px-6 py-4 font-medium">{order.id}</td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4 text-right">{order.items}</td>
                      <td className="px-6 py-4 text-right font-medium text-brand-gold">{order.total}</td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant={getStatusVariant(order.status) as any}>{order.status}</Badge>
                      </td>
                      <td className="px-6 py-4 text-brand-text-light">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {TOP_PRODUCTS.map((product, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/5 rounded flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brand-maroon truncate">{product.name}</p>
                    <p className="text-xs text-brand-text-light">{product.sold}</p>
                  </div>
                  <div className="text-sm font-medium text-brand-gold whitespace-nowrap">
                    {product.price}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
