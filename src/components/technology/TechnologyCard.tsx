import React from 'react';
import { Technology } from '@/types/technology';
import { TechnologyIcon } from './TechnologyIcon';

interface TechnologyCardProps {
  technology: Technology;
}

export function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--secondary)] p-2.5 transition-transform duration-300 group-hover:scale-110">
            <TechnologyIcon name={technology.icon || technology.name} className="h-7 w-7" />
          </div>
          <span className="inline-flex items-center rounded-full bg-[var(--secondary)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors">
            {technology.category}
          </span>
        </div>

        <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
          {technology.name}
        </h3>

        {technology.description && (
          <p className="mt-1.5 text-xs text-[var(--muted-foreground)] leading-relaxed">
            {technology.description}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--border)]/60 pt-3 text-[11px] font-medium text-[var(--muted-foreground)]">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Enterprise Ready
        </span>
        {technology.featured && (
          <span className="text-[var(--primary)] font-semibold">Core Stack</span>
        )}
      </div>
    </div>
  );
}
