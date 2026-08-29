'use client';

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const MY_ORDERS = [
  { 
    id: "HAY-28451", 
    date: "20 Aug 2026", 
    items: 2, 
    total: "Rs. 2,180", 
    status: "Shipped",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=200&auto=format&fit=crop"
  },
  { 
    id: "HAY-19832", 
    date: "15 Jul 2026", 
    items: 1, 
    total: "Rs. 3,400", 
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?q=80&w=200&auto=format&fit=crop"
  },
  { 
    id: "HAY-05671", 
    date: "10 May 2026", 
    items: 3, 
    total: "Rs. 7,850", 
    status: "Delivered",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=200&auto=format&fit=crop"
  }
];

export default function MyOrdersPage() {
  return (
    <div className="w-full bg-brand-bg min-h-screen py-10">
      <div className="mx-auto max-w-4xl px-6">
        
        <div className="flex justify-between items-end mb-8 border-b border-black/5 pb-4">
          <div>
            <h1 className="text-3xl font-serif text-brand-maroon">My Orders</h1>
            <p className="text-xs text-brand-text-light mt-1">View and track your past orders.</p>
          </div>
          <Link href="/collections/all" className="text-[10px] uppercase font-bold tracking-widest text-brand-gold hover:underline">
            Continue Shopping
          </Link>
        </div>

        <div className="space-y-6">
          {MY_ORDERS.map((order) => (
            <div key={order.id} className="bg-white rounded-xl border border-black/5 shadow-sm overflow-hidden">
              {/* Order Header */}
              <div className="bg-[#FEFDF9] border-b border-black/5 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs">
                  <div>
                    <span className="text-brand-text-light uppercase tracking-wider font-bold text-[9px] block mb-0.5">Order Placed</span>
                    <span className="font-medium">{order.date}</span>
                  </div>
                  <div>
                    <span className="text-brand-text-light uppercase tracking-wider font-bold text-[9px] block mb-0.5">Total</span>
                    <span className="font-medium">{order.total}</span>
                  </div>
                  <div>
                    <span className="text-brand-text-light uppercase tracking-wider font-bold text-[9px] block mb-0.5">Order #</span>
                    <span className="font-medium">{order.id}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={order.status === 'Delivered' ? 'success' : order.status === 'Shipped' ? 'info' : 'neutral'}>
                    {order.status}
                  </Badge>
                </div>
              </div>

              {/* Order Body */}
              <div className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-20 h-24 rounded border border-black/10 overflow-hidden flex-shrink-0">
                    <img src={order.image} alt="Order item" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-maroon mb-1">
                      {order.items} {order.items === 1 ? 'Item' : 'Items'} in this order
                    </p>
                    <p className="text-xs text-brand-text-light">
                      Includes Bosphorus Abaya and more...
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <button className="bg-brand-maroon text-brand-gold px-6 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-brand-maroon/90 transition-colors w-full text-center">
                    Track Order
                  </button>
                  <button className="border border-black/10 px-6 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-black/5 transition-colors w-full text-center">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/account" className="inline-block border border-black/10 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors">
            Back to Account
          </Link>
        </div>

      </div>
    </div>
  );
}
