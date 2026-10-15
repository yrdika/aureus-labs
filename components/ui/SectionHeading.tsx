import { cn } from '~/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={cn(isCenter ? 'text-center mx-auto' : 'text-left', 'max-w-2xl', className)}>
      {eyebrow && (
        <div className={cn('flex items-center gap-3 mb-5', isCenter && 'justify-center')}>
          {isCenter && <span className="inline-block w-6 h-px bg-gold-500" />}
          <span className="text-2xs font-semibold tracking-widest2 uppercase text-gold-500">
            {eyebrow}
          </span>
          {isCenter && <span className="inline-block w-6 h-px bg-gold-500" />}
          {!isCenter && <span className="inline-block w-6 h-px bg-gold-500" />}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-cream-50 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-cream-200/60 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
