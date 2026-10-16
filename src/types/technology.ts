export type TechCategory =
  | 'Frontend'
  | 'Backend'
  | 'Mobile'
  | 'Database'
  | 'Cloud & DevOps';

export interface Technology {
  name: string;
  category: TechCategory;
  description?: string;
  icon?: string;
  featured?: boolean;
}
