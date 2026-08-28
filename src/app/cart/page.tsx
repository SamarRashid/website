'use client';

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

  const shipping = subtotal > 5000 ? 0 : (totalItems > 0 ? 250 : 0);
  const tax = subtotal * 0.05; // 5% tax mockup
  const total = subtotal + shipping + tax;

  return (
    <div className="w-full bg-brand-bg min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-serif text-brand-maroon mb-2">Shopping Bag</h1>
        <p className="text-sm text-brand-text-light mb-10">{totalItems} items in your bag.</p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-black/5 text-xs font-bold uppercase tracking-widest text-brand-text-light">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              <div className="divide-y divide-black/5">
                {items.length === 0 ? (
                  <div className="p-12 text-center text-brand-text-light">
                    <p className="mb-4">Your shopping bag is empty.</p>
                    <Link href="/collections/all" className="text-brand-maroon font-bold underline hover:text-brand-gold transition-colors">
                      Continue Shopping
                    </Link>
                  </div>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center relative">
                      <div className="col-span-1 md:col-span-6 flex gap-4">
                        <div className="w-20 h-24 rounded overflow-hidden flex-shrink-0 bg-black/5">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <Link href={`/products/${item.productId}`} className="font-serif text-lg text-brand-maroon hover:underline line-clamp-1">{item.name}</Link>
                          {item.size && <div className="text-xs text-brand-text-light mt-1">Size: {item.size}</div>}
                          {item.color && <div className="text-xs text-brand-text-light">Color: {item.color}</div>}
                        </div>
                      </div>
                      
                      <div className="col-span-1 md:col-span-2 text-center text-sm font-medium">
                        Rs. {item.price.toLocaleString()}
                      </div>
                      
                      <div className="col-span-1 md:col-span-2 flex justify-center">
                        <div className="flex items-center border border-black/10 rounded">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:text-brand-maroon transition-colors"
                          >
                            -
                          </button>
                          <span className="font-bold w-4 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:text-brand-maroon transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-1 md:col-span-2 text-right font-serif text-lg text-brand-maroon">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-6 right-6 md:static md:col-span-12 text-xs text-red-500 hover:underline md:hidden"
                      >
                        Remove
                      </button>
                      
                      {/* Desktop Remove Button (optional, can just reuse the same absolute if preferred, but adding a desktop 'X' is nice) */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm border border-black/5 p-6 sticky top-24">
              <h2 className="text-xl font-serif text-brand-maroon mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6 border-b border-black/5 pb-6">
                <div className="flex justify-between">
                  <span className="text-brand-text-light">Subtotal</span>
                  <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-light">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? (totalItems > 0 ? "Free" : "---") : `Rs. ${shipping.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-light">Estimated Tax</span>
                  <span className="font-medium">Rs. {tax.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-8">
                <span className="font-bold text-brand-text">Total</span>
                <span className="text-3xl font-serif text-brand-maroon">Rs. {total.toLocaleString()}</span>
              </div>

              <Link 
                href={totalItems > 0 ? "/checkout" : "#"} 
                className={`w-full py-3 rounded text-sm font-bold tracking-widest uppercase transition-colors flex items-center justify-center ${totalItems > 0 ? 'bg-brand-gold text-brand-maroon hover:bg-brand-gold-light' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                onClick={(e) => { if (totalItems === 0) e.preventDefault(); }}
              >
                Proceed to Checkout
              </Link>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-brand-text-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Secure Checkout Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
