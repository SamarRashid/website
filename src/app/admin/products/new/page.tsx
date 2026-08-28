'use client';

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPublishing, setIsPublishing] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handlePublish = () => {
    setIsPublishing(true);
    // Simulate API call
    setTimeout(() => {
      alert("Product successfully published!");
      router.push('/admin/products');
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-20">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
        <Link href="/admin/products" className="hover:text-gray-900 transition-colors">Products</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Add Product</span>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
        <div className="flex gap-3">
          <Link href="/admin/products" className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            Discard
          </Link>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            Save Draft
          </button>
          <button 
            onClick={handlePublish}
            disabled={isPublishing}
            className="px-4 py-2 bg-brand-maroon text-brand-gold rounded-md text-sm font-medium hover:bg-brand-maroon/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPublishing ? "Publishing..." : "Publish Product"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="p-6 space-y-6">
              <h2 className="text-lg font-bold text-gray-900">General Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Title</label>
                  <input type="text" placeholder="e.g. Bosphorus Embroidered Abaya" className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea rows={5} placeholder="Describe the product..." className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon"></textarea>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6 space-y-6">
              <h2 className="text-lg font-bold text-gray-900">Media</h2>
              <div 
                onClick={handleBoxClick}
                className="relative border-2 border-dashed border-gray-300 rounded-lg p-1 text-center flex flex-col items-center justify-center min-h-[200px] hover:bg-gray-50 transition-colors cursor-pointer overflow-hidden group"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  accept="image/png, image/jpeg, image/gif, image/svg+xml"
                  className="hidden" 
                />
                
                {imagePreview ? (
                  <>
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-contain max-h-[400px]" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">Change Image</span>
                    </div>
                  </>
                ) : (
                  <div className="py-10 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                    <div className="text-sm font-medium text-brand-maroon">Click to upload <span className="text-gray-500 font-normal">or drag and drop</span></div>
                    <div className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</div>
                  </div>
                )}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6 space-y-6">
              <h2 className="text-lg font-bold text-gray-900">Pricing</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (PKR)</label>
                  <input type="number" placeholder="0.00" className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Compare at price</label>
                  <input type="number" placeholder="0.00" className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded border-gray-300 text-brand-maroon focus:ring-brand-maroon" />
                Charge tax on this product
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="p-6 space-y-6">
              <h2 className="text-lg font-bold text-gray-900">Inventory</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">SKU (Stock Keeping Unit)</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Barcode (ISBN, UPC, GTIN, etc.)</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input type="number" defaultValue="0" className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="p-6 space-y-4">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Status</h2>
              <select className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon">
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>
          </Card>

          <Card>
            <div className="p-6 space-y-6">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Product Organization</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon">
                  <option>Abayas</option>
                  <option>Dresses</option>
                  <option>Shalwar Kameez</option>
                  <option>Coord Sets</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                <input type="text" placeholder="Vintage, Cotton, Summer" className="w-full border border-gray-300 rounded-md p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
