import { cn } from '~/lib/utils';

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn('h-7 w-7', className)} aria-hidden="true">
      <path d="M7 25 L16 7 L25 25" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" />
      <path d="M11 19.5 H21" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" />
      <circle cx="16" cy="7" r="2.6" className="fill-accent" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 text-ink', className)}>
      <LogoMark />
      <span className="font-display text-[1.45rem] leading-none tracking-tight">
        Aureus <span className="italic text-muted">Labs</span>
      </span>
    </span>
  );
}
