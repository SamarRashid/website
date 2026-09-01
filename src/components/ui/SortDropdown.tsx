'use client';

import { useState, useRef, useEffect } from 'react';

interface SortOption {
  value: string;
  label: string;
}

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions: SortOption[] = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'top-sellers', label: 'Top Sellers' },
  { value: 'most-popular', label: 'Most Popular' },
  { value: 'new-arrival', label: 'New Arrival' },
  { value: 'price-low', label: 'Price Low To High' },
  { value: 'price-high', label: 'Price High to Low' },
];

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = sortOptions.find(opt => opt.value === value) || sortOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-48" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between border border-black/10 rounded-full px-4 py-2 text-sm bg-white text-brand-text focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold hover:border-brand-maroon/50 transition-colors shadow-sm cursor-pointer"
      >
        <span className="truncate">{selectedOption.label}</span>
        <div className={`pointer-events-none transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180 text-brand-maroon' : 'text-brand-text/50'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-black/5 z-50 overflow-hidden transition-all duration-200 transform origin-top ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-95 opacity-0 invisible'}`}
      >
        <div className="flex flex-col py-1">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`text-left px-4 py-2 text-sm transition-colors hover:bg-brand-gold/10 hover:text-brand-maroon cursor-pointer ${value === option.value ? 'bg-brand-gold/10 text-brand-maroon font-bold' : 'text-brand-text'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
