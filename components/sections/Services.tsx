import { LayoutTemplate, Building2, Zap, LayoutDashboard } from 'lucide-react';
import { SectionHeading } from '~/components/ui/SectionHeading';

const services = [
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description:
      'High-conversion single pages designed to turn traffic into leads, sign-ups, or sales. Every element serves a purpose.',
    accent: '#c9a84c',
  },
  {
    icon: Building2,
    title: 'Business Websites',
    description:
      'Professional multi-page sites for service businesses and startups that need to establish credibility fast.',
    accent: '#3b9e8c',
  },
  {
    icon: Zap,
    title: 'SaaS Websites',
    description:
      'Marketing sites built for software products — clearly communicating value, features, and pricing to the right audience.',
    accent: '#6366f1',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards & Web Interfaces',
    description:
      'Clean, usable frontend implementations for data-heavy applications, internal tools, and web app MVPs.',
    accent: '#f59e0b',
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="What we build"
          subtitle="Four focused disciplines. Each delivered with the same commitment to clarity, craft, and conversion."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="card p-7 group"
                style={{ '--accent': svc.accent } as React.CSSProperties}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${svc.accent}18`, border: `1px solid ${svc.accent}30` }}
                >
                  <Icon size={18} style={{ color: svc.accent }} />
                </div>
                <h3 className="text-base font-semibold text-cream-50 mb-2.5">{svc.title}</h3>
                <p className="text-sm text-cream-200/55 leading-relaxed">{svc.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
