export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}

export interface FooterData {
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  socialLinks: SocialLink[];
  companyLinks: FooterLink[];
  servicesLinks: FooterLink[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  legalLinks: FooterLink[];
}
