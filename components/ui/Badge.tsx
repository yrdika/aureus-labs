import { cn } from '~/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'outline';
  className?: string;
}

const variants = {
  default: 'bg-white/8 text-cream-200 border-white/12',
  gold: 'bg-gold-500/10 text-gold-400 border-gold-500/30',
  outline: 'bg-transparent text-cream-200/60 border-white/12',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-medium border tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
