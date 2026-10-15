import { MessageSquare, Smartphone, Wrench, Gauge } from 'lucide-react';
import { SectionHeading } from '~/components/ui/SectionHeading';

const reasons = [
  {
    icon: MessageSquare,
    title: 'Clear communication',
    description:
      'No jargon, no surprises. You get regular updates, honest timelines, and direct access throughout the project.',
  },
  {
    icon: Smartphone,
    title: 'Responsive by default',
    description:
      'Every layout is designed and tested across screen sizes. Mobile-first isn\'t a checkbox — it\'s the starting point.',
  },
  {
    icon: Wrench,
    title: 'Maintainable code',
    description:
      'Clean architecture means you can hand it to any developer later and they\'ll understand it. No lock-in, no black boxes.',
  },
  {
    icon: Gauge,
    title: 'Performance & usability',
    description:
      'Fast load times, good Lighthouse scores, and interfaces tested for real-world usability — not just pixel perfection.',
  },
];

export function WhyAureus() {
  return (
    <section id="about" className="section bg-charcoal-950/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <div>
            <SectionHeading
              eyebrow="Why Aureus Labs"
              title="Built for businesses that take quality seriously"
              subtitle="We're a focused studio, not an agency of hundreds. That means every project gets real attention, not a handoff to a junior."
              align="left"
            />
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-gold-500/20 bg-gold-500/6">
              <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-sm text-gold-400/80">Currently accepting new projects</span>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="card p-5 flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <Icon size={14} className="text-gold-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-cream-50">{reason.title}</h3>
                  <p className="text-sm text-cream-200/50 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
