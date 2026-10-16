import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { getAllProjects } from '@/data/projects';
import { Project } from '@/types/project';

interface PortfolioSectionProps {
  projects?: Project[];
  showHeading?: boolean;
  className?: string;
}

export function PortfolioSection({
  projects: customProjects,
  showHeading = true,
  className = '',
}: PortfolioSectionProps) {
  const projectList = customProjects || getAllProjects();

  return (
    <Section className={`bg-[var(--background)] py-16 md:py-24 ${className}`}>
      <Container>
        {showHeading && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <SectionHeading
              overline="Portofolio Kami"
              title="Karya Pilihan & Solusi Nyata"
              description="Lihat bagaimana inovasi teknologi kami membantu industri perbankan, rantai pasok global, kesehatan, dan kota cerdas bertransformasi."
              className="mb-0 max-w-2xl"
            />
            <div className="mt-6 md:mt-0">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--secondary)] hover:text-[var(--primary)] shadow-sm"
              >
                Jelajahi Semua Proyek
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectList.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
