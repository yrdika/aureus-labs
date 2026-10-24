'use client';

import { ArrowRight, Check } from 'lucide-react';
import { Button } from '~/components/ui/Button';
import { ProjectMock } from '~/components/ui/Mockups';
import { Reveal } from '~/components/ui/Reveal';
import { useLanguage } from '~/lib/i18n/LanguageProvider';
import { SITE } from '~/lib/site';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--line)/0.55)_1px,transparent_1px)] bg-[size:25%_100%] [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]"
      />

      <div className="wrap relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label flex items-center gap-3">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                {t.hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[3rem] leading-[0.98] tracking-tight text-ink text-balance sm:text-6xl lg:text-[5.4rem]">
                {t.hero.titleLead}
                <br />
                <span className="italic text-accent">{t.hero.titleEmphasis}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{t.hero.description}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/work" size="lg">
                  {t.hero.ctaPrimary}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <Button
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(t.contact.form.mail.subject)}`}
                  variant="outline"
                  size="lg"
                >
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
                {t.hero.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 font-mono text-2xs uppercase tracking-label text-muted">
                    <Check size={12} aria-hidden="true" className="text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <figure>
              <div className="relative aspect-[10/9] w-full">
                <div className="absolute left-0 top-0 w-[88%] animate-float motion-reduce:animate-none">
                  <ProjectMock slug="dental-clinic" />
                </div>
                <div className="absolute bottom-0 right-0 w-[64%] animate-float-slow motion-reduce:animate-none">
                  <ProjectMock slug="analytics-dashboard" />
                </div>
              </div>
              <figcaption className="label mt-5 flex items-center gap-3">
                <span className="text-accent">{t.hero.figure} 01</span>
                <span aria-hidden="true" className="h-px w-6 bg-line" />
                {t.hero.stageCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
