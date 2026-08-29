'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const BRANDS = [
  { id: 1, name: "E-Commerce Originals", location: "Pakistan", products: 24, status: "Active", icon: "🏷️" },
  { id: 2, name: "Gul Ahmed", location: "Pakistan", products: 0, status: "Active", icon: "🌸" },
  { id: 3, name: "Sana Safinaz", location: "Pakistan", products: 0, status: "Active", icon: "✨" },
  { id: 4, name: "Khaadi", location: "Pakistan", products: 0, status: "Inactive", icon: "🧵" },
  { id: 5, name: "Alkaram Studio", location: "Pakistan", products: 0, status: "Active", icon: "🎨" },
  { id: 6, name: "Maria.B", location: "Pakistan", products: 0, status: "Active", icon: "👗" },
];

export default function BrandsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Brand Management</h1>
        <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-colors">
          + Add Brand
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BRANDS.map(brand => (
          <Card key={brand.id}>
            <CardContent className="p-6">
              <div className="flex gap-4 items-center mb-6">
                <div className="w-12 h-12 bg-black/5 rounded flex items-center justify-center text-2xl flex-shrink-0">
                  {brand.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-maroon leading-tight">{brand.name}</h3>
                  <p className="text-[10px] text-brand-text-light">{brand.location} · {brand.products} products</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Badge variant={brand.status === 'Active' ? 'success' : 'error'}>{brand.status}</Badge>
                
                <div className="flex gap-2">
                  <button className="border border-black/10 px-3 py-1.5 rounded text-[9px] font-bold uppercase hover:bg-black/5 transition-colors">Edit</button>
                  <button className="border border-red-200 text-red-600 px-3 py-1.5 rounded text-[9px] font-bold uppercase hover:bg-red-50 transition-colors">Delete</button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
