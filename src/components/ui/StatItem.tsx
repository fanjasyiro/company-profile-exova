interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

export function StatItem({ value, label, className = '' }: StatItemProps) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <span className="text-4xl font-bold text-[var(--primary)] mb-2">{value}</span>
      <span className="text-sm font-medium text-[var(--muted-foreground)] uppercase tracking-wider">{label}</span>
    </div>
  );
}
