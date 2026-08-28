'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface WishlistItem {
  id: string; // product id
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('ecomm_wishlist');
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist));
      } catch (e) {
        console.error("Failed to parse wishlist data", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('ecomm_wishlist', JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addToWishlist = (product: WishlistItem) => {
    setItems(currentItems => {
      if (currentItems.some(item => item.id === product.id)) {
        return currentItems; // Already exists
      }
      return [...currentItems, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const toggleWishlist = (product: WishlistItem) => {
    setItems(currentItems => {
      if (currentItems.some(item => item.id === product.id)) {
        return currentItems.filter(item => item.id !== product.id);
      }
      return [...currentItems, product];
    });
  };

  const isInWishlist = (id: string) => items.some(item => item.id === id);

  const clearWishlist = () => setItems([]);

  const totalItems = items.length;

  return (
    <WishlistContext.Provider value={{
      items,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isInWishlist,
      clearWishlist,
      totalItems
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
