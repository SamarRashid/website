'use client';

import Link from "next/link";
import { use, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const TIMELINE = [
  { status: "Pending", date: "13 Aug, 10:15 AM", icon: "✓", active: true, color: "text-green-600 bg-green-100" },
  { status: "Confirmed", date: "14 Aug, 11:30 AM", icon: "✓", active: true, color: "text-green-600 bg-green-100" },
  { status: "Processing", date: "16 Aug, 02:45 PM", icon: "✓", active: true, color: "text-green-600 bg-green-100" },
  { status: "Packed", date: "18 Aug, 09:20 AM", icon: "✓", active: true, color: "text-green-600 bg-green-100" },
  { status: "Shipped", date: "20 Aug, 02:32 PM", icon: "📦", active: true, color: "text-brand-gold bg-brand-gold/20" },
  { status: "Out for Delivery", date: "-", icon: "🚚", active: false, color: "text-gray-400 bg-gray-100" },
  { status: "Delivered", date: "-", icon: "👤", active: false, color: "text-gray-400 bg-gray-100" },
];

export default function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/admin/dashboard" className="text-brand-gold hover:underline text-sm font-medium">
          ← Back to Orders
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-serif text-brand-maroon">Order #{resolvedParams.id}</h1>
          <Badge variant="info">Shipped</Badge>
        </div>
        <div className="flex gap-3">
          <button className="border border-black/10 px-4 py-2 rounded text-xs font-bold uppercase hover:bg-black/5 transition-colors">
            Download Invoice
          </button>
          <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded text-xs font-bold uppercase hover:bg-brand-gold-light transition-colors">
            Print Invoice
          </button>
        </div>
      </div>

      <div className="flex gap-4 border-b border-black/5 mb-6">
        <button 
          onClick={() => setActiveTab("details")}
          className={`pb-2 px-2 text-sm font-bold tracking-widest uppercase transition-colors border-b-2 ${activeTab === 'details' ? 'border-brand-maroon text-brand-maroon' : 'border-transparent text-brand-text-light hover:text-brand-maroon'}`}
        >
          Order Details
        </button>
        <button 
          onClick={() => setActiveTab("status")}
          className={`pb-2 px-2 text-sm font-bold tracking-widest uppercase transition-colors border-b-2 ${activeTab === 'status' ? 'border-brand-maroon text-brand-maroon' : 'border-transparent text-brand-text-light hover:text-brand-maroon'}`}
        >
          Update Status
        </button>
      </div>

      {activeTab === 'details' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-brand-text-light">Order ID:</span> <span className="font-medium text-brand-text">{resolvedParams.id}</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Order Date:</span> <span className="font-medium text-brand-text">20 Aug 2025, 02:32 PM</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Order Status:</span> <Badge variant="info">Shipped</Badge></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Payment Status:</span> <Badge variant="success">Paid</Badge></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-brand-text-light">Name:</span> <span className="font-medium text-brand-text">Fatima Ahmed</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Email:</span> <span className="font-medium text-brand-text">fatima@email.com</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Phone:</span> <span className="font-medium text-brand-text">+92 300 1234567</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Shipping Address:</span> <span className="font-medium text-brand-text text-right">House 42, Street 7, DHA Phase 5, Lahore, Pakistan</span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-0">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-brand-text-light uppercase border-b border-black/5 bg-black/[0.02]">
                  <tr>
                    <th className="px-6 py-4 font-medium">Product</th>
                    <th className="px-6 py-4 font-medium text-center">SKU</th>
                    <th className="px-6 py-4 font-medium text-center">Variant</th>
                    <th className="px-6 py-4 font-medium text-center">Quantity</th>
                    <th className="px-6 py-4 font-medium text-right">Unit Price</th>
                    <th className="px-6 py-4 font-medium text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  <tr className="hover:bg-black/[0.01]">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-black/5 rounded"></div>
                      <span className="font-serif text-brand-maroon">Bosphorus Embroidered Abaya</span>
                    </td>
                    <td className="px-6 py-4 text-center text-brand-text-light">ABA-001</td>
                    <td className="px-6 py-4 text-center">Size M</td>
                    <td className="px-6 py-4 text-center">1</td>
                    <td className="px-6 py-4 text-right">Rs. 1,290</td>
                    <td className="px-6 py-4 text-right font-medium text-brand-gold">Rs. 1,290</td>
                  </tr>
                  <tr className="hover:bg-black/[0.01]">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-black/5 rounded"></div>
                      <span className="font-serif text-brand-maroon">Hagia Sofia Velvet Abaya</span>
                    </td>
                    <td className="px-6 py-4 text-center text-brand-text-light">ABA-003</td>
                    <td className="px-6 py-4 text-center">Size L</td>
                    <td className="px-6 py-4 text-center">1</td>
                    <td className="px-6 py-4 text-right">Rs. 1,290</td>
                    <td className="px-6 py-4 text-right font-medium text-brand-gold">Rs. 1,290</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-brand-text-light">Method:</span> <span className="font-medium text-brand-text">Cash on Delivery (COD)</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Status:</span> <Badge variant="success">Paid</Badge></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Transaction ID:</span> <span className="font-medium text-brand-text">TXN-78432</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Amount Paid:</span> <span className="font-medium text-brand-gold">Rs. 2,180</span></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-brand-text-light">Courier Partner:</span> <span className="font-medium text-brand-text">TCS Express</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Tracking Number:</span> <span className="font-medium text-brand-text">TCS-98765432</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Delivery Method:</span> <span className="font-medium text-brand-text">Standard Delivery</span></div>
                  <div className="flex justify-between"><span className="text-brand-text-light">Estimated Delivery:</span> <span className="font-medium text-brand-text">25 Aug 2025</span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm mb-6 border-b border-black/5 pb-4">
                <div className="flex justify-between"><span className="text-brand-text-light">Subtotal:</span> <span className="font-medium text-brand-text">Rs. 2,580</span></div>
                <div className="flex justify-between"><span className="text-brand-text-light">Discount (HAYAT15):</span> <span className="font-medium text-red-500">-Rs. 387</span></div>
                <div className="flex justify-between"><span className="text-brand-text-light">Shipping:</span> <span className="font-medium text-green-600">Rs. 0 (Free)</span></div>
                <div className="flex justify-between"><span className="text-brand-text-light">Tax (0%):</span> <span className="font-medium text-brand-text">Rs. 0</span></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-brand-maroon text-lg">Grand Total:</span>
                <span className="font-bold text-brand-gold text-2xl">Rs. 2,180</span>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-black/5 shadow-sm">
            <div className="flex gap-3">
              <button className="bg-brand-maroon text-brand-gold px-4 py-2 rounded text-xs font-bold uppercase hover:bg-brand-maroon/90 transition-colors">Update Status</button>
              <button className="border border-black/10 px-4 py-2 rounded text-xs font-bold uppercase hover:bg-black/5 transition-colors">Assign Courier</button>
              <button className="border border-black/10 px-4 py-2 rounded text-xs font-bold uppercase hover:bg-black/5 transition-colors">Add Tracking</button>
              <button className="border border-red-200 text-red-600 px-4 py-2 rounded text-xs font-bold uppercase hover:bg-red-50 transition-colors">Cancel Order</button>
            </div>
            <button className="text-xs font-bold text-brand-gold hover:underline uppercase">+ Add Admin Note</button>
          </div>
        </div>
      )}

      {activeTab === 'status' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Status Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between relative max-w-4xl mx-auto py-8">
                {/* Connecting lines */}
                <div className="absolute left-[5%] right-[5%] top-[45px] h-0.5 bg-gray-200 -z-10"></div>
                <div className="absolute left-[5%] right-[35%] top-[45px] h-0.5 bg-green-500 -z-10"></div>

                {TIMELINE.map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 relative bg-white px-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm border-2 ${step.active ? 'border-transparent ' + step.color : 'border-gray-200 text-gray-300 bg-white'}`}>
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <div className={`text-xs font-bold ${step.active ? 'text-brand-text' : 'text-gray-400'}`}>{step.status}</div>
                      <div className="text-[9px] text-brand-text-light">{step.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-black/5">
                <div className="text-xs text-brand-text-light font-bold uppercase tracking-widest mb-4">Exception / System Statuses</div>
                <div className="flex gap-2">
                  <Badge variant="error">Cancelled</Badge>
                  <Badge variant="warning">Returned</Badge>
                  <Badge variant="info">Refund Requested</Badge>
                  <Badge variant="neutral">Refunded</Badge>
                  <Badge variant="neutral">Failed</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Modify Order State</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-black/5">
                    <span className="text-sm text-brand-text-light">Current Status:</span>
                    <Badge variant="info">Shipped</Badge>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-text mb-2">New Status</label>
                    <select className="w-full border border-black/10 rounded-md p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon bg-white appearance-none">
                      <option>🚚 Out for Delivery</option>
                      <option>Delivered</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-text mb-2">Admin Internal Note</label>
                    <textarea 
                      className="w-full border border-black/10 rounded-md p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon bg-[#FDFBF7]"
                      rows={4}
                      defaultValue="Courier has picked up the abaya consignment and is headed to DHA Phase 5 hub. Expected delivery by evening."
                    ></textarea>
                  </div>
                  <div className="flex justify-end gap-3 pt-2">
                    <button className="border border-black/10 bg-white px-6 py-2.5 rounded text-xs font-bold uppercase hover:bg-black/5 transition-colors">Cancel</button>
                    <button className="bg-brand-maroon text-brand-gold px-6 py-2.5 rounded text-xs font-bold uppercase hover:bg-brand-maroon/90 transition-colors">Update Status</button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="relative pl-4 border-l-2 border-brand-gold pb-1">
                    <div className="absolute w-2.5 h-2.5 bg-brand-gold rounded-full -left-[6px] top-1"></div>
                    <div className="text-xs font-bold text-brand-text">Package Shipped via TCS</div>
                    <div className="text-[10px] text-brand-text-light mt-0.5">By Admin · 20 Aug 2025, 02:32 PM</div>
                  </div>
                  <div className="relative pl-4 border-l-2 border-green-500 pb-1">
                    <div className="absolute w-2.5 h-2.5 bg-green-500 rounded-full -left-[6px] top-1"></div>
                    <div className="text-xs font-bold text-brand-text">Packed at Main Warehouse</div>
                    <div className="text-[10px] text-brand-text-light mt-0.5">By System · 18 Aug 2025, 09:20 AM</div>
                  </div>
                  <div className="relative pl-4 border-l-2 border-green-500">
                    <div className="absolute w-2.5 h-2.5 bg-green-500 rounded-full -left-[6px] top-1"></div>
                    <div className="text-xs font-bold text-brand-text">Confirmed & Verified</div>
                    <div className="text-[10px] text-brand-text-light mt-0.5">By Admin · 14 Aug 2025, 11:30 AM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Courier & Fulfillment Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#FDFBF7] p-4 rounded-xl border border-black/5">
                  <div className="text-xs font-bold text-brand-maroon mb-3">🚚 Assign Courier</div>
                  <select className="w-full border border-black/10 rounded-md p-2 text-sm bg-white mb-3">
                    <option>TCS Express</option>
                  </select>
                  <button className="w-full bg-brand-maroon text-white py-2 rounded text-xs font-bold transition-colors">Assign Partner</button>
                </div>
                
                <div className="bg-[#FDFBF7] p-4 rounded-xl border border-black/5">
                  <div className="text-xs font-bold text-brand-maroon mb-3">🔗 Tracking Number</div>
                  <input type="text" defaultValue="TCS-98765432" className="w-full border border-black/10 rounded-md p-2 text-sm bg-white mb-3" />
                  <button className="w-full bg-brand-maroon text-white py-2 rounded text-xs font-bold transition-colors">Save Tracking</button>
                </div>

                <div className="bg-[#FDFBF7] p-4 rounded-xl border border-black/5">
                  <div className="text-xs font-bold text-brand-maroon mb-3">💳 Process Refund</div>
                  <div className="flex gap-2 mb-3">
                    <input type="text" defaultValue="Rs. 2,180" className="w-full border border-black/10 rounded-md p-2 text-sm bg-white" />
                    <input type="text" placeholder="Reason" className="w-full border border-black/10 rounded-md p-2 text-sm bg-white" />
                  </div>
                  <button className="w-full bg-red-600 text-white py-2 rounded text-xs font-bold transition-colors">Trigger Refund</button>
                </div>

                <div className="bg-[#FDFBF7] p-4 rounded-xl border border-black/5">
                  <div className="text-xs font-bold text-brand-maroon mb-3">✅ Return Verification</div>
                  <p className="text-[10px] text-brand-text-light mb-3">Approve Abaya return consignment verification?</p>
                  <div className="flex gap-2">
                    <button className="w-full border border-black/10 bg-white py-2 rounded text-xs font-bold transition-colors text-brand-text">Reject</button>
                    <button className="w-full bg-green-600 text-white py-2 rounded text-xs font-bold transition-colors">Approve</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
