'use client';

import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { useState, use } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

import { PRODUCTS } from "@/data/mockProducts";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { addToCart } = useCart();
  const { t } = useLanguage();
  
  // Find the product from the mock database, or fallback if not found
  const foundProduct = PRODUCTS.find(p => p.id === resolvedParams.id);
  
  const product = {
    id: resolvedParams.id,
    name: foundProduct ? foundProduct.name : "Exclusive Collection Item",
    price: foundProduct ? foundProduct.price : 1290,
    originalPrice: foundProduct?.originalPrice || undefined,
    rating: foundProduct ? foundProduct.rating : 5,
    reviewsCount: foundProduct ? foundProduct.reviewsCount : 316,
    description: "Hand-embroidered details on premium fabric. This elegant piece features timeless design — perfect for any formal or semi-formal occasion.",
    features: [
      "Premium imported fabric",
      "Hand-embroidered details",
      "Elegant modest fit",
      "Timeless design"
    ],
    colors: [
      { name: "Midnight Navy", hex: "#1A237E" },
      { name: "Emerald Green", hex: "#1B5E20" },
      { name: "Maroon", hex: "#591F35" }
    ],
    sizes: foundProduct?.sizes || ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      foundProduct?.image || "/images/Image (Bosphorus Embroidered Abaya).png",
      "/images/Image (Sultanahmet Evening Abaya).png",
      "/images/Image (Hagia Sofia Velvet Abaya).png",
      "/images/Image (Iznik Floral Open Abaya).png"
    ]
  };

  // Filter out the current product from related products
  const RELATED_PRODUCTS = PRODUCTS
    .filter(p => p.id !== resolvedParams.id)
    .slice(0, 4)
    .map(p => ({ ...p, image: p.image }));

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default M
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Zoom States
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor.name,
    }, quantity);
    
    // Provide some visual feedback (optional)
    alert("Added to bag!");
  };

  return (
    <div className="bg-brand-bg w-full">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-brand-text-light uppercase tracking-wider font-bold">
        <Link href="/" className="hover:text-brand-maroon transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections/abayas" className="hover:text-brand-maroon transition-colors">Abayas</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-maroon">{product.name}</span>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-4 flex flex-col lg:flex-row gap-12">
        {/* Images */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible order-2 md:order-1 w-full md:w-24 flex-shrink-0">
            {product.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(i)}
                className={`w-20 h-24 md:w-24 md:h-32 flex-shrink-0 border-2 rounded overflow-hidden ${i === activeImage ? 'border-brand-maroon' : 'border-transparent hover:border-black/20'} transition-all`}
              >
                <img src={img} alt={`${product.name} thumbnail ${i+1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div 
            className={`w-full flex-grow aspect-[3/4] md:aspect-auto md:h-[800px] rounded-lg overflow-hidden order-1 md:order-2 bg-black/5 relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onClick={(e) => {
              if (!isZoomed) handleMouseMove(e);
              setIsZoomed(!isZoomed);
            }}
          >
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className={`w-full h-full object-cover transition-transform duration-200 ease-out ${isZoomed ? 'scale-[2]' : 'scale-100'}`} 
              style={{ transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }}
            />
          </div>
        </div>

        {/* Details */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="border-b border-black/5 pb-8 mb-8">
            <h1 className="text-4xl font-serif text-brand-maroon mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center space-x-1">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={i < product.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-text-light ml-2">({product.reviewsCount} {t('reviews')})</span>
              </div>
            </div>

            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-serif text-brand-maroon">Rs. {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-lg text-brand-text-light line-through mb-1">Rs. {product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <p className="text-sm text-brand-text-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-8">
              <div className="text-xs uppercase tracking-widest font-bold text-brand-text mb-3">{t('color')}: <span className="text-brand-text-light">{selectedColor.name}</span></div>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor.name === color.name ? 'border-brand-maroon ring-2 ring-brand-maroon/20' : 'border-transparent'} transition-all`} 
                    style={{ backgroundColor: color.hex }} 
                    title={color.name}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <div className="text-xs uppercase tracking-widest font-bold text-brand-text">{t('size')}</div>
                <button className="text-xs font-bold text-brand-maroon hover:underline">{t('size_guide')}</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, i) => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded border ${selectedSize === size ? 'border-brand-maroon text-brand-maroon bg-brand-maroon/5' : 'border-black/10 text-brand-text hover:border-brand-maroon'} text-sm font-medium transition-colors flex items-center justify-center cursor-pointer`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-black/10 rounded h-14">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 text-lg hover:text-brand-maroon transition-colors">-</button>
                <span className="font-bold w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-5 text-lg hover:text-brand-maroon transition-colors">+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-gold text-brand-maroon h-14 rounded text-sm font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                {t('add_to_bag')}
              </button>
              <button className="h-14 px-6 border border-brand-maroon text-brand-maroon rounded hover:bg-brand-maroon hover:text-brand-gold transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            <details className="group border-b border-black/5 pb-4" open>
              <summary className="flex justify-between items-center font-serif text-lg text-brand-maroon cursor-pointer list-none">
                {t('product_details_tab1')}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </summary>
              <div className="text-sm text-brand-text-light mt-4 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </details>
            <details className="group border-b border-black/5 pb-4">
              <summary className="flex justify-between items-center font-serif text-lg text-brand-maroon cursor-pointer list-none">
                {t('product_details_tab2')}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </summary>
              <div className="text-sm text-brand-text-light mt-4 leading-relaxed">
                <p>Free standard shipping on orders over Rs. 5000. Orders are processed within 1-2 business days.</p>
                <p className="mt-2">We accept returns within 14 days of delivery. Items must be unworn with tags attached.</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-brand-maroon">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
