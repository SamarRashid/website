'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-serif text-brand-maroon">Store Settings</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-brand-text mb-2">Store Name</label>
                <input type="text" defaultValue="Modest Fashion Store" className="w-full border border-black/10 rounded-md p-3 text-sm focus:outline-none focus:border-brand-maroon bg-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-text mb-2">Support Email</label>
                <input type="email" defaultValue="support@modestfashion.com" className="w-full border border-black/10 rounded-md p-3 text-sm focus:outline-none focus:border-brand-maroon bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-text mb-2">Store Description</label>
              <textarea rows={3} defaultValue="Premium modest fashion destination for abayas, dresses, and coord sets." className="w-full border border-black/10 rounded-md p-3 text-sm focus:outline-none focus:border-brand-maroon bg-white"></textarea>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regional Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-brand-text mb-2">Default Currency</label>
              <select className="w-full border border-black/10 rounded-md p-3 text-sm focus:outline-none focus:border-brand-maroon bg-white">
                <option>PKR - Pakistani Rupee</option>
                <option>USD - US Dollar</option>
                <option>AED - UAE Dirham</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-text mb-2">Timezone</label>
              <select className="w-full border border-black/10 rounded-md p-3 text-sm focus:outline-none focus:border-brand-maroon bg-white">
                <option>(GMT+05:00) Islamabad, Karachi</option>
                <option>(GMT+04:00) Abu Dhabi, Muscat</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Taxes & Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-brand-text mb-2">Default Tax Rate (%)</label>
              <input type="number" defaultValue="5" className="w-full border border-black/10 rounded-md p-3 text-sm focus:outline-none focus:border-brand-maroon bg-white" />
            </div>
            <div className="flex items-center pt-6">
              <label className="flex items-center gap-3 text-sm font-bold text-brand-text cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-brand-maroon w-4 h-4" />
                Require account creation for checkout
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end pt-4">
        <button className="bg-brand-maroon text-brand-gold px-8 py-3 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-brand-maroon/90 transition-colors shadow-sm">
          Save Settings
        </button>
      </div>

    </div>
  );
}
