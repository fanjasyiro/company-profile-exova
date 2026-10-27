import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { getContactInfo } from '@/data/contact';
import { ContactInfoData } from '@/types/contact';

interface ContactSectionProps {
  info?: ContactInfoData;
  showHeading?: boolean;
  className?: string;
}

export function ContactSection({
  info: customInfo,
  showHeading = true,
  className = '',
}: ContactSectionProps) {
  const contactData = customInfo || getContactInfo();

  return (
    <Section id="contact" className={`border-t border-border bg-background py-16 md:py-24 ${className}`}>
      <Container>
        {showHeading && (
          <div className="mb-12 text-center flex flex-col items-center">
            <SectionHeading
              overline="Hubungi Kami"
              title="Mari Kolaborasi Membangun Masa Depan Digital"
              description="Konsultasikan tantangan teknologi dan kebutuhan transformasi digital perusahaan Anda dengan tim arsitek dan spesialis kami."
              align="center"
              className="max-w-3xl"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Office details & Google Maps preview */}
          <div className="lg:col-span-5">
            <ContactInfo info={contactData} />
          </div>

          {/* Right Column: Interactive contact form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
