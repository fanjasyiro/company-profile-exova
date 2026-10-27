import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialsCarousel } from '@/components/testimonials/TestimonialsCarousel';
import { getAllTestimonials } from '@/data/testimonials';
import { Testimonial } from '@/types/testimonial';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  showHeading?: boolean;
  className?: string;
}

export function TestimonialsSection({
  testimonials: customTestimonials,
  showHeading = true,
  className = '',
}: TestimonialsSectionProps) {
  const testimonialList = customTestimonials || getAllTestimonials();

  return (
    <Section className={`border-t border-border bg-card/30 py-16 md:py-24 ${className}`}>
      <Container>
        {showHeading && (
          <div className="mb-12 text-center flex flex-col items-center">
            <SectionHeading
              overline="Testimoni Mitra"
              title="Dipercaya oleh Para Pemimpin Industri"
              description="Dengarkan langsung cerita sukses para pemimpin korporasi dan institusi yang telah mengakselerasi transformasi digital serta efisiensi operasional bersama Exova."
              align="center"
              className="max-w-3xl"
            />
          </div>
        )}

        <TestimonialsCarousel testimonials={testimonialList} />
      </Container>
    </Section>
  );
}
