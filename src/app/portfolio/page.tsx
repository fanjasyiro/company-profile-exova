import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { getAllProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portofolio & Studi Kasus Proyek | Exova',
  description: 'Daftar portofolio proyek strategis dan studi kasus transformasi digital yang telah kami kembangkan untuk klien global.',
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header Banner */}
      <Section className="border-b border-[var(--border)] bg-[var(--card)]/30 py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold tracking-wider uppercase">
              Studi Kasus & Portofolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Membangun Solusi Digital yang Berdampak
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              Jelajahi rekam jejak kami dalam merancang dan mengembangkan arsitektur perangkat lunak skala enterprise di berbagai industri strategis.
            </p>
          </div>
        </Container>
      </Section>

      {/* Projects Grid Section */}
      <Section className="py-16 md:py-24">
        <Container>
          {/* Desktop 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
