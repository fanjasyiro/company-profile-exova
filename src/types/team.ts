export interface TeamSocial {
  linkedin?: string;
  github?: string;
  twitter?: string;
  email?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  photo?: string;
  social?: TeamSocial;
}
