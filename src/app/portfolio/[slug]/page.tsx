import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Building2, 
  Calendar, 
  Tag, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getProjectBySlug, getAllProjects } from '@/data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Tidak Ditemukan | Exova',
    };
  }

  return {
    title: `${project.title} — Studi Kasus Portofolio | Exova`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Top Header / Breadcrumb */}
      <div className="border-b border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm">
        <Container className="py-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Portofolio
          </Link>
        </Container>
      </div>

      {/* Project Hero Section */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl">
            {/* Category & Client Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary)]/10 px-3.5 py-1 text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">
                <Tag className="h-3 w-3" />
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)]">
                <Building2 className="h-4 w-4 text-[var(--primary)]" />
                Klien: <strong className="text-[var(--foreground)]">{project.client}</strong>
              </span>
              {project.year && (
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)]">
                  <Calendar className="h-4 w-4 text-[var(--primary)]" />
                  Tahun: <strong className="text-[var(--foreground)]">{project.year}</strong>
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight mb-6">
              {project.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed mb-8">
              {project.description}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm mb-12">
            <div>
              <span className="block text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                Klien
              </span>
              <span className="text-sm md:text-base font-semibold text-[var(--foreground)]">
                {project.client}
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                Kategori
              </span>
              <span className="text-sm md:text-base font-semibold text-[var(--foreground)]">
                {project.category}
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                Tahun Rilis
              </span>
              <span className="text-sm md:text-base font-semibold text-[var(--foreground)]">
                {project.year || '2024'}
              </span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                Fokus Solusi
              </span>
              <span className="text-sm md:text-base font-semibold text-[var(--foreground)]">
                Enterprise Scale
              </span>
            </div>
          </div>

          {/* Featured Full Image */}
          <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--muted)] shadow-md mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </figure>

          {/* Deep-dive Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Column (2 cols) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              {project.overview && (
                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-[var(--primary)]" />
                    Ringkasan Proyek
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-[var(--muted-foreground)]">
                    {project.overview}
                  </p>
                </section>
              )}

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.challenge && (
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
                      Tantangan Utama
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
                      Solusi Kami
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>

              {/* Results / Key Impacts */}
              {project.results && project.results.length > 0 && (
                <section className="rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-8">
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
                    Hasil & Dampak Terukur
                  </h2>
                  <ul className="space-y-3">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-[var(--foreground)]">
                        <CheckCircle2 className="h-5 w-5 text-[var(--primary)] shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar Column (1 col) */}
            <aside className="space-y-8">
              {/* Technologies */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                <h3 className="text-base font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[var(--primary)]" />
                  Teknologi yang Digunakan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-lg bg-[var(--secondary)] px-3 py-1.5 text-xs font-semibold text-[var(--secondary-foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--primary)]/10 via-[var(--card)] to-[var(--secondary)] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                  Punya Kebutuhan Serupa?
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  Konsultasikan arsitektur dan kebutuhan sistem bisnis Anda bersama tim ahli kami.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition-all hover:bg-[var(--primary)]/90"
                >
                  Mulai Konsultasi
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  );
}
