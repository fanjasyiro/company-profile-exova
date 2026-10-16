import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'banking-digital-platform',
    title: 'Banking Digital Platform',
    client: 'Financial Institution',
    category: 'Fintech & Core Banking',
    description: 'Transformasi arsitektur perbankan modern yang memfasilitasi transaksi real-time, integrasi payment gateway terpusat, dan otentikasi biometrik multi-layer.',
    image: '/images/project-banking.jpg',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker'],
    year: '2024',
    overview: 'Proyek ini dirancang untuk merevolusi layanan perbankan ritel konvensional menjadi ekosistem digital yang tangguh, aman, dan dapat melayani jutaan nasabah secara simultan tanpa downtime.',
    challenge: 'Sistem warisan (legacy) sebelumnya mengalami latensi tinggi selama jam sibuk transaksi bulanan dan sulit berintegrasi dengan pihak ketiga secara aman.',
    solution: 'Kami merestrukturisasi backend menggunakan arsitektur microservices berbasis Spring Boot, mengimplementasikan caching Redis multi-tingkat, dan membangun antarmuka web Angular yang responsif dengan standar keamanan PCI-DSS.',
    results: [
      'Peningkatan kecepatan proses transaksi hingga 300%',
      'Tingkat ketersediaan sistem mencapai 99.99%',
      'Penurunan rasio tiket kendala transaksi sebesar 45%',
    ],
  },
  {
    slug: 'global-supply-chain-ecosystem',
    title: 'Global Supply Chain Ecosystem',
    client: 'LogiTrans International',
    category: 'Logistics & Supply Chain',
    description: 'Platform manajemen logistik terintegrasi untuk pelacakan armada kapal kontainer global, pemantauan status kargo, dan analitik rute pengiriman otomatis.',
    image: '/images/project-logistics.jpg',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Kafka'],
    year: '2024',
    overview: 'Sistem kendali operasi logistik lintas benua yang menghubungkan lebih dari 120 pelabuhan dan ribuan armada pengiriman dalam satu dasbor terpadu.',
    challenge: 'Penyebaran data telemetri kargo terfragmentasi antar sistem regional yang berbeda, menyebabkan keterlambatan update pelacakan dan inefisiensi bahan bakar rute.',
    solution: 'Membangun pipeline event streaming menggunakan Apache Kafka dan backend Node.js berefisiensi tinggi, dipadukan dengan portal pelacakan real-time berbasis Next.js App Router.',
    results: [
      'Visibilitas armada real-time 100% di seluruh rute laut internasional',
      'Efisiensi bahan bakar meningkat 14% berkat optimasi rute cerdas',
      'Waktu respons notifikasi insiden kargo terpangkas dari 3 jam ke hitungan detik',
    ],
  },
  {
    slug: 'integrated-telehealth-portal',
    title: 'Integrated Health & Telemedicine Hub',
    client: 'Medika Nusantara Healthcare',
    category: 'Healthcare & MedTech',
    description: 'Portal rekam medis elektronik terenkripsi dan layanan konsultasi dokter daring yang menghubungkan jaringan rumah sakit terkemuka di Indonesia.',
    image: '/images/project-health.jpg',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    year: '2023',
    overview: 'Solusi perawatan kesehatan terpadu yang memadukan telekonsultasi video berlatensi rendah, integrasi resep obat langsung ke farmasi, dan sinkronisasi rekam medis.',
    challenge: 'Perlindungan privasi data medis pasien yang ketat (kepatuhan regulasi kesehatan) serta kebutuhan sinkronisasi jadwal ribuan spesialis di belasan cabang rumah sakit.',
    solution: 'Penerapan enkripsi end-to-end pada modul konsultasi, backend FastAPI yang asinkron dan terukur, serta integrasi protokol HL7/FHIR untuk standarisasi pertukaran data medis.',
    results: [
      'Melayani lebih dari 150.000 sesi telekonsultasi aktif per kuartal',
      'Peringkat kepuasan pasien mencapai 4.8 / 5.0 bintang',
      'Waktu tunggu administrasi pasien rawat jalan berkurang hingga 60%',
    ],
  },
  {
    slug: 'smart-city-iot-grid',
    title: 'Smart City Grid & IoT Monitoring',
    client: 'Metropolis Urban Development',
    category: 'IoT & Smart Cities',
    description: 'Dasbor komando kota cerdas untuk memantau jaringan distribusi listrik, sensor kualitas udara lingkungan, dan pengelolaan armada utilitas publik secara real-time.',
    image: '/images/project-smartcity.jpg',
    technologies: ['Vue.js', 'Golang', 'InfluxDB', 'MQTT', 'Tailwind CSS'],
    year: '2023',
    overview: 'Pusat operasi kota digital yang menyatukan ratusan ribu sensor IoT perkotaan guna membantu pengambil kebijakan merespons kebutuhan publik lebih tanggap.',
    challenge: 'Mengolah volume data sensor deret waktu (time-series) dalam skala masif tanpa mengorbankan kecepatan render visualisasi spasial peta kota.',
    solution: 'Mengembangkan ingestion engine menggunakan Golang dengan protokol MQTT berkecepatan tinggi, penyimpanan data deret waktu di InfluxDB, dan visualisasi pemetaan modular.',
    results: [
      'Pemantauan lebih dari 145.000 titik sensor aktif perkotaan secara berkesinambungan',
      'Penghematan konsumsi daya lampu jalan umum sebesar 22% secara otomatis',
      'Deteksi dini gangguan jaringan listrik publik dalam waktu kurang dari 1 menit',
    ],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
