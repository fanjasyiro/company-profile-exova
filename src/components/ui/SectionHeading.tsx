import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  overline?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({ 
  title, 
  overline, 
  description, 
  className = '', 
  children,
  align = 'left' 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-10 ${alignmentClasses[align]} ${className}`}>
      {overline && (
        <span className="inline-block py-1 px-3 mb-4 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold tracking-wider uppercase">
          {overline}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
