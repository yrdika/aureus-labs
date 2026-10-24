'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '~/components/ui/Badge';
import { ProjectMock } from '~/components/ui/Mockups';
import { Reveal } from '~/components/ui/Reveal';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { projects } from '~/data/projects';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

export function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading index="03" eyebrow={t.work.eyebrow} title={t.work.title} subtitle={t.work.subtitle} />
          </Reveal>
          <Reveal>
            <Link
              href="/work"
              className="inline-flex shrink-0 items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t.work.viewAll}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => {
            const copy = t.projects[project.slug];
            return (
              <Reveal key={project.slug} delay={i * 90}>
                <Link href={project.demoHref} className="group flex h-full flex-col">
                  <div className="relative overflow-hidden rounded-2xl border border-line bg-surface-2 p-5 pb-0 pt-8">
                    <Badge variant="accent" className="absolute left-4 top-4">
                      {t.work.badge}
                    </Badge>
                    <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                      <ProjectMock slug={project.slug} className="rounded-b-none border-b-0" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col pt-5">
                    <p className="label">{copy.category}</p>
                    <div className="mt-2 flex items-start justify-between gap-3">
                      <h3 className="font-display text-3xl leading-tight text-ink transition-colors group-hover:text-accent">
                        {copy.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="mt-1.5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{copy.short}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Badge>{tag}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
