export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPostMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  author: BlogAuthor;
  coverImage?: string;
  readTime?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
