import Link from "next/link";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] uppercase tracking-wider mb-8">Shopping Cart (2 Items)</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="hidden md:grid grid-cols-6 gap-4 pb-4 border-b text-sm font-semibold text-gray-500 uppercase tracking-widest">
            <div className="col-span-3">Product</div>
            <div className="col-span-1 text-center">Price</div>
            <div className="col-span-1 text-center">Quantity</div>
            <div className="col-span-1 text-right">Total</div>
          </div>
          
          {/* Item 1 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-6 border-b items-center">
            <div className="col-span-3 flex gap-4">
              <div className="w-24 h-32 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                <img src="/images/abaya_embroidered.jpg" alt="Product" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <Link href="/product/1" className="font-bold text-lg hover:text-[var(--color-primary)]">Bosphorus Embroidered Abaya</Link>
                <p className="text-sm text-gray-500 mt-1">Size: M</p>
                <button className="text-sm text-red-500 hover:underline text-left mt-2 w-fit">Remove</button>
              </div>
            </div>
            <div className="col-span-1 text-center font-medium md:block hidden">Rs. 1,290</div>
            <div className="col-span-1 flex justify-center">
              <div className="flex border rounded h-10 w-24 items-center justify-between px-2">
                <button className="text-gray-500 hover:text-black">-</button>
                <span className="font-medium text-sm">1</span>
                <button className="text-gray-500 hover:text-black">+</button>
              </div>
            </div>
            <div className="col-span-1 text-right font-bold text-lg">Rs. 1,290</div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-6 border-b items-center">
            <div className="col-span-3 flex gap-4">
              <div className="w-24 h-32 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                <img src="/images/abaya_velvet.jpg" alt="Product" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <Link href="/product/2" className="font-bold text-lg hover:text-[var(--color-primary)]">Hagia Sofia Velvet Abaya</Link>
                <p className="text-sm text-gray-500 mt-1">Size: L</p>
                <button className="text-sm text-red-500 hover:underline text-left mt-2 w-fit">Remove</button>
              </div>
            </div>
            <div className="col-span-1 text-center font-medium md:block hidden">Rs. 1,590</div>
            <div className="col-span-1 flex justify-center">
              <div className="flex border rounded h-10 w-24 items-center justify-between px-2">
                <button className="text-gray-500 hover:text-black">-</button>
                <span className="font-medium text-sm">1</span>
                <button className="text-gray-500 hover:text-black">+</button>
              </div>
            </div>
            <div className="col-span-1 text-right font-bold text-lg">Rs. 1,590</div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h2 className="text-xl font-bold text-[var(--color-primary)] uppercase tracking-widest mb-6">Order Summary</h2>
            
            <div className="flex justify-between mb-4 text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">Rs. 2,880</span>
            </div>
            <div className="flex justify-between mb-4 text-sm">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium text-green-600">Rs. 0</span>
            </div>
            <div className="flex justify-between mb-6 text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">Calculated at checkout</span>
            </div>
            
            <div className="border-t pt-4 mb-6 flex justify-between">
              <span className="font-bold text-lg">Grand Total</span>
              <span className="font-bold text-lg">Rs. 2,880</span>
            </div>

            <Link href="/checkout" className="block w-full bg-[var(--color-primary)] text-center text-[var(--color-secondary)] py-4 rounded font-bold uppercase tracking-widest hover:bg-opacity-90 transition-opacity mb-4">
              Proceed to Checkout
            </Link>
            <Link href="/shop" className="block w-full border border-[var(--color-primary)] text-center text-[var(--color-primary)] py-3 rounded font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
