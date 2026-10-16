import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechnologyTabs } from '@/components/technology/TechnologyTabs';
import { getAllTechnologies, getTechnologyCategories } from '@/data/technologies';
import { Technology, TechCategory } from '@/types/technology';

interface TechnologySectionProps {
  technologies?: Technology[];
  categories?: TechCategory[];
  showHeading?: boolean;
  className?: string;
}

export function TechnologySection({
  technologies: customTechnologies,
  categories: customCategories,
  showHeading = true,
  className = '',
}: TechnologySectionProps) {
  const techList = customTechnologies || getAllTechnologies();
  const categoryList = customCategories || getTechnologyCategories();

  return (
    <Section className={`border-t border-[var(--border)] bg-[var(--muted)]/30 py-16 md:py-24 ${className}`}>
      <Container>
        {showHeading && (
          <div className="mb-12 text-center flex flex-col items-center">
            <SectionHeading
              overline="Teknologi & Keahlian"
              title="Tech Stack Modern untuk Skalabilitas Tinggi"
              description="Kami memadukan bahasa pemrograman, framework modern, arsitektur cloud, dan sistem basis data terdepan untuk membangun ekosistem digital yang kokoh dan berkelanjutan."
              align="center"
              className="max-w-3xl"
            />
          </div>
        )}

        <TechnologyTabs technologies={techList} categories={categoryList} />
      </Container>
    </Section>
  );
}
