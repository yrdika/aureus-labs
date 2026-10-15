import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from '~/components/layout/Navbar';
import { Footer } from '~/components/layout/Footer';
import { Badge } from '~/components/ui/Badge';
import { projects } from '~/data/projects';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected concept projects showcasing Aureus Labs\' capabilities across landing pages, SaaS sites, and dashboard interfaces.',
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-gold-500" />
              <span className="text-2xs font-semibold tracking-widest2 uppercase text-gold-500">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-cream-50 leading-tight tracking-tight">
              Selected work
            </h1>
            <p className="mt-4 text-base text-cream-200/60 leading-relaxed">
              Original concept projects built to demonstrate what Aureus Labs delivers. Each represents a distinct design brief and industry context.
            </p>
            <p className="mt-3 text-sm text-cream-200/35 italic">
              These are demonstrational projects — not real client engagements.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={project.demoHref}
                className="card group flex flex-col overflow-hidden"
              >
                {/* Preview */}
                <div className={`h-52 bg-gradient-to-br ${project.previewBg} relative overflow-hidden flex items-end p-4`}>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at 60% 40%, ${project.accentColor}25 0%, transparent 70%)` }}
                  />
                  <div className="relative flex items-center justify-between w-full">
                    <span
                      className="text-2xs font-semibold tracking-widest2 uppercase px-3 py-1 rounded-full border"
                      style={{ color: project.accentColor, borderColor: `${project.accentColor}40`, background: `${project.accentColor}15` }}
                    >
                      {project.category}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: project.accentColor }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h2 className="text-base font-semibold text-cream-50 group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-cream-200/50 leading-relaxed flex-1">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/8">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
