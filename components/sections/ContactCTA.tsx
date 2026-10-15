import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '~/components/ui/Button';

export function ContactCTA() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="relative rounded-2xl border border-gold-500/15 overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gold-500/6 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-gold-500/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative px-8 py-14 md:px-14 md:py-20 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/25 bg-gold-500/8 text-gold-400 text-xs font-medium mb-8">
              <Mail size={12} />
              Open for new projects
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-cream-50 leading-tight tracking-tight">
              Ready to build<br />
              something great?
            </h2>
            <p className="mt-5 text-base text-cream-200/55 leading-relaxed">
              Tell us about your project. We respond within one business day with honest advice and, if it&apos;s a good fit, a clear proposal.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="mailto:ramadika305@gmail.com?subject=Project Inquiry — Aureus Labs"
                variant="primary"
                size="lg"
              >
                Discuss Your Project
                <ArrowRight size={16} />
              </Button>
              <Button
                as="a"
                href="/work"
                variant="outline"
                size="lg"
              >
                See Our Work First
              </Button>
            </div>

            <p className="mt-6 text-xs text-cream-200/30">
              ramadika305@gmail.com · No spam, no pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
