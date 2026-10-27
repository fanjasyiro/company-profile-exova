import { FooterData } from '@/types';

export const footerData: FooterData = {
  company: {
    name: 'Exova Technology',
    tagline: 'Enterprise Digital Solutions',
    description:
      'Perusahaan teknologi enterprise terdepan yang menghadirkan solusi transformasi digital, arsitektur cloud berkinerja tinggi, dan inovasi software berskala global.',
  },
  socialLinks: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/exova-technology',
      ariaLabel: 'Kunjungi LinkedIn Exova Technology',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/exovatech',
      ariaLabel: 'Kunjungi Instagram Exova Technology',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/exovatech',
      ariaLabel: 'Kunjungi Facebook Exova Technology',
    },
    {
      name: 'X',
      href: 'https://x.com/exovatech',
      ariaLabel: 'Kunjungi akun X (Twitter) Exova Technology',
    },
  ],
  companyLinks: [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Tim Ahli', href: '/#team' },
    { label: 'Karir & Budaya', href: '/#careers' },
  ],
  servicesLinks: [
    { label: 'Layanan', href: '/services' },
    { label: 'Portofolio', href: '/portfolio' },
    { label: 'Blog & Insight', href: '/blog' },
    { label: 'Kontak', href: '/contact' },
  ],
  contact: {
    email: 'contact@exova.id',
    phone: '+62 (21) 5208-900',
    address: 'Exova Tower Lt. 18, SCBD Kav. 52-53, Jakarta Selatan',
  },
  legalLinks: [
    { label: 'Kebijakan Privasi', href: '/privacy' },
    { label: 'Syarat & Ketentuan', href: '/terms' },
  ],
};

export function getFooterData(): FooterData {
  return footerData;
}
