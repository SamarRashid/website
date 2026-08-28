export default function ProductDetailPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Product Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 relative">
             <img src="/images/abaya_embroidered.jpg" alt="Product Image" className="object-cover w-full h-full" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-gray-200 rounded-md cursor-pointer hover:border-2 hover:border-[var(--color-primary)] flex items-center justify-center text-xs text-gray-400">
                Thumb {i}
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <div className="mb-2">
            <span className="text-sm text-gray-500 uppercase tracking-widest">Abayas</span>
          </div>
          <h1 className="text-4xl font-extrabold text-[var(--color-primary)] mb-4 logo-tracking">Bosphorus Embroidered Abaya</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={i < 4 ? "text-yellow-400" : "text-gray-300"}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">12 Reviews</span>
          </div>

          <div className="text-3xl price-bold mb-6">Rs. 1,290</div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Premium quality abaya with rich embroidery. Perfect for special occasions and everyday wear. Features an elegant cut and comfortable fabric.
          </p>

          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Color</h3>
            <div className="flex space-x-3">
              <button className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-[var(--color-primary)]"></button>
              <button className="w-8 h-8 rounded-full bg-[#511F32]"></button>
              <button className="w-8 h-8 rounded-full bg-[#DAB774]"></button>
            </div>
          </div>

          <div className="mb-8">
             <div className="flex justify-between items-center mb-3">
               <h3 className="font-semibold">Size</h3>
               <button className="text-sm text-[var(--color-primary)] underline">Size Guide</button>
             </div>
             <div className="flex flex-wrap gap-3">
               {['S', 'M', 'L', 'XL'].map(size => (
                 <button key={size} className="w-12 h-10 border rounded hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] flex items-center justify-center font-medium">
                   {size}
                 </button>
               ))}
             </div>
          </div>

          <div className="flex space-x-4 mb-8">
            <div className="flex border rounded h-12 w-32 items-center justify-between px-4">
              <button className="text-gray-500 hover:text-black">-</button>
              <span className="font-medium">1</span>
              <button className="text-gray-500 hover:text-black">+</button>
            </div>
            <button className="flex-grow bg-[var(--color-primary)] text-[var(--color-secondary)] font-bold uppercase tracking-widest rounded hover:bg-opacity-90 flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span>Add to Bag</span>
            </button>
            <button className="h-12 w-12 border rounded flex items-center justify-center hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
          </div>
          
          <button className="w-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] py-3 font-bold uppercase tracking-widest rounded hover:bg-[var(--color-primary)] hover:text-white transition-colors">
            Buy It Now
          </button>
        </div>
      </div>
      
      {/* Description / Reviews Tabs Placeholder */}
      <div className="mt-16 border-t pt-8">
        <div className="flex space-x-8 mb-8 border-b">
          <button className="pb-4 font-bold border-b-2 border-[var(--color-primary)] text-[var(--color-primary)] uppercase tracking-wider">Description</button>
          <button className="pb-4 font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900">Reviews (12)</button>
          <button className="pb-4 font-medium text-gray-500 uppercase tracking-wider hover:text-gray-900">Shipping</button>
        </div>
        <div className="prose max-w-none text-gray-600">
          <p>
            Experience unmatched elegance with our Bosphorus Embroidered Abaya. Crafted from premium nidha fabric, this piece ensures breathability and comfort without compromising on style. The intricate embroidery along the sleeves and hemline adds a touch of sophistication, making it perfect for both formal gatherings and casual outings. Includes a matching chiffon hijab.
          </p>
          <ul className="mt-4 space-y-2">
            <li>Fabric: Premium Nidha</li>
            <li>Embroidery: Hand-stitched detailing</li>
            <li>Includes matching hijab</li>
            <li>Care: Dry clean recommended</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
