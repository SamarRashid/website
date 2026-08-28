import Link from "next/link";
import { Badge } from "./Badge";

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
      <button className="absolute top-3 right-3 z-10 p-1.5 bg-white/70 backdrop-blur-sm hover:bg-brand-maroon hover:text-brand-gold rounded-full text-brand-text transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </button>

      {/* Image Area */}
      <Link href={`/products/${id}`} className="relative aspect-[3/4] w-full overflow-hidden bg-black/5 flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        ) : (
          <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center text-brand-text-light/30">
            Image Placeholder
          </div>
        )}
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent flex justify-center">
          <button className="bg-brand-gold text-brand-maroon hover:bg-brand-gold-light w-full py-2.5 rounded text-xs font-bold flex items-center justify-center gap-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Bag
          </button>
        </div>
      </Link>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={i < rating ? "text-brand-gold" : "text-black/10"}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ))}
          </div>
          <span className="text-[10px] text-brand-text-light">({reviewsCount})</span>
        </div>

        <Link href={`/products/${id}`}>
          <h3 className="text-sm font-medium text-brand-text line-clamp-1 hover:text-brand-maroon transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-bold text-brand-maroon">Rs. {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-xs text-brand-text-light line-through">Rs. {originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
