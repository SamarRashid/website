'use client';

import Link from "next/link";
import { Badge } from "./Badge";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isNew?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewsCount,
  image,
  isNew,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the product page
    addToCart({
      productId: id,
      name,
      price,
      image,
      size: 'M', // default size
      color: 'Default',
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist({
      id,
      name,
      price,
      image,
      originalPrice,
    });
  };

  const isFavorited = isInWishlist(id);

  return (
    <div className="group flex flex-col bg-brand-surface rounded-sm overflow-hidden border border-black/5 hover:shadow-lg transition-all relative">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {isNew && (
          <Badge variant="info" className="!bg-brand-maroon text-brand-gold text-[10px] uppercase tracking-wider font-bold">
            New Arrival
          </Badge>
        )}
        {originalPrice && (
          <Badge variant="error" className="text-[10px] uppercase tracking-wider font-bold">
            Sale
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={handleToggleWishlist}
        className="absolute top-3 right-3 z-10 p-1.5 bg-white/70 backdrop-blur-sm hover:bg-brand-maroon hover:text-brand-gold rounded-full text-brand-text transition-colors shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </button>

      {/* Image Area */}
      <Link href={`/products/${id}`} className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5EFE6] flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply" 
          />
        ) : (
          <div className="w-full h-full bg-[#F5EFE6] flex items-center justify-center text-brand-text-light/30">
            Image Placeholder
          </div>
        )}
      </Link>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow bg-white">
        <Link href={`/products/${id}`}>
          <h3 className="text-xs font-bold text-brand-text line-clamp-1 hover:text-brand-maroon transition-colors mb-1">
            {name}
          </h3>
        </Link>
        <p className="text-[10px] text-brand-text-light mb-3 line-clamp-1">Premium Modest Wear - Imported Fabric</p>

        {/* Color Swatches */}
        <div className="flex gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-[#2C3E50] border border-black/10 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-[#8B0000] border border-black/10 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-[#D4AF37] border border-black/10 cursor-pointer"></div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-bold text-brand-maroon">Rs. {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-[10px] text-brand-text-light line-through">Rs. {originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          <div className="flex text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={i < rating ? "text-brand-gold" : "text-black/10"}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ))}
          </div>
          <span className="text-[10px] text-brand-text-light">({reviewsCount})</span>
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full bg-brand-maroon text-white hover:bg-brand-maroon/90 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors mt-auto flex items-center justify-center gap-2"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
