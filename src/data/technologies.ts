import { Technology, TechCategory } from '@/types/technology';

export const techCategories: TechCategory[] = [
  'Frontend',
  'Backend',
  'Mobile',
  'Database',
  'Cloud & DevOps',
];

export const technologies: Technology[] = [
  // Frontend
  {
    name: 'Next.js',
    category: 'Frontend',
    description: 'React Framework untuk SSR, SSG, dan performa web optimal.',
    icon: 'nextjs',
    featured: true,
  },
  {
    name: 'React',
    category: 'Frontend',
    description: 'Library UI terpopuler untuk aplikasi web interaktif berskala besar.',
    icon: 'react',
    featured: true,
  },
  {
    name: 'Angular',
    category: 'Frontend',
    description: 'Framework enterprise komprehensif untuk sistem bisnis kritis.',
    icon: 'angular',
    featured: false,
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    description: 'Framework progresif yang fleksibel dan berkinerja tinggi.',
    icon: 'vue',
    featured: false,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Typed JavaScript untuk kode skala besar yang tangguh dan minim bug.',
    icon: 'typescript',
    featured: true,
  },

  // Backend
  {
    name: 'Java',
    category: 'Backend',
    description: 'Fondasi tangguh untuk sistem finansial dan enterprise transactional.',
    icon: 'java',
    featured: true,
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    description: 'Framework microservices enterprise dengan reliabilitas dan keamanan tinggi.',
    icon: 'springboot',
    featured: true,
  },
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'Runtime event-driven asinkron untuk API real-time berkinerja tinggi.',
    icon: 'nodejs',
    featured: true,
  },
  {
    name: 'Python',
    category: 'Backend',
    description: 'Bahasa andalan untuk backend cerdas, data pipeline, dan integrasi AI.',
    icon: 'python',
    featured: false,
  },
  {
    name: 'Go',
    category: 'Backend',
    description: 'Bahasa terkompilasi dengan konkurensi native untuk sistem berlatensi rendah.',
    icon: 'go',
    featured: false,
  },

  // Mobile
  {
    name: 'Flutter',
    category: 'Mobile',
    description: 'Framework lintas platform dari Google untuk pengalaman aplikasi native 60fps.',
    icon: 'flutter',
    featured: true,
  },
  {
    name: 'React Native',
    category: 'Mobile',
    description: 'Solusi multi-platform berbasis React dengan fleksibilitas ekosistem luas.',
    icon: 'reactnative',
    featured: true,
  },
  {
    name: 'Kotlin',
    category: 'Mobile',
    description: 'Bahasa resmi Android modern untuk performa dan integrasi hardware optimal.',
    icon: 'kotlin',
    featured: false,
  },
  {
    name: 'Swift',
    category: 'Mobile',
    description: 'Pengembangan native iOS dengan performa maksimal dan UI higienis.',
    icon: 'swift',
    featured: false,
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Database relasional open-source tercanggih dengan reliabilitas ACID kuat.',
    icon: 'postgresql',
    featured: true,
  },
  {
    name: 'MySQL',
    category: 'Database',
    description: 'Database relasional terpercaya untuk transaksi aplikasi web dan bisnis.',
    icon: 'mysql',
    featured: true,
  },
  {
    name: 'Redis',
    category: 'Database',
    description: 'In-memory data store cepat untuk caching dan antrean pesan instan.',
    icon: 'redis',
    featured: true,
  },
  {
    name: 'MongoDB',
    category: 'Database',
    description: 'Dokumen NoSQL fleksibel untuk manajemen data tak terstruktur bervolume tinggi.',
    icon: 'mongodb',
    featured: false,
  },

  // Cloud & DevOps
  {
    name: 'AWS',
    category: 'Cloud & DevOps',
    description: 'Infrastruktur cloud global dengan spektrum layanan komputasi terlengkap.',
    icon: 'aws',
    featured: true,
  },
  {
    name: 'Docker',
    category: 'Cloud & DevOps',
    description: 'Kontainerisasi aplikasi untuk portabilitas konsisten dari dev hingga produksi.',
    icon: 'docker',
    featured: true,
  },
  {
    name: 'Kubernetes',
    category: 'Cloud & DevOps',
    description: 'Orkestrasi kontainer otomatis untuk skalabilitas tinggi dan auto-healing.',
    icon: 'kubernetes',
    featured: true,
  },
  {
    name: 'CI/CD Pipelines',
    category: 'Cloud & DevOps',
    description: 'Automasi build, testing, dan deployment kontinu dengan standar keamanan teruji.',
    icon: 'cicd',
    featured: false,
  },
];

export function getAllTechnologies(): Technology[] {
  return technologies;
}

export function getTechnologiesByCategory(category: TechCategory | 'All'): Technology[] {
  if (category === 'All') {
    return technologies;
  }
  return technologies.filter((tech) => tech.category === category);
}

export function getTechnologyCategories(): TechCategory[] {
  return techCategories;
}
