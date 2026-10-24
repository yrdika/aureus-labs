'use client';

import { Building2, LayoutDashboard, LayoutTemplate, Rocket, type LucideIcon } from 'lucide-react';
import { Badge } from '~/components/ui/Badge';
import { Reveal } from '~/components/ui/Reveal';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

const icons: LucideIcon[] = [LayoutTemplate, Building2, Rocket, LayoutDashboard];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="01" eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        </Reveal>

        <ol className="mt-16 border-b border-line">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title}>
                <Reveal delay={i * 60}>
                  <article className="group grid grid-cols-1 gap-6 border-t border-line py-9 md:grid-cols-12 md:gap-8 md:py-11">
                    <div className="flex items-center gap-4 md:col-span-1 md:flex-col md:items-start">
                      <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                      <Icon size={18} aria-hidden="true" className="text-muted transition-colors group-hover:text-ink" />
                    </div>
                    <h3 className="font-display text-3xl leading-tight tracking-tight text-ink md:col-span-5 md:text-4xl">
                      {item.title}
                    </h3>
                    <div className="md:col-span-6">
                      <p className="text-base leading-relaxed text-muted">{item.description}</p>
                      <p className="mt-5 text-sm text-ink/80">
                        <span className="label mr-2">{t.services.forLabel}</span>
                        {item.forWhom}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {item.deliverables.map((d) => (
                          <li key={d}>
                            <Badge>{d}</Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
