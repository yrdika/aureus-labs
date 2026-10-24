'use client';

import { ArrowRight, BarChart3, CheckCircle, Globe, Shield, TrendingUp, Users, Zap, type LucideIcon } from 'lucide-react';
import { DemoBar, DemoCredit } from '~/components/demos/DemoChrome';
import { PageMeta } from '~/components/PageMeta';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

const featureMeta: { icon: LucideIcon; color: string }[] = [
  { icon: BarChart3, color: '#818cf8' },
  { icon: TrendingUp, color: '#a78bfa' },
  { icon: Users, color: '#22d3ee' },
  { icon: Shield, color: '#34d399' },
  { icon: Globe, color: '#fbbf24' },
  { icon: Zap, color: '#f87171' },
];

const kpiUp = [true, true, false, true];
const chartBars = [40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 92];

export function SaasPlatform() {
  const { t } = useLanguage();
  const s = t.saas;

  return (
    <>
      <PageMeta page="saas" />
      <DemoBar name={t.projects['saas-platform'].title} notice={s.notice} />

      <div className="relative z-10 min-h-screen bg-[#09090f] text-gray-100">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090f]/95 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
                <BarChart3 size={14} aria-hidden="true" className="text-white" />
              </div>
              <span className="font-bold text-white">
                Flow<span className="text-indigo-400">Metric</span>
              </span>
            </div>
            <div className="hidden items-center gap-6 text-sm text-gray-400 md:flex">
              {s.nav.map((label) => (
                <a key={label} href="#" onClick={(e) => e.preventDefault()} className="transition-colors hover:text-white">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="hidden text-sm text-gray-400 transition-colors hover:text-white md:block">{s.login}</button>
              <button type="button" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500">
                {s.trial}
              </button>
            </div>
          </nav>
        </header>

        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.15),transparent)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
              <Zap size={11} aria-hidden="true" className="fill-current" />
              {s.badge}
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              {s.titleLead}
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">{s.titleEmphasis}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">{s.description}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button type="button" className="flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-indigo-500">
                {s.ctaPrimary}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <button type="button" className="rounded-xl border border-white/15 px-8 py-3.5 font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white">
                {s.ctaSecondary}
              </button>
            </div>

            <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f1a] shadow-2xl shadow-indigo-950/50" aria-hidden="true">
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#0a0a12] px-4 py-3">
                <div className="flex gap-1.5">
                  {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
                    <div key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <div className="flex flex-1 justify-center">
                  <span className="font-mono text-xs text-gray-400">app.flowmetric.example/dashboard</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-4">
                {s.kpis.map((kpi, i) => (
                  <div key={kpi.label} className="rounded-xl border border-indigo-900/40 bg-[#1a1a2e] p-3 text-left">
                    <p className="text-xs text-gray-400">{kpi.label}</p>
                    <p className="mt-1 text-lg font-bold text-white">{kpi.value}</p>
                    <p className={`mt-0.5 text-xs font-medium ${kpiUp[i] ? 'text-emerald-400' : 'text-red-400'}`}>{kpi.trend}</p>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="flex h-28 items-center justify-center rounded-xl border border-indigo-900/40 bg-[#1a1a2e]">
                  <div className="flex h-16 w-full items-end gap-1 px-4">
                    {chartBars.map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `rgba(99,102,241,${0.3 + h / 200})` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-400">{s.sampleNote}</p>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">{s.featuresTitle}</h2>
              <p className="mt-3 text-gray-400">{s.featuresSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {s.features.map((feature, i) => {
                const { icon: Icon, color } = featureMeta[i];
                return (
                  <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                      <Icon size={18} aria-hidden="true" style={{ color }} />
                    </div>
                    <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0d0d18] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white">{s.testimonialsTitle}</h2>
              <p className="mt-2 text-xs italic text-gray-400">{s.testimonialsNote}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {s.testimonials.map((item) => (
                <figure key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <blockquote className="text-sm italic leading-relaxed text-gray-300">&ldquo;{item.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white" aria-hidden="true">
                      {item.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 text-center">
              <h2 className="text-3xl font-bold text-white">{s.pricingTitle}</h2>
              <p className="mt-2 text-sm text-gray-400">{s.pricingNote}</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {s.tiers.map((tier, i) => {
                const highlight = i === 1;
                return (
                  <div
                    key={tier.name}
                    className={`flex flex-col gap-5 rounded-2xl border p-7 ${highlight ? 'border-indigo-500 bg-indigo-600' : 'border-white/10 bg-white/[0.04]'}`}
                  >
                    <div>
                      <p className={`text-sm font-medium ${highlight ? 'text-indigo-100' : 'text-gray-400'}`}>{tier.name}</p>
                      <div className="mt-1 flex items-end gap-1">
                        <span className="text-3xl font-bold text-white">{tier.price}</span>
                        {i < 2 && <span className={`mb-1 text-sm ${highlight ? 'text-indigo-100' : 'text-gray-400'}`}>{s.perMonth}</span>}
                      </div>
                      <p className={`mt-1 text-xs ${highlight ? 'text-indigo-100' : 'text-gray-400'}`}>{tier.desc}</p>
                    </div>
                    <ul className="flex flex-1 flex-col gap-2.5">
                      {tier.features.map((feat) => (
                        <li key={feat} className={`flex items-center gap-2 text-sm ${highlight ? 'text-indigo-50' : 'text-gray-300'}`}>
                          <CheckCircle size={13} aria-hidden="true" className={highlight ? 'text-indigo-100' : 'text-indigo-400'} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${highlight ? 'bg-white text-indigo-700 hover:bg-indigo-50' : 'bg-indigo-600 text-white hover:bg-indigo-500'}`}
                    >
                      {tier.cta}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0d0d18] px-6 py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">{s.faqTitle}</h2>
            <div className="flex flex-col gap-3">
              {s.faqs.map((item) => (
                <details key={item.q} className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-white/[0.04]">
                    {item.q}
                    <span aria-hidden="true" className="ml-4 text-xl font-light text-indigo-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-400">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-white">{s.ctaTitle}</h2>
            <p className="mt-4 text-gray-400">{s.ctaBody}</p>
            <button type="button" className="mx-auto mt-8 flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-indigo-500">
              {s.ctaButton}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </section>
      </div>

      <DemoCredit />
    </>
  );
}
