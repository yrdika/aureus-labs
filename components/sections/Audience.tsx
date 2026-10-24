'use client';

import { Reveal } from '~/components/ui/Reveal';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

export function Audience() {
  const { t } = useLanguage();

  return (
    <section className="section border-y border-line bg-surface">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="02" eyebrow={t.audience.eyebrow} title={t.audience.title} />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {t.audience.items.map((item, i) => (
            <Reveal key={item.who} delay={i * 80} className="bg-surface">
              <article className="flex h-full flex-col gap-6 p-7 md:p-8">
                <h3 className="font-display text-2xl leading-tight text-ink md:text-[1.75rem]">{item.who}</h3>
                <div>
                  <p className="label">{t.audience.problemLabel}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.problem}</p>
                </div>
                <div className="mt-auto border-l-2 border-accent pl-4">
                  <p className="label text-accent">{t.audience.solutionLabel}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{item.solution}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
