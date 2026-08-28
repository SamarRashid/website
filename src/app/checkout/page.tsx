import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] uppercase tracking-wider mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Checkout Forms */}
        <div className="w-full lg:w-2/3">
          {/* Contact Information */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-6 flex items-center justify-between">
              <span>1. Contact Information</span>
              <span className="text-sm font-normal text-gray-500">Already have an account? <Link href="/login" className="text-[var(--color-primary)] underline">Log in</Link></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address *" className="border rounded p-3 w-full focus:outline-none focus:border-[var(--color-primary)]" />
              <input type="tel" placeholder="Phone Number *" className="border rounded p-3 w-full focus:outline-none focus:border-[var(--color-primary)]" />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-6">2. Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name *" className="border rounded p-3 w-full focus:outline-none focus:border-[var(--color-primary)]" />
              <input type="text" placeholder="Last Name *" className="border rounded p-3 w-full focus:outline-none focus:border-[var(--color-primary)]" />
              <input type="text" placeholder="Address *" className="border rounded p-3 w-full md:col-span-2 focus:outline-none focus:border-[var(--color-primary)]" />
              <input type="text" placeholder="City *" className="border rounded p-3 w-full focus:outline-none focus:border-[var(--color-primary)]" />
              <input type="text" placeholder="Postal Code *" className="border rounded p-3 w-full focus:outline-none focus:border-[var(--color-primary)]" />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-6">3. Payment Method</h2>
            <div className="space-y-4">
              <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" className="w-4 h-4 text-[var(--color-primary)]" defaultChecked />
                <span className="ml-3 font-medium">Cash on Delivery (COD)</span>
              </label>
              <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="ml-3 font-medium">Credit / Debit Card</span>
              </label>
              <label className="flex items-center p-4 border rounded cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="ml-3 font-medium">Bank Transfer</span>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg border sticky top-6">
            <h2 className="text-xl font-bold text-[var(--color-primary)] uppercase tracking-widest mb-6">In Your Bag</h2>
            
            <div className="space-y-4 mb-6 border-b pb-6">
              <div className="flex gap-4">
                <div className="w-16 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <img src="/images/abaya_embroidered.jpg" alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-grow justify-center">
                  <span className="font-bold text-sm">Bosphorus Embroidered Abaya</span>
                  <span className="text-xs text-gray-500">Qty: 1 | Size: M</span>
                  <span className="font-medium text-sm mt-1">Rs. 1,290</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <img src="/images/abaya_velvet.jpg" alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-grow justify-center">
                  <span className="font-bold text-sm">Hagia Sofia Velvet Abaya</span>
                  <span className="text-xs text-gray-500">Qty: 1 | Size: L</span>
                  <span className="font-medium text-sm mt-1">Rs. 1,590</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-3 text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">Rs. 2,880</span>
            </div>
            <div className="flex justify-between mb-3 text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Rs. 200</span>
            </div>
            
            <div className="border-t pt-4 mb-6 flex justify-between">
              <span className="font-bold text-lg text-[var(--color-primary)]">Grand Total</span>
              <span className="font-bold text-lg text-[var(--color-primary)]">Rs. 3,080</span>
            </div>

            <button className="w-full bg-[var(--color-primary)] text-center text-[var(--color-secondary)] py-4 rounded font-bold uppercase tracking-widest hover:bg-opacity-90 transition-opacity">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
