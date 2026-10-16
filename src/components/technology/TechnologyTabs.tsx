'use client';

import React, { useState } from 'react';
import { Technology, TechCategory } from '@/types/technology';
import { TechnologyCard } from './TechnologyCard';

interface TechnologyTabsProps {
  technologies: Technology[];
  categories: TechCategory[];
}

export function TechnologyTabs({ technologies, categories }: TechnologyTabsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const allTabs = ['Semua', ...categories];

  const filteredTechnologies =
    selectedCategory === 'Semua'
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {allTabs.map((category) => {
          const isActive = selectedCategory === category;
          const count =
            category === 'Semua'
              ? technologies.length
              : technologies.filter((t) => t.category === category).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-md shadow-[var(--primary)]/20 ring-2 ring-[var(--primary)]/30'
                  : 'bg-[var(--secondary)] text-[var(--muted-foreground)] hover:bg-[var(--secondary)]/80 hover:text-[var(--foreground)]'
              }`}
            >
              <span>{category}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-[var(--border)] text-[var(--muted-foreground)]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Technologies Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 list-none p-0 m-0">
        {filteredTechnologies.map((tech) => (
          <li key={tech.name} className="transition-all duration-300">
            <TechnologyCard technology={tech} />
          </li>
        ))}
      </ul>
    </div>
  );
}
