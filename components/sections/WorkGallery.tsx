'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '~/components/ui/Badge';
import { ProjectMock } from '~/components/ui/Mockups';
import { Reveal } from '~/components/ui/Reveal';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { projects } from '~/data/projects';
import { useLanguage } from '~/lib/i18n/LanguageProvider';
import { cn } from '~/lib/utils';

export function WorkGallery() {
  const { t } = useLanguage();

  return (
    <div className="wrap">
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow={t.workPage.eyebrow}
          title={t.workPage.title}
          subtitle={t.workPage.intro}
        />
        <p className="mt-4 text-sm italic text-muted">{t.workPage.disclaimer}</p>
      </Reveal>

      <div className="mt-20 flex flex-col gap-24 md:gap-32">
        {projects.map((project, i) => {
          const copy = t.projects[project.slug];
          const flip = i % 2 === 1;
          return (
            <article key={project.slug} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className={cn('lg:col-span-7', flip && 'lg:order-2')}>
                <Link href={project.demoHref} className="group block" aria-label={`${t.workPage.openDemo}: ${copy.title}`}>
                  <div className="relative rounded-2xl border border-line bg-surface-2 p-6 md:p-10">
                    <Badge variant="accent" className="absolute left-5 top-5">
                      {t.work.badge}
                    </Badge>
                    <div className="mt-4 transition-transform duration-500 group-hover:-translate-y-1.5">
                      <ProjectMock slug={project.slug} />
                    </div>
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={100} className={cn('lg:col-span-5', flip && 'lg:order-1')}>
                <p className="label flex items-center gap-3">
                  <span className="text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true" className="h-px w-6 bg-line" />
                  {copy.category}
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">{copy.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted">{copy.description}</p>

                <h3 className="label mt-8">{t.workPage.goalsLabel}</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/90">
                  {copy.goals.map((goal) => (
                    <li key={goal} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 bg-accent" />
                      {goal}
                    </li>
                  ))}
                </ul>

                <h3 className="label mt-8">{t.workPage.featuresLabel}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {copy.features.map((feature) => (
                    <li key={feature}>
                      <Badge>{feature}</Badge>
                    </li>
                  ))}
                </ul>

                <h3 className="label mt-8">{t.workPage.stackLabel}</h3>
                <p className="mt-3 text-sm text-muted">{project.stack.join(' · ')}</p>

                <Link
                  href={project.demoHref}
                  className="mt-9 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {t.workPage.openDemo}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </Reveal>
            </article>
          );
        })}
      </div>
    </div>
  );
}
