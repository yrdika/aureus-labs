'use client';

import { Code2, Paintbrush, Rocket, Search, type LucideIcon } from 'lucide-react';
import { Reveal } from '~/components/ui/Reveal';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

const icons: LucideIcon[] = [Search, Paintbrush, Code2, Rocket];

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section border-t border-line bg-surface">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="04" eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />
        </Reveal>

        <ol className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title}>
                <Reveal delay={i * 90} className="relative h-full border-t border-ink/70 pt-7">
                  <span aria-hidden="true" className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-accent" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <Icon size={18} aria-hidden="true" className="text-muted" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl leading-tight text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
