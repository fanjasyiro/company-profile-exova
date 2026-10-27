import { Quote, Star } from 'lucide-react';
import { Testimonial } from '@/types';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .replace(/^(dr\.|drg\.|prof\.|ir\.)\s+/i, '')
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <figure
      className={`relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl bg-card border border-border/70 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40 ${className}`}
    >
      {/* Decorative quote background icon */}
      <div className="absolute top-6 right-6 text-primary/10 pointer-events-none" aria-hidden="true">
        <Quote className="w-12 h-12 rotate-180" />
      </div>

      <div>
        {/* Rating stars if available */}
        {testimonial.rating && (
          <div className="flex items-center gap-1 mb-5" aria-label={`Rating: ${testimonial.rating} dari 5 bintang`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < (testimonial.rating || 5)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-muted-foreground/30'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        )}

        {/* Quote body */}
        <blockquote className="relative z-10 mb-6">
          <p className="text-foreground/90 text-base sm:text-lg leading-relaxed italic font-normal">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
      </div>

      {/* Author and company info */}
      <figcaption className="flex items-center gap-4 pt-4 border-t border-border/50">
        {testimonial.photo ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border">
            <Image
              src={testimonial.photo}
              alt={testimonial.person}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        ) : (
          <div
            className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-semibold text-sm bg-primary/10 text-primary border border-primary/20"
            aria-hidden="true"
          >
            {getInitials(testimonial.person)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="font-semibold text-foreground text-sm sm:text-base truncate">
            {testimonial.person}
          </div>
          <cite className="not-italic text-xs sm:text-sm text-muted-foreground block truncate">
            {testimonial.position} &middot;{' '}
            <span className="text-foreground/80 font-medium">{testimonial.company}</span>
          </cite>
        </div>
      </figcaption>
    </figure>
  );
}
