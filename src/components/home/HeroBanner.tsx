'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroBanner() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      title: t('hero_title_1'),
      subtitle: t('hero_subtitle_1'),
      buttonText: t('hero_btn_1'),
      buttonLink: "/collections/abayas",
      image: "/images/hero_banner.jpg",
    },
    {
      id: 2,
      title: t('hero_title_2'),
      subtitle: t('hero_subtitle_2'),
      buttonText: t('hero_btn_2'),
      buttonLink: "/collections/all",
      image: "/images/black_abaya.jpg",
    },
    {
      id: 3,
      title: t('hero_title_3'),
      subtitle: t('hero_subtitle_3'),
      buttonText: t('hero_btn_3'),
      buttonLink: "/collections/dresses",
      image: "/images/abaya_velvet.jpg",
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
      className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-brand-maroon overflow-hidden group"
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
            className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-maroon via-transparent to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center">
             <div className="relative z-10 text-white px-6 md:px-20 max-w-2xl w-full">
              <div 
                className={`transition-all duration-1000 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="inline-block px-4 py-1.5 border border-brand-gold text-brand-gold text-[10px] font-bold tracking-widest uppercase rounded-full mb-6">
                  {t('exclusive_collection')}
                </div>
                <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-tight">{slide.title}</h1>
                <p className="text-base md:text-lg font-light tracking-wide mb-10 text-white/90">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link 
                    href={slide.buttonLink} 
                    className="bg-brand-gold text-brand-maroon px-8 py-3 rounded-md text-xs font-bold tracking-widest uppercase hover:bg-[#D4AF37]/90 transition-colors w-full sm:w-auto text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
                  >
                    {slide.buttonText}
                  </Link>
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

      {/* Floating Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'w-10 h-1.5 bg-brand-gold' 
                : 'w-2 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
