import { cn } from '~/lib/utils';

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-line bg-surface shadow-[0_28px_60px_-34px_rgb(0_0_0/0.45)]',
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink/20" />
          <span className="h-2 w-2 rounded-full bg-ink/20" />
          <span className="h-2 w-2 rounded-full bg-ink/20" />
        </div>
        <div className="mx-auto max-w-[70%] flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-2xs text-muted">
          {url}
        </div>
        <span className="w-9" />
      </div>
      <div className="aspect-[16/10] w-full [container-type:inline-size]">{children}</div>
    </div>
  );
}
