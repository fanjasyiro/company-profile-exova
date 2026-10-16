import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TeamCard } from '@/components/team/TeamCard';
import { getAllTeamMembers } from '@/data/team';
import { TeamMember } from '@/types/team';

interface TeamSectionProps {
  members?: TeamMember[];
  showHeading?: boolean;
  className?: string;
}

export function TeamSection({
  members: customMembers,
  showHeading = true,
  className = '',
}: TeamSectionProps) {
  const memberList = customMembers || getAllTeamMembers();

  return (
    <Section className={`border-t border-[var(--border)] bg-[var(--background)] py-16 md:py-24 ${className}`}>
      <Container>
        {showHeading && (
          <div className="mb-12 text-center flex flex-col items-center">
            <SectionHeading
              overline="Tim & Kepemimpinan"
              title="Ditenagai oleh Para Ahli Berdedikasi"
              description="Para profesional dan insinyur berpengalaman yang berkolaborasi menghadirkan solusi teknologi mutakhir dengan standar integritas dan keunggulan tertinggi."
              align="center"
              className="max-w-3xl"
            />
          </div>
        )}

        {/* Responsive Grid: 4 cols Desktop, 2 cols Tablet, 1 col Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {memberList.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
