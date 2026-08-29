'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginAdmin } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API delay for loading state
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email === 'samar@gmail.com' && password === 'samar12345') {
      loginAdmin();
      router.push('/admin/dashboard');
    } else {
      setError('Invalid credentials. Try samar@gmail.com / samar12345');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-brand-bg min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-maroon/5 rounded-b-[100%] scale-150 transform -translate-y-1/2"></div>
      
      <div className="w-full max-w-[400px] p-8 md:p-10 bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-maroon/5 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-brand-maroon rounded-full flex items-center justify-center mb-4 shadow-md border-4 border-brand-gold/20">
             <span className="text-brand-gold font-serif font-bold text-2xl">H</span>
          </div>
          <h2 className="text-[22px] font-serif text-brand-maroon text-center font-bold leading-tight">Welcome to HAYAT<br/>Admin Panel</h2>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold tracking-widest uppercase text-brand-maroon">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full px-4 py-3 bg-[#F5EFE6] border border-transparent rounded-lg text-sm text-brand-maroon placeholder:text-brand-maroon/40 focus:bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold tracking-widest uppercase text-brand-maroon">Password</label>
            <div className="relative">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                className="w-full px-4 py-3 bg-[#F5EFE6] border border-transparent rounded-lg text-sm text-brand-maroon placeholder:text-brand-maroon/40 focus:bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                required
                disabled={isLoading}
              />
            </div>
          </div>
          
          {error && <p className="text-red-500 text-[11px] text-center font-medium">{error}</p>}
          
          <div className="pt-2">
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-brand-maroon text-brand-gold py-3.5 rounded-lg text-[13px] font-bold tracking-widest uppercase hover:bg-brand-maroon/90 transition-colors shadow-md shadow-brand-maroon/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-brand-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Logging in...
                </>
              ) : 'Login'}
            </button>
          </div>
          
          <div className="flex items-center justify-between pt-4 pb-2 text-[10px] uppercase font-bold tracking-wider text-brand-text-light">
            <button type="button" className="hover:text-brand-maroon transition-colors" disabled={isLoading}>Forgot Password?</button>
            <Link href="/" className="hover:text-brand-maroon transition-colors text-brand-gold">Back To Website</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
