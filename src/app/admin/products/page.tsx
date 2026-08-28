'use client';

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useState } from "react";

const PRODUCTS = [
  { id: "PROD-001", name: "Bosphorus Embroidered Abaya", sku: "AB-BOS-01", category: "Abayas", stock: 45, status: "Active", price: 1290 },
  { id: "PROD-002", name: "Sultanahmet Evening Abaya", sku: "AB-SUL-02", category: "Abayas", stock: 12, status: "Active", price: 3400 },
  { id: "PROD-003", name: "Tulip Garden Maxi Dress", sku: "DR-TUL-01", category: "Dresses", stock: 0, status: "Out of Stock", price: 890 },
  { id: "PROD-004", name: "Iznik Floral Open Abaya", sku: "AB-IZN-04", category: "Abayas", stock: 89, status: "Active", price: 1150 },
  { id: "PROD-005", name: "Linen Pant Suit Set", sku: "CO-LIN-01", category: "Coord Sets", stock: 34, status: "Draft", price: 2100 },
];

export default function AdminProductsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = PRODUCTS.filter(product => {
    if (activeTab === "All") return true;
    return product.status === activeTab;
  });

  const handleExport = () => {
    // In a real application, this would generate and download a CSV file.
    alert("Generating CSV Export for " + filteredProducts.length + " products...");
  };

  const getTabClass = (tabName: string) => {
    return activeTab === tabName 
      ? "whitespace-nowrap px-3 py-1 rounded-full bg-gray-100 text-gray-900 font-medium transition-colors"
      : "whitespace-nowrap px-3 py-1 rounded-full hover:bg-gray-100 transition-colors text-gray-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your catalog, pricing, and availability.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleExport}
            className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Export
          </button>
          <Link href="/admin/products/new" className="px-4 py-2 bg-brand-maroon text-brand-gold rounded-md text-sm font-medium hover:bg-brand-maroon/90 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Add Product
          </Link>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input type="text" placeholder="Search products..." className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon" />
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <button className="px-3 py-2 border border-gray-300 text-gray-700 bg-white rounded-md text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filter
            </button>
          </div>
          
          <div className="flex gap-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
            <button onClick={() => setActiveTab("All")} className={getTabClass("All")}>All (124)</button>
            <button onClick={() => setActiveTab("Active")} className={getTabClass("Active")}>Active (108)</button>
            <button onClick={() => setActiveTab("Draft")} className={getTabClass("Draft")}>Draft (12)</button>
            <button onClick={() => setActiveTab("Out of Stock")} className={getTabClass("Out of Stock")}>Out of Stock (4)</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-medium"><input type="checkbox" className="rounded border-gray-300 text-brand-maroon focus:ring-brand-maroon" /></th>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">SKU</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Inventory</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium text-right">Price</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-gray-300 text-brand-maroon focus:ring-brand-maroon" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gray-200 border border-gray-300 flex-shrink-0"></div>
                      <span className="font-medium text-gray-900 group-hover:text-brand-maroon transition-colors">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{product.sku}</td>
                  <td className="px-6 py-4">
                    <Badge variant={product.status === "Active" ? "success" : product.status === "Out of Stock" ? "destructive" : "default"}>
                      {product.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{product.stock} in stock</td>
                  <td className="px-6 py-4 text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">Rs. {product.price.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-6 py-10 text-center text-gray-500">
                    No products found matching this status.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <div>Showing 1 to {filteredProducts.length} of {filteredProducts.length} products</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
