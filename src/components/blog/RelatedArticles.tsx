import React from 'react';
import { BlogPostMeta } from '@/types';
import { BlogCard } from './BlogCard';

interface RelatedArticlesProps {
  articles: BlogPostMeta[];
  className?: string;
}

export function RelatedArticles({ articles, className = '' }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className={`pt-12 mt-12 border-t border-border ${className}`} aria-labelledby="related-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Rekomendasi Bacaan
          </span>
          <h2 id="related-heading" className="text-2xl font-bold text-foreground mt-1 tracking-tight">
            Artikel Terkait
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {articles.map((article) => (
          <BlogCard key={article.slug} post={article} />
        ))}
      </div>
    </section>
  );
}
