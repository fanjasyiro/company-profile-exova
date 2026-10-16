import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { TeamSection } from '@/components/sections/TeamSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TechnologySection />
      <TeamSection />
    </main>
  );
}
