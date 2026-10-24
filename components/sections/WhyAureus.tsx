'use client';

import { Gauge, MessageSquare, Smartphone, Wrench, type LucideIcon } from 'lucide-react';
import { Reveal } from '~/components/ui/Reveal';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

const icons: LucideIcon[] = [MessageSquare, Smartphone, Wrench, Gauge];

export function WhyAureus() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading index="05" eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
              <p className="mt-10 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-3 text-sm text-ink">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                {t.why.availability}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2">
              {t.why.reasons.map((reason, i) => {
                const Icon = icons[i];
                return (
                  <li key={reason.title} className="border-b border-r border-line">
                    <Reveal delay={i * 70} className="h-full p-7 md:p-8">
                      <Icon size={20} aria-hidden="true" className="text-accent" />
                      <h3 className="mt-6 font-display text-2xl text-ink">{reason.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{reason.description}</p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
