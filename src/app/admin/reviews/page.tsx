'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useState } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Fatima A.",
    rating: 5,
    product: "Bosphorus Embroidered Abaya",
    date: "21 Aug 2026",
    text: "Absolutely stunning quality! The embroidery is so intricate and it fits beautifully. Will definitely order again.",
    status: "Pending"
  },
  {
    id: 2,
    name: "Sara M.",
    rating: 4,
    product: "Tulip Garden Maxi Dress",
    date: "20 Aug 2026",
    text: "Lovely dress, colour is exactly as shown. Slightly longer than expected but overall great quality.",
    status: "Pending"
  },
  {
    id: 3,
    name: "Nadia R.",
    rating: 5,
    product: "Champagne Chiffon Shalwar Kameez",
    date: "19 Aug 2026",
    text: "Perfect for Eid! I got so many compliments. The fabric is so soft and the work is beautiful.",
    status: "Approved"
  },
  {
    id: 4,
    name: "Hira T.",
    rating: 2,
    product: "Ottoman Court Dress",
    date: "18 Aug 2026",
    text: "The colour was different from the photo. Disappointed with the quality for this price.",
    status: "Rejected"
  },
  {
    id: 5,
    name: "Aisha K.",
    rating: 5,
    product: "Rose Pink Shalwar Kameez",
    date: "17 Aug 2026",
    text: "Love love love! Exactly what I was looking for. Shipping was super fast too.",
    status: "Pending"
  }
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Reviews Approval</h1>
        
        <div className="flex bg-white rounded-full p-1 border border-black/5 shadow-sm">
          {['All', 'Pending', 'Approved', 'Rejected'].map(tab => (
            <button 
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-colors ${filter === tab ? 'bg-brand-maroon text-brand-gold' : 'text-brand-text hover:bg-black/5'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {REVIEWS.filter(r => filter === 'All' || r.status === filter).map(review => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-maroon text-brand-gold flex items-center justify-center font-serif text-sm font-bold flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-sm text-brand-text">{review.name}</span>
                        <div className="flex text-brand-gold text-[10px]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                          ))}
                        </div>
                      </div>
                      <div className="text-[10px] text-brand-text-light mt-0.5">
                        {review.product} · {review.date}
                      </div>
                    </div>
                    
                    <Badge variant={review.status === 'Approved' ? 'success' : review.status === 'Rejected' ? 'error' : 'neutral'}>
                      {review.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-brand-text mb-4 mt-2">
                    {review.text}
                  </p>
                  
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 border border-green-200 text-green-700 bg-green-50 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-green-100 transition-colors">
                      ✓ Approve
                    </button>
                    <button className="flex items-center gap-1 border border-red-200 text-red-600 bg-red-50 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-red-100 transition-colors">
                      ✕ Reject
                    </button>
                    <button className="border border-black/10 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-black/5 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
