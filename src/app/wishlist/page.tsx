'use client';

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ui/ProductCard";

export default function WishlistPage() {
  const { items, totalItems } = useWishlist();

  return (
    <div className="w-full bg-brand-bg min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-serif text-brand-maroon mb-2">My Wishlist</h1>
        <p className="text-sm text-brand-text-light mb-10">
          {totalItems} {totalItems === 1 ? 'item' : 'items'} saved
        </p>

        {items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-black/5 p-16 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-brand-maroon/20 mb-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            <h2 className="text-2xl font-serif text-brand-maroon mb-2">Your wishlist is empty</h2>
            <p className="text-brand-text-light mb-8 max-w-md mx-auto">
              Save items you love by clicking the heart icon on any product. They'll be waiting for you here.
            </p>
            <Link 
              href="/collections/all" 
              className="inline-block bg-brand-maroon text-brand-gold px-8 py-3 rounded text-sm font-bold tracking-widest uppercase hover:bg-brand-maroon/90 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map(item => (
              <ProductCard 
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                originalPrice={item.originalPrice}
                rating={5} // Mock default for wishlist view
                reviewsCount={12} // Mock default
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
