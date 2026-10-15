import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '~/components/ui/Button';
import { BrowserFrame } from '~/components/ui/BrowserFrame';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-lines bg-grid opacity-100"
        aria-hidden="true"
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/8 text-gold-400 text-xs font-medium mb-8">
              <Sparkles size={12} />
              Independent Digital Studio
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-cream-50 leading-[1.1] tracking-tight">
              Digital
              <br />
              <span className="text-gold-shimmer">Experiences,</span>
              <br />
              Built with
              <br />
              Purpose.
            </h1>

            <p className="mt-6 text-base md:text-lg text-cream-200/60 leading-relaxed max-w-md">
              We design and build modern websites that help businesses communicate clearly, build trust, and grow online.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button as="a" href="/work" variant="primary" size="lg">
                Explore Our Work
                <ArrowRight size={16} />
              </Button>
              <Button
                as="a"
                href="mailto:ramadika305@gmail.com?subject=Project Inquiry"
                variant="outline"
                size="lg"
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Social proof line */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {['B', 'S', 'M', 'A'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-charcoal-900 flex items-center justify-center text-2xs font-semibold text-charcoal-900"
                    style={{ background: ['#c9a84c','#3b9e8c','#6366f1','#f59e0b'][i] }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-xs text-cream-200/40">
                Trusted by growing businesses
              </p>
            </div>
          </div>

          {/* Right: browser mockup stack */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Back card */}
              <div className="absolute -top-6 -right-4 w-full opacity-40 scale-95 origin-bottom-right">
                <BrowserFrame accent="#6366f1">
                  <div className="h-48 bg-gradient-to-br from-indigo-900/60 to-charcoal-800 p-4">
                    <div className="flex gap-2 mb-3">
                      {[60, 80, 40].map((w, i) => (
                        <div key={i} className="h-2 rounded-full bg-white/10" style={{ width: `${w}px` }} />
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-16 rounded-lg bg-indigo-500/10 border border-indigo-500/20" />
                      ))}
                    </div>
                  </div>
                </BrowserFrame>
              </div>

              {/* Front card */}
              <div className="relative z-10">
                <BrowserFrame accent="#3b9e8c">
                  <div className="h-56 bg-gradient-to-br from-teal-900/50 to-charcoal-800 p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30" />
                      <div className="flex flex-col gap-1.5">
                        <div className="h-2 w-24 rounded-full bg-white/15" />
                        <div className="h-1.5 w-16 rounded-full bg-white/8" />
                      </div>
                    </div>
                    <div className="h-px bg-white/8 my-1" />
                    <div className="flex flex-col gap-2">
                      {[80, 60, 70].map((w, i) => (
                        <div key={i} className="h-2 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                    <div className="mt-auto flex gap-2">
                      <div className="h-8 w-28 rounded-lg bg-teal-500/25 border border-teal-500/30" />
                      <div className="h-8 w-20 rounded-lg bg-white/6 border border-white/10" />
                    </div>
                  </div>
                </BrowserFrame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
