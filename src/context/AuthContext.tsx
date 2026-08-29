'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  isAdminLoggedIn: boolean;
  loginAdmin: () => void;
  logoutAdmin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check local storage for mock auth state on mount
    const authState = localStorage.getItem('isAdminLoggedIn');
    if (authState === 'true') {
      setIsAdminLoggedIn(true);
    }
    setIsInitialized(true);
  }, []);

  const loginAdmin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
    router.push('/admin/dashboard');
  };

  const logoutAdmin = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdminLoggedIn(false);
    router.push('/admin/login');
  };

  // Only render children after initialization to prevent hydration mismatch
  if (!isInitialized) return null;

  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, loginAdmin, logoutAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
