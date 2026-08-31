'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      tag: "SUMMER DRESSES & SETS",
      title: "Effortless",
      subtitle: "Grace",
      description: "Flowing dresses & coordinated sets perfect for every occasion.",
      buttonText: "Shop Dresses →",
      buttonLink: "/collections/dresses",
      secondaryButtonLink: "/products/p7", // Example link to a dress product
      image: "/images/home page 1.png",
      imagePosition: "object-top",
    },
    {
      id: 2,
      tag: "EXCLUSIVE COLLECTION",
      title: "Ottoman",
      subtitle: "Elegance",
      description: "Hand-embroidered abayas & velvet gowns with the finest fabrics.",
      buttonText: "View Collection →",
      buttonLink: "/collections/abayas",
      secondaryButtonLink: "/products/p1", // Example link to an abaya product
      image: "/images/home page 3.png",
      imagePosition: "object-center",
    },
    {
      id: 3,
      tag: "NEW SEASON ARRIVALS",
      title: "Timeless",
      subtitle: "Modest Fashion",
      description: "Premium abayas, dresses & coord sets — crafted for the modern, elegant woman.",
      buttonText: "Shop Abayas →",
      buttonLink: "/collections/abayas",
      secondaryButtonLink: "/products/p2", // Example link to a new arrival product
      image: "/images/home page 2.png",
      imagePosition: "object-center",
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section 
      className="relative w-full h-[82vh] min-h-[550px] flex items-center bg-black overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover ${slide.imagePosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center">
             <div className="relative z-10 text-white px-6 md:px-20 max-w-2xl w-full">
              <div 
                className={`transition-all duration-1000 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/20 text-brand-gold text-[9px] font-bold tracking-widest uppercase rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  {slide.tag}
                </div>
                
                <h1 className="text-6xl md:text-7xl font-serif leading-tight">
                  <span className="block text-white font-normal">{slide.title}</span>
                  <span className="block text-brand-gold font-normal">{slide.subtitle}</span>
                </h1>
                
                <p className="text-sm md:text-sm font-light tracking-wide mt-6 mb-10 text-white/80 max-w-sm leading-relaxed">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link 
                    href={slide.buttonLink} 
                    className="bg-brand-gold text-brand-maroon px-6 py-2.5 rounded text-[11px] font-bold tracking-wider hover:bg-[#D4AF37]/90 transition-colors w-full sm:w-auto text-center"
                  >
                    {slide.buttonText}
                  </Link>
                  <Link 
                    href={slide.secondaryButtonLink}
                    className="bg-transparent border border-white/40 text-white px-6 py-2.5 rounded text-[11px] font-bold tracking-wider hover:bg-white/10 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
                  >
                    <span className="text-teal-400">👗</span> View Product Page
                  </Link>
                </div>
                
                {/* Floating Navigation Indicators (Left aligned now) */}
                <div className="flex items-center gap-2 mt-12">
                  {slides.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setCurrentSlide(dotIndex)}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                      className={`transition-all duration-500 rounded-full ${
                        dotIndex === currentSlide 
                          ? 'w-6 h-1.5 bg-brand-gold' 
                          : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white/70 hover:bg-black/50 hover:text-brand-gold backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white/70 hover:bg-black/50 hover:text-brand-gold backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    </section>
  );
}
