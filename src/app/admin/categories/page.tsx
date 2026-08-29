'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const CATEGORIES = [
  {
    id: 1,
    name: "Abaya",
    icon: "👗",
    products: 6,
    status: "Active",
    subCategories: ["Embroidered", "Velvet", "Printed", "Lace", "Everyday", "Formal"]
  },
  {
    id: 2,
    name: "Dress",
    icon: "🌸",
    products: 6,
    status: "Active",
    subCategories: ["Maxi", "Midi", "Casual", "Formal", "Gown", "Printed"]
  },
  {
    id: 3,
    name: "Shalwar Kameez",
    icon: "🪄",
    products: 6,
    status: "Active",
    subCategories: ["Embroidered", "Printed", "Formal", "Casual", "Chiffon", "Lawn"]
  },
  {
    id: 4,
    name: "Coord Set",
    icon: "🎁",
    products: 6,
    status: "Active",
    subCategories: ["Formal Set", "Casual Set", "Printed Set", "Premium Set"]
  }
];

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Categories & Sub-Categories</h1>
        <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-colors">
          + Add Category
        </button>
      </div>

      <div className="space-y-4">
        {CATEGORIES.map(category => (
          <Card key={category.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-brand-maroon">{category.name}</h3>
                    <p className="text-xs text-brand-text-light">{category.products} products</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="success">{category.status}</Badge>
                  <button className="border border-black/10 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-black/5 transition-colors">Edit</button>
                  <button className="border border-red-200 text-red-600 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-red-50 transition-colors">Delete</button>
                </div>
              </div>

              <div>
                <div className="text-[10px] text-brand-text-light mb-2">Sub-categories:</div>
                <div className="flex flex-wrap gap-2">
                  {category.subCategories.map((sub, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#FDFBF7] border border-black/10 px-3 py-1.5 rounded-full text-xs text-brand-text">
                      {sub}
                      <button className="text-gray-400 hover:text-red-500 transition-colors text-[10px]">✕</button>
                    </div>
                  ))}
                  <button className="flex items-center gap-1 border border-brand-gold text-brand-maroon px-3 py-1.5 rounded-full text-[10px] font-bold uppercase hover:bg-brand-gold/10 transition-colors">
                    + Add Sub
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
