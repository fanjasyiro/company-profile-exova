import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

interface RawFrontmatter {
  title?: string;
  slug?: string;
  excerpt?: string;
  date?: string;
  category?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  coverImage?: string;
  readTime?: string;
}

function parseMdxFile(fileName: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Split frontmatter and content
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
    const match = fileContents.match(frontmatterRegex);

    if (!match) {
      return null;
    }

    const frontmatterBlock = match[1];
    const content = match[2].trim();

    // Parse YAML key-value pairs
    const frontmatter: RawFrontmatter = {};
    const lines = frontmatterBlock.split(/\r?\n/);

    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();
        // Remove surrounding quotes if any
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }
        (frontmatter as Record<string, string>)[key] = value;
      }
    }

    const fallbackSlug = fileName.replace(/\.mdx?$/, '');
    const slug = frontmatter.slug || fallbackSlug;

    return {
      title: frontmatter.title || 'Untitled Article',
      slug,
      excerpt: frontmatter.excerpt || '',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      category: frontmatter.category || 'Technology',
      author: {
        name: frontmatter.authorName || 'Exova Editorial',
        role: frontmatter.authorRole || 'Enterprise Technology Specialist',
        avatar: frontmatter.authorAvatar,
      },
      coverImage: frontmatter.coverImage || '/images/project-banking.jpg',
      readTime: frontmatter.readTime || '5 menit baca',
      content,
    };
  } catch (error) {
    console.error(`Error reading blog file ${fileName}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR);
  const posts = fileNames
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => parseMdxFile(file))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 2): BlogPost[] {
  const posts = getAllPosts();
  const filtered = posts.filter(
    (post) => post.slug !== currentSlug && post.category.toLowerCase() === category.toLowerCase()
  );

  if (filtered.length >= limit) {
    return filtered.slice(0, limit);
  }

  // Fallback: add other recent articles if category matches are insufficient
  const remaining = posts.filter(
    (post) => post.slug !== currentSlug && !filtered.some((f) => f.slug === post.slug)
  );

  return [...filtered, ...remaining].slice(0, limit);
}
