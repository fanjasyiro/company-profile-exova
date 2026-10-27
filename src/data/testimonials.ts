import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'testi-1',
    quote:
      'Exova berhasil mentransformasi platform core banking kami dengan tingkat keandalan yang luar biasa. Migrasi sistem berjalan mulus tanpa downtime, dan waktu pemrosesan transaksi kami meningkat hingga 300%.',
    person: 'Bambang Sudarmono',
    position: 'Chief Information Officer',
    company: 'Bank Nusantara Internasional',
    rating: 5,
  },
  {
    id: 'testi-2',
    quote:
      'Solusi IoT dan real-time tracking dari Exova memberikan visibilitas penuh terhadap 1.200 armada logistik kami. Efisiensi rute dan penghematan bahan bakar langsung terasa pada kuartal pertama implementasi.',
    person: 'Dewi Lestari',
    position: 'VP of Operations & Supply Chain',
    company: 'Logistik Prima Express',
    rating: 5,
  },
  {
    id: 'testi-3',
    quote:
      'Kolaborasi dengan tim Exova sangat responsif dan berorientasi pada kepatuhan data medis (HIPAA). Sistem Electronic Health Record terintegrasi kami kini melayani lebih dari 500.000 pasien setiap bulannya.',
    person: 'dr. Hendra Wicaksana, Sp.A',
    position: 'Director of Digital Transformation',
    company: 'Medika Sejahtera Hospital Network',
    rating: 5,
  },
  {
    id: 'testi-4',
    quote:
      'Platform Smart City Command Center yang dibangun Exova mengubah cara pemerintah daerah merespons aduan warga. Integrasi sensor lingkungan dan analitik lalu lintas sangat akurat dan mudah dioperasikan.',
    person: 'Rina Kusuma Dewi, S.T., M.Sc.',
    position: 'Kepala Dinas Komunikasi & Informatika',
    company: 'Pemerintah Kota Metropolitan',
    rating: 5,
  },
  {
    id: 'testi-5',
    quote:
      'Arsitektur cloud native dan mikroservis yang dirancang Exova mampu menahan lonjakan trafik Black Friday dan Harbolnas hingga 10x lipat tanpa kendala latensi sedikit pun. Sangat direkomendasikan.',
    person: 'Kevin Christian',
    position: 'Head of Engineering',
    company: 'BelanjaMudah Marketplace',
    rating: 5,
  },
  {
    id: 'testi-6',
    quote:
      'Pendekatan engineering Exova sangat terstruktur dan berstandar internasional. Sistem automasi pemeliharaan prediktif pabrik kami berhasil memangkas unplanned downtime sebesar 42%.',
    person: 'Arif Prasetyo',
    position: 'General Manager of Plant Operations',
    company: 'PT Petro Chem Energi',
    rating: 5,
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((item) => item.id === id);
}
