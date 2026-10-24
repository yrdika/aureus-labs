'use client';

import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from '~/components/ui/Reveal';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { useLanguage } from '~/lib/i18n/LanguageProvider';
import { cn } from '~/lib/utils';

export function FAQSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section border-t border-line bg-surface">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading index="06" eyebrow={t.faq.eyebrow} title={t.faq.title} />
          </Reveal>

          <div className="lg:col-span-8">
            <ul className="border-b border-line">
              {t.faq.items.map((item, i) => {
                const isOpen = open === i;
                const buttonId = `${baseId}-q-${i}`;
                const panelId = `${baseId}-a-${i}`;
                return (
                  <li key={item.q} className="border-t border-line">
                    <Reveal delay={i * 60}>
                      <h3>
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        >
                          <span className={cn('font-display text-2xl leading-snug transition-colors md:text-[1.7rem]', isOpen ? 'text-accent' : 'text-ink')}>
                            {item.q}
                          </span>
                          <Plus
                            size={20}
                            aria-hidden="true"
                            className={cn('shrink-0 text-muted transition-transform duration-300', isOpen && 'rotate-45 text-accent')}
                          />
                        </button>
                      </h3>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        inert={!isOpen}
                        className={cn(
                          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-2xl pb-7 text-base leading-relaxed text-muted">{item.a}</p>
                        </div>
                      </div>
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
