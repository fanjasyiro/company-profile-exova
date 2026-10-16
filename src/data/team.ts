import { TeamMember } from '@/types/team';

export const teamMembers: TeamMember[] = [
  {
    id: 'alexander-pratama',
    name: 'Alexander Pratama',
    position: 'Chief Executive Officer',
    description: '15+ tahun memimpin transformasi digital dan ekspansi strategis di industri teknologi enterprise Asia Tenggara.',
    photo: '/images/team-alexander.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'alexander@exova.com',
    },
  },
  {
    id: 'sarah-kusuma',
    name: 'Sarah Kusuma',
    position: 'Chief Technology Officer',
    description: 'Pakar arsitektur sistem terdistribusi, memimpin visi teknologi dan standar keunggulan rekayasa perangkat lunak.',
    photo: '/images/team-sarah.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'sarah@exova.com',
    },
  },
  {
    id: 'david-santoso',
    name: 'David Santoso',
    position: 'VP of Engineering',
    description: 'Mengorkestrasi tim rekayasa multidisiplin dalam menghadirkan sistem perbankan dan enterprise zero-downtime.',
    photo: '/images/team-alexander.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'jessica-wijaya',
    name: 'Jessica Wijaya',
    position: 'Head of Product Strategy',
    description: 'Menjembatani kebutuhan bisnis klien dengan inovasi produk digital yang berorientasi pada kepuasan pengguna.',
    photo: '/images/team-sarah.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'michael-tan',
    name: 'Michael Tan',
    position: 'Principal Cloud Architect',
    description: 'Spesialis infrastruktur multi-cloud AWS & Kubernetes dengan rekam jejak skalabilitas jutaan request per detik.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'dian-rahmawati',
    name: 'Dian Rahmawati',
    position: 'Lead DevSecOps & Security',
    description: 'Fokus pada kepatuhan keamanan data, otomasi CI/CD, dan ketahanan siber level institusi perbankan.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'dian@exova.com',
    },
  },
  {
    id: 'reza-firmansyah',
    name: 'Reza Firmansyah',
    position: 'Lead Frontend & Mobile',
    description: 'Mengembangkan pengalaman antarmuka modern berperforma tinggi lintas web dan mobile dengan standar aksesibilitas ketat.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'amanda-siregar',
    name: 'Amanda Siregar',
    position: 'Principal AI & Data Engineer',
    description: 'Mengembangkan pipeline data cerdas, analitik prediktif, dan solusi machine learning untuk optimalisasi proses bisnis.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
];

export function getAllTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
}
