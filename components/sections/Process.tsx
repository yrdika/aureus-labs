import { Search, Paintbrush, Code2, Rocket } from 'lucide-react';
import { SectionHeading } from '~/components/ui/SectionHeading';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'We start by understanding your business, your audience, and your goals. No templates, no guessing — just focused questions that lead to better output.',
  },
  {
    number: '02',
    icon: Paintbrush,
    title: 'Design',
    description:
      'High-fidelity mockups before a line of code. You review the visual direction, provide feedback, and approve before we build.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description:
      'Clean, semantic, fast. Built with modern tooling, optimised for performance, and structured so it\'s maintainable long-term.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      'Deployment to your hosting, domain setup, and a handoff package so you\'re never dependent on us for routine updates.',
  },
];

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="From brief to live in weeks, not months"
          subtitle="A focused four-stage process designed to minimise back-and-forth and maximise the quality of the final result."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(100%+10px)] w-[calc(100%-20px)] h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}

                <div className="card p-6 flex flex-col gap-4 relative z-10 h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-gold-500" />
                    </div>
                    <span className="text-2xl font-bold text-white/8 font-mono">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-cream-50 mb-2">{step.title}</h3>
                    <p className="text-sm text-cream-200/50 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
