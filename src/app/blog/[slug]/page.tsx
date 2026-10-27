import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { BlogContent } from '@/components/blog/BlogContent';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan | Exova Technology',
    };
  }

  return {
    title: `${post.title} | Exova Technology Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedArticles = getRelatedPosts(post.slug, post.category, 2);

  return (
    <main className="min-h-screen bg-background">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-border bg-card/40 backdrop-blur-sm sticky top-16 z-20">
        <Container className="py-3.5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Semua Artikel</span>
          </Link>
        </Container>
      </div>

      <Section className="py-10 sm:py-16">
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Header info */}
            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  {post.category}
                </span>
                {post.readTime && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                {post.title}
              </h1>

              {/* Author & Date Card */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border/60">
                <div className="flex items-center gap-3">
                  {post.author.avatar ? (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-border shrink-0">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="relative w-full h-64 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden mb-10 border border-border shadow-sm">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )}

            {/* Content Body */}
            <BlogContent content={post.content} />

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} />
          </article>
        </Container>
      </Section>
    </main>
  );
}
