'use client';

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const ROLES = [
  { 
    id: 1, 
    name: "Super Admin", 
    description: "Has access to all features and settings.",
    users: 2,
    permissions: ["All Access"] 
  },
  { 
    id: 2, 
    name: "Store Manager", 
    description: "Can manage products, orders, and view reports. Cannot change roles.",
    users: 5,
    permissions: ["Manage Products", "Manage Orders", "View Reports", "Manage Coupons"] 
  },
  { 
    id: 3, 
    name: "Customer Support", 
    description: "Can view orders, process returns, and reply to reviews.",
    users: 8,
    permissions: ["View Orders", "Manage Returns", "Reply Reviews"] 
  },
  { 
    id: 4, 
    name: "Content Editor", 
    description: "Can edit website content and banners.",
    users: 3,
    permissions: ["Manage CMS", "Manage Banners"] 
  }
];

export default function RolesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-brand-maroon mb-2">Roles & Permissions</h1>
        <button className="bg-brand-gold text-brand-maroon px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-colors">
          + Add Role
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ROLES.map(role => (
          <Card key={role.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-serif text-brand-maroon">{role.name}</h3>
                  <p className="text-xs text-brand-text-light mt-1">{role.description}</p>
                </div>
                <Badge variant={role.name === 'Super Admin' ? 'error' : 'neutral'}>
                  {role.users} Users
                </Badge>
              </div>
              
              <div className="mb-6">
                <div className="text-[10px] text-brand-text-light uppercase font-bold tracking-widest mb-2">Permissions</div>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((perm, i) => (
                    <span key={i} className="bg-[#FDFBF7] border border-black/10 px-2 py-1 rounded text-[10px] text-brand-text">
                      {perm}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-black/5">
                <button className="border border-black/10 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-black/5 transition-colors">Edit Role</button>
                {role.name !== 'Super Admin' && (
                  <button className="border border-red-200 text-red-600 px-3 py-1.5 rounded text-[10px] font-bold uppercase hover:bg-red-50 transition-colors">Delete</button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
