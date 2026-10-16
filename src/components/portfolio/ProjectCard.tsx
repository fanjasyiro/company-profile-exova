import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {/* Thumbnail Image with Subtle Zoom on Hover */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--muted)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Category Pill Tag */}
        <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-[var(--background)]/90 px-3 py-1 text-xs font-medium text-[var(--foreground)] backdrop-blur-md shadow-sm">
          {project.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Client Name */}
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-[var(--muted-foreground)]">
          <Building2 className="h-3.5 w-3.5 text-[var(--primary)]" aria-hidden="true" />
          <span>{project.client}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--card-foreground)] transition-colors duration-200 group-hover:text-[var(--primary)]">
          <Link href={`/portfolio/${project.slug}`} className="focus:outline-none">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>

        {/* Technologies List (Separator formatted & pill style) */}
        <p className="mt-2 text-xs font-semibold text-[var(--primary)] tracking-wide">
          {project.technologies.join(' · ')}
        </p>

        {/* Project Description */}
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)] line-clamp-3">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-[var(--secondary)] px-2.5 py-0.5 text-xs font-medium text-[var(--secondary-foreground)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer / CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            Studi Kasus
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] transition-all duration-300 group-hover:translate-x-1">
            Lihat Detail Proyek
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
