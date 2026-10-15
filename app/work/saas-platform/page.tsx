import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, CheckCircle, Zap, Shield, Globe, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FlowMetric — Demo Project',
  description: 'A fictional SaaS marketing site concept built by Aureus Labs.',
};

const features = [
  { icon: BarChart3, title: 'Real-time Analytics', desc: 'See exactly how your business is performing with dashboards that update as events happen.', color: '#6366f1' },
  { icon: TrendingUp, title: 'Growth Forecasting', desc: 'AI-powered projections based on your historical data and industry benchmarks.', color: '#8b5cf6' },
  { icon: Users, title: 'Team Collaboration', desc: 'Share reports, annotate charts, and set goals across your entire organisation.', color: '#06b6d4' },
  { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 Type II certified. SSO, audit logs, and role-based permissions built in.', color: '#10b981' },
  { icon: Globe, title: 'Multi-source Data', desc: 'Connect your CRM, billing, ads, and more — 80+ integrations out of the box.', color: '#f59e0b' },
  { icon: Zap, title: 'Instant Setup', desc: 'Start tracking in under 10 minutes. No engineers required for basic setup.', color: '#ef4444' },
];

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    per: '/month',
    desc: 'For early-stage startups',
    features: ['Up to 5 users', '3 data sources', 'Core dashboards', '30-day history', 'Email support'],
    cta: 'Start free trial',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$99',
    per: '/month',
    desc: 'Most popular for scaling teams',
    features: ['Up to 25 users', 'Unlimited sources', 'Custom dashboards', '1-year history', 'AI forecasting', 'Priority support'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    desc: 'For large organisations',
    features: ['Unlimited users', 'Unlimited sources', 'White-labelling', 'Custom retention', 'SSO & audit logs', 'Dedicated CSM'],
    cta: 'Talk to sales',
    highlight: false,
  },
];

const testimonials = [
  { quote: 'FlowMetric replaced three separate tools for us. We saved over $400/month and now have a single source of truth.', name: 'Jamie Torres', role: 'VP Operations, Nexus Software', initials: 'JT' },
  { quote: 'The forecasting feature alone pays for itself. Our sales team can actually plan quarters now.', name: 'Mei Lin', role: 'CEO, Brightpath Labs', initials: 'ML' },
  { quote: 'Setup took 8 minutes. Not exaggerating. We were seeing live data before our next standup.', name: 'Ryan Osei', role: 'Head of Data, TrueScale', initials: 'RO' },
];

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes — all paid plans include a 14-day free trial, no credit card required. You can evaluate every feature before committing.' },
  { q: 'What data sources can I connect?', a: 'FlowMetric integrates with over 80 tools including Salesforce, HubSpot, Stripe, Google Ads, Facebook Ads, PostgreSQL, and Snowflake. Custom connectors are available on Enterprise.' },
  { q: 'How does pricing work?', a: 'All prices shown are illustrative and for demonstration purposes only. This is a fictional product concept.' },
  { q: 'Can I change plans later?', a: 'Yes — you can upgrade or downgrade at any time. Changes take effect at the next billing cycle.' },
];

export default function SaaSPage() {
  return (
    <div className="bg-[#09090f] text-gray-100 min-h-screen">
      {/* Demo notice */}
      <div className="bg-indigo-900/80 text-indigo-200 text-xs text-center py-2 px-4">
        <span className="font-semibold">Demo Project</span> — FlowMetric is a fictional SaaS concept built by{' '}
        <Link href="/" className="underline hover:text-white">Aureus Labs</Link>. Prices are illustrative only.{' '}
        <Link href="/work" className="underline hover:text-white">← Back to portfolio</Link>
      </div>

      {/* SaaS Navbar */}
      <header className="border-b border-white/8 sticky top-0 bg-[#09090f]/95 backdrop-blur-md z-40">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <BarChart3 size={14} className="text-white" />
            </div>
            <span className="font-bold text-white">Flow<span className="text-indigo-400">Metric</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            {['Features', 'Integrations', 'Pricing', 'Docs'].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-400 hover:text-white transition-colors hidden md:block">Log in</button>
            <button className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">
              Start free trial
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
            <Zap size={11} className="fill-current" />
            Now with AI-powered forecasting
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Your business data,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              finally clear.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            FlowMetric connects your tools, surfaces the metrics that matter, and helps your team make faster decisions with confidence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
              Start free — no card required
              <ArrowRight size={16} />
            </button>
            <button className="border border-white/15 text-gray-300 hover:text-white hover:border-white/30 font-medium px-8 py-3.5 rounded-xl transition-colors">
              See a live demo
            </button>
          </div>

          {/* Dashboard mockup */}
          <div className="mt-16 rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-indigo-950/50 bg-[#0f0f1a]">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a12] border-b border-white/8">
              <div className="flex gap-1.5">
                {['#ef4444','#f59e0b','#22c55e'].map((c, i) => <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-xs text-gray-600 font-mono">app.flowmetric.io/dashboard</span>
              </div>
            </div>
            <div className="p-5 grid grid-cols-4 gap-3">
              {[
                { label: 'MRR', value: '$124,820', trend: '+12.4%', up: true },
                { label: 'Active Users', value: '8,421', trend: '+8.1%', up: true },
                { label: 'Churn Rate', value: '1.8%', trend: '-0.3%', up: false },
                { label: 'NPS Score', value: '67', trend: '+4pts', up: true },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-[#1a1a2e] rounded-xl p-3 border border-indigo-900/30">
                  <p className="text-xs text-gray-500">{kpi.label}</p>
                  <p className="text-lg font-bold text-white mt-1">{kpi.value}</p>
                  <p className={`text-xs mt-0.5 font-medium ${kpi.up ? 'text-emerald-400' : 'text-red-400'}`}>{kpi.trend}</p>
                </div>
              ))}
            </div>
            <div className="px-5 pb-5">
              <div className="bg-[#1a1a2e] rounded-xl border border-indigo-900/30 h-28 flex items-center justify-center">
                <div className="w-full px-4 flex items-end gap-1 h-16">
                  {[40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 92].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `rgba(99,102,241,${0.3 + h/200})` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-600">Illustrative dashboard — sample data only</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-white/8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Everything your team needs</h2>
            <p className="mt-3 text-gray-500">No fluff. Just the features that drive better decisions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-6 rounded-2xl border border-white/8 bg-white/4 hover:border-white/16 transition-colors">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}>
                    <Icon size={18} style={{ color: f.color }} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#0d0d18] border-t border-white/8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Trusted by growing teams</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl border border-white/8 bg-white/4">
                <p className="text-sm text-gray-400 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">{t.initials}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-white">Simple, transparent pricing</h2>
            <p className="mt-2 text-gray-500 text-sm">All prices are illustrative — this is a demo project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {tiers.map((tier) => (
              <div key={tier.name} className={`rounded-2xl p-7 flex flex-col gap-5 ${tier.highlight ? 'bg-indigo-600 border-indigo-500' : 'bg-white/4 border-white/8'} border`}>
                <div>
                  <p className={`text-sm font-medium ${tier.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>{tier.name}</p>
                  <div className="flex items-end gap-1 mt-1">
                    <span className={`text-3xl font-bold ${tier.highlight ? 'text-white' : 'text-white'}`}>{tier.price}</span>
                    {tier.per && <span className={`text-sm mb-1 ${tier.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>{tier.per}</span>}
                  </div>
                  <p className={`text-xs mt-1 ${tier.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>{tier.desc}</p>
                </div>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${tier.highlight ? 'text-indigo-100' : 'text-gray-400'}`}>
                      <CheckCircle size={13} className={tier.highlight ? 'text-indigo-200' : 'text-indigo-500'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${tier.highlight ? 'bg-white text-indigo-700 hover:bg-indigo-50' : 'bg-indigo-600 text-white hover:bg-indigo-500'}`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#0d0d18] border-t border-white/8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Common questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((item) => (
              <details key={item.q} className="group border border-white/8 rounded-xl overflow-hidden bg-white/4">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer text-sm font-medium text-white hover:bg-white/4 transition-colors list-none">
                  {item.q}
                  <span className="text-indigo-400 group-open:rotate-45 transition-transform text-xl font-light ml-4">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Start your free trial today</h2>
          <p className="mt-4 text-gray-400">14 days, all features, no credit card. Cancel any time.</p>
          <button className="mt-8 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors mx-auto">
            Get started for free
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <div className="border-t border-white/8 py-5 px-6 text-center text-xs text-gray-600">
        Concept project by{' '}
        <Link href="/" className="text-gold-400 hover:text-gold-300 font-semibold">Aureus Labs</Link>
        {' '}— fictional product, illustrative content and prices only.
      </div>
    </div>
  );
}
