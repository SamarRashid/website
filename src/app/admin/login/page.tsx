'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginAdmin } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Authentication check
    if (email === 'admin@example.com' && password === 'admin123') {
      loginAdmin();
    } else {
      setError('Invalid credentials. Try admin@example.com / admin123');
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-brand-bg min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm border border-black/5 text-center">
        <h2 className="text-3xl font-serif text-brand-maroon mb-2">Admin Panel</h2>
        <p className="text-xs text-brand-text-light uppercase tracking-widest mb-8">Secure Login</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email (e.g. admin@example.com)" 
            className="w-full px-4 py-3 bg-[#F5EFE6] border-none rounded text-sm focus:ring-1 focus:ring-brand-gold outline-none"
            required
          />
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (e.g. admin123)" 
            className="w-full px-4 py-3 bg-[#F5EFE6] border-none rounded text-sm focus:ring-1 focus:ring-brand-gold outline-none"
            required
          />
          
          {error && <p className="text-red-500 text-xs text-left">{error}</p>}
          
          <button 
            type="submit" 
            className="w-full bg-brand-maroon text-brand-gold py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-brand-maroon/90 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
