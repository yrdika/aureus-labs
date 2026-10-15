import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { Badge } from '~/components/ui/Badge';
import { projects } from '~/data/projects';

export function SelectedWork() {
  return (
    <section id="work" className="section bg-charcoal-950/50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Selected Work"
            title="Concept projects"
            subtitle="Three original demos built to showcase what Aureus Labs delivers across different industries."
            align="left"
          />
          <Link
            href="/work"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm text-gold-500 hover:text-gold-400 transition-colors font-medium"
          >
            View all work
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.demoHref}
              className="card group flex flex-col overflow-hidden"
            >
              {/* Preview */}
              <div
                className={`h-44 bg-gradient-to-br ${project.previewBg} flex items-center justify-center relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${project.accentColor}20 0%, transparent 70%)` }}
                />
                <span
                  className="text-2xs font-semibold tracking-widest2 uppercase px-3 py-1.5 rounded-full border"
                  style={{ color: project.accentColor, borderColor: `${project.accentColor}40`, background: `${project.accentColor}12` }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-cream-50 leading-snug group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="text-cream-200/30 group-hover:text-gold-500 transition-all duration-200 flex-shrink-0 mt-0.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <p className="text-sm text-cream-200/50 leading-relaxed">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
