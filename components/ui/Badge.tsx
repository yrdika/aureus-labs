import { cn } from '~/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

const variants = {
  default: 'bg-surface-2 text-ink',
  accent: 'bg-accent/12 text-accent border border-accent/30',
  outline: 'border border-line text-muted',
};

export function Badge({ children, variant = 'outline', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 font-mono text-2xs font-medium uppercase tracking-wide',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
