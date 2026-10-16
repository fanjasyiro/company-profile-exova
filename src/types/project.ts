export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  year?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
}
