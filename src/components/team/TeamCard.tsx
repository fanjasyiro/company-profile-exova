import React from 'react';
import Image from 'next/image';
import { Mail, User } from 'lucide-react';
import { TeamMember } from '@/types/team';

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className = '' }: TeamCardProps) {
  // Extract initials for fallback avatar
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-lg ${className}`}
    >
      <div>
        {/* Photo Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--secondary)]">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[var(--secondary)] to-[var(--muted)] text-[var(--muted-foreground)]">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--card)] text-xl font-bold tracking-wider text-[var(--primary)] shadow-sm">
                {initials || <User className="h-8 w-8" />}
              </span>
            </div>
          )}

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Member Details */}
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
            {member.position}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
            {member.name}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted-foreground)] line-clamp-3">
            {member.description}
          </p>
        </div>
      </div>

      {/* Social Links - Discreet and Non-dominant */}
      {member.social && (
        <div className="flex items-center gap-3 border-t border-[var(--border)]/70 px-5 py-3">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.57a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
              </svg>
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on GitHub`}
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on Twitter / X`}
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
          {member.social.email && (
            <a
              href={`mailto:${member.social.email}`}
              aria-label={`Email ${member.name}`}
              className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
