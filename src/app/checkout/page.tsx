import Link from "next/link";

export default function CheckoutPage() {
  const cartItems = [
    {
      id: "1",
      product: "Bosphorus Embroidered Abaya",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=200&auto=format&fit=crop",
      size: "M",
      price: 1290,
      quantity: 1,
    }
  ];

  const subtotal = 1290;
  const shipping = 250;
  const total = subtotal + shipping;

  return (
    <div className="w-full bg-[#FDFBF7] min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-10">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <Link href="/" className="inline-flex flex-col text-brand-gold">
            <span className="text-3xl font-serif tracking-wide leading-none">E-COMMERCE</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-brand-gold/80 mt-1 uppercase leading-none">Modest Fashion Store</span>
          </Link>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 max-w-full overflow-hidden">
          
          {/* Checkout Form */}
          <div className="w-full lg:flex-1 lg:max-w-[60%]">
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-serif text-brand-maroon">Contact</h2>
                <Link href="/login" className="text-xs text-brand-maroon underline">Log in</Link>
              </div>
              <input type="email" placeholder="Email or mobile phone number" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon" />
              <label className="flex items-center gap-2 mt-3 text-xs text-brand-text">
                <input type="checkbox" className="accent-brand-maroon" defaultChecked />
                Email me with news and offers
              </label>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-serif text-brand-maroon mb-4">Delivery</h2>
              <div className="space-y-4">
                <select className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon bg-white">
                  <option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>Saudi Arabia</option>
                  <option>United Kingdom</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon" />
                  <input type="text" placeholder="Last name" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon" />
                </div>
                <input type="text" placeholder="Address" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon" />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="City" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon" />
                  <input type="text" placeholder="Postal code" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon" />
                </div>
                <input type="tel" placeholder="Phone" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon" />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-serif text-brand-maroon mb-4">Shipping method</h2>
              <div className="border border-brand-maroon bg-brand-maroon/5 rounded p-4 flex justify-between items-center">
                <label className="flex items-center gap-3 text-sm font-medium text-brand-maroon">
                  <input type="radio" name="shipping" className="accent-brand-maroon w-4 h-4" defaultChecked />
                  Standard Shipping
                </label>
                <span className="font-bold text-sm text-brand-maroon">Rs. 250.00</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-serif text-brand-maroon mb-1">Payment</h2>
              <p className="text-xs text-brand-text-light mb-4">All transactions are secure and encrypted.</p>
              
              <div className="border border-black/20 rounded overflow-hidden divide-y divide-black/20">
                <div className="p-4 bg-brand-bg/50">
                  <label className="flex items-center gap-3 text-sm font-medium text-brand-text">
                    <input type="radio" name="payment" className="accent-brand-maroon w-4 h-4" defaultChecked />
                    Credit Card
                  </label>
                  <div className="mt-4 space-y-3">
                    <input type="text" placeholder="Card number" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon bg-white" />
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="Expiration date (MM / YY)" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon bg-white" />
                      <input type="text" placeholder="Security code" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon bg-white" />
                    </div>
                    <input type="text" placeholder="Name on card" className="w-full border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon bg-white" />
                  </div>
                </div>

                <div className="p-4">
                  <label className="flex items-center gap-3 text-sm font-medium text-brand-text">
                    <input type="radio" name="payment" className="accent-brand-maroon w-4 h-4" />
                    Cash on Delivery (COD)
                  </label>
                </div>

                <div className="p-4">
                  <label className="flex items-center gap-3 text-sm font-medium text-brand-text">
                    <input type="radio" name="payment" className="accent-brand-maroon w-4 h-4" />
                    JazzCash / EasyPaisa
                  </label>
                </div>
              </div>
            </div>

            <button className="w-full bg-brand-maroon text-brand-gold py-4 rounded text-sm font-bold tracking-widest uppercase hover:bg-brand-maroon/90 transition-colors">
              Pay Now
            </button>

            <div className="mt-8 pt-8 border-t border-black/10 flex gap-4 text-[10px] text-brand-text-light justify-center lg:justify-start">
              <Link href="#" className="hover:underline">Refund policy</Link>
              <Link href="#" className="hover:underline">Shipping policy</Link>
              <Link href="#" className="hover:underline">Privacy policy</Link>
              <Link href="#" className="hover:underline">Terms of service</Link>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[40%] lg:flex-shrink-0 relative">
            <div className="lg:sticky lg:top-10">
              <div className="bg-brand-bg border border-black/5 rounded-xl p-6 lg:p-8">
                
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded border border-black/10 overflow-hidden bg-white">
                          <img src={item.image} alt={item.product} className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-black/60 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-serif text-brand-maroon">{item.product}</h4>
                        <div className="text-[10px] text-brand-text-light">{item.size}</div>
                      </div>
                      <div className="text-sm font-medium">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mb-6 border-y border-black/5 py-6">
                  <input type="text" placeholder="Discount code" className="flex-1 border border-black/20 rounded p-3 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon bg-white" />
                  <button className="bg-gray-200 text-gray-500 px-4 py-3 rounded text-sm font-bold transition-colors">Apply</button>
                </div>

                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-brand-text-light">Subtotal</span>
                    <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-text-light">Shipping</span>
                    <span className="font-medium">Rs. {shipping.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-black/5 pt-6">
                  <span className="font-bold text-lg">Total</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-brand-text-light">PKR</span>
                    <span className="text-3xl font-serif text-brand-maroon">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
