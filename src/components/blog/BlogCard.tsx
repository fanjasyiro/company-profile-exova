import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPostMeta } from '@/types';

interface BlogCardProps {
  post: BlogPostMeta;
  className?: string;
}

export function BlogCard({ post, className = '' }: BlogCardProps) {
  return (
    <article
      className={`group flex flex-col bg-card rounded-2xl border border-border/80 overflow-hidden shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-300 ${className}`}
    >
      {/* Cover Image */}
      {post.coverImage && (
        <Link
          href={`/blog/${post.slug}`}
          className="relative h-48 sm:h-52 w-full overflow-hidden bg-muted block"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-md text-primary border border-primary/20 shadow-xs">
              {post.category}
            </span>
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
        <div>
          {/* Metadata info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </time>
            </span>
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{post.readTime}</span>
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
            <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Read more */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs">
          <div className="flex items-center gap-2.5">
            {post.author.avatar ? (
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="28px"
                />
              </div>
            ) : (
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]">
                {post.author.name.charAt(0)}
              </div>
            )}
            <span className="font-medium text-foreground/80 truncate max-w-[140px]">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <span>Baca</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
