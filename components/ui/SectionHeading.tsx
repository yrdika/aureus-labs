import { cn } from '~/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  index?: string;
  className?: string;
  as?: 'h1' | 'h2';
}

export function SectionHeading({ eyebrow, title, subtitle, index, className, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className="label flex items-center gap-3">
        {index && <span className="text-accent">{index}</span>}
        <span aria-hidden="true" className="inline-block h-px w-8 bg-line" />
        {eyebrow}
      </p>
      <Tag className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink text-balance md:text-5xl lg:text-[3.4rem]">
        {title}
      </Tag>
      {subtitle && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>}
    </div>
  );
}
