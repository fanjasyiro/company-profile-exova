import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog & Wawasan Teknologi | Exova Technology',
  description:
    'Eksplorasi artikel mendalam, praktik terbaik arsitektur cloud, keamanan enterprise, dan tren inovasi software dari para ahli Exova.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <Section className="bg-card/30 border-b border-border py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <SectionHeading
              overline="Wawasan & Publikasi"
              title="Pemikiran Mendalam Seputar Arsitektur & Inovasi Digital"
              description="Dapatkan pandangan teknis, studi kasus arsitektur, dan tren terkini rekayasa perangkat lunak enterprise dari tim engineering Exova."
              align="center"
            />
          </div>
        </Container>
      </Section>

      {/* Blog Listing Grid */}
      <Section className="py-12 md:py-16">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-card/50 max-w-md mx-auto">
              <p className="text-foreground font-semibold text-lg mb-1">Belum Ada Artikel</p>
              <p className="text-muted-foreground text-sm">
                Artikel teknologi terbaru kami sedang dipersiapkan. Silakan kunjungi kembali nanti.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
