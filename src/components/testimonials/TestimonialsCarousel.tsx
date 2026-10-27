'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/types';
import { TestimonialCard } from './TestimonialCard';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  // Responsive items per page detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(testimonials.length / cardsPerPage));
  const safeCurrentIndex = Math.min(currentIndex, totalPages - 1);

  const handlePrev = () => {
    setCurrentIndex(safeCurrentIndex > 0 ? safeCurrentIndex - 1 : totalPages - 1);
  };

  const handleNext = () => {
    setCurrentIndex(safeCurrentIndex < totalPages - 1 ? safeCurrentIndex + 1 : 0);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };

  const startIndex = safeCurrentIndex * cardsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonial Klien"
      className="relative flex flex-col items-center"
    >
      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="polite">
        Menampilkan testimonial halaman {safeCurrentIndex + 1} dari {totalPages}
      </div>

      {/* Cards container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[320px]">
        {currentTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="h-full">
            <TestimonialCard testimonial={testimonial} className="h-full" />
          </div>
        ))}
      </div>

      {/* Carousel Controls (Manual navigation only - strictly no auto-play) */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-10 gap-4 pt-4 border-t border-border/40">
        {/* Page / Position status */}
        <div className="text-sm text-muted-foreground font-medium order-2 sm:order-1">
          Halaman <span className="text-foreground font-semibold">{safeCurrentIndex + 1}</span> dari{' '}
          <span className="text-foreground font-semibold">{totalPages}</span>
        </div>

        {/* Indicator dots */}
        <div
          role="tablist"
          aria-label="Pilihan Halaman Testimonial"
          className="flex items-center gap-2 order-1 sm:order-2"
        >
          {Array.from({ length: totalPages }).map((_, idx) => {
            const isActive = idx === safeCurrentIndex;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Buka testimonial halaman ${idx + 1}`}
                onClick={() => goToPage(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? 'w-8 h-2.5 bg-primary'
                    : 'w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            );
          })}
        </div>

        {/* Prev / Next buttons */}
        <div className="flex items-center gap-2 order-3">
          <button
            type="button"
            aria-label="Testimonial sebelumnya"
            onClick={handlePrev}
            className="p-2.5 rounded-full border border-border bg-card text-foreground hover:bg-muted/80 hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Testimonial berikutnya"
            onClick={handleNext}
            className="p-2.5 rounded-full border border-border bg-card text-foreground hover:bg-muted/80 hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
