'use client';

import { Baby, Calendar, CheckCircle2, MapPin, Phone, ShieldCheck, Siren, Smile, Sparkles, Star, Stethoscope, type LucideIcon } from 'lucide-react';
import { DemoBar, DemoCredit } from '~/components/demos/DemoChrome';
import { PageMeta } from '~/components/PageMeta';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

const serviceIcons: LucideIcon[] = [Stethoscope, Sparkles, Smile, ShieldCheck, Baby, Siren];
const doctorMeta = [
  { initials: 'SC', years: 14, color: '#2a9d8f' },
  { initials: 'MO', years: 11, color: '#4f46e5' },
  { initials: 'PN', years: 8, color: '#d97706' },
];

export function DentalClinic() {
  const { t } = useLanguage();
  const d = t.dental;

  return (
    <>
      <PageMeta page="dental" />
      <DemoBar name={t.projects['dental-clinic'].title} notice={d.notice} />

      <div className="relative z-10 min-h-screen bg-[#f8fffe] text-gray-900">
        <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">B</div>
              <span className="font-semibold text-gray-900">
                Bright Smile <span className="text-teal-700">Dental</span>
              </span>
            </div>
            <div className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
              <a href="#services" className="transition-colors hover:text-teal-700">{d.nav.services}</a>
              <a href="#team" className="transition-colors hover:text-teal-700">{d.nav.team}</a>
              <a href="#faq" className="transition-colors hover:text-teal-700">{d.nav.faq}</a>
              <a href="#contact" className="transition-colors hover:text-teal-700">{d.nav.contact}</a>
            </div>
            <button type="button" className="hidden items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-800 md:flex">
              <Calendar size={14} aria-hidden="true" />
              {d.nav.book}
            </button>
          </nav>
        </header>

        <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1.5 text-xs font-medium text-teal-800">
                <Star size={12} aria-hidden="true" className="fill-current" /> {d.badge}
              </div>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                {d.titleLead}
                <br />
                <span className="text-teal-700">{d.titleEmphasis}</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">{d.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" className="flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-800">
                  <Calendar size={16} aria-hidden="true" />
                  {d.bookFree}
                </button>
                <a href="tel:+61291234567" className="flex items-center gap-2 rounded-xl border border-teal-200 px-6 py-3 font-medium text-teal-800 transition-colors hover:bg-teal-50">
                  <Phone size={16} aria-hidden="true" />
                  (02) 9123 4567
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                {d.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} aria-hidden="true" className="text-teal-600" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="flex h-80 items-center justify-center rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-100 to-cyan-50">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
                    <Smile size={52} className="text-teal-600" />
                  </div>
                  <div className="inline-block rounded-xl bg-white px-5 py-3 shadow-sm">
                    <p className="text-sm font-semibold text-gray-700">{d.nextLabel}</p>
                    <p className="text-lg font-bold text-teal-700">{d.nextValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-gray-900">{d.servicesTitle}</h2>
              <p className="mt-3 text-gray-600">{d.servicesSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {d.services.map((s, i) => {
                const Icon = serviceIcons[i];
                return (
                  <div key={s.title} className="rounded-2xl border border-gray-100 p-6 transition-all hover:border-teal-200 hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="mb-1.5 font-semibold text-gray-900">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="team" className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-gray-900">{d.teamTitle}</h2>
              <p className="mt-3 text-gray-600">{d.teamSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {d.doctors.map((doc, i) => (
                <div key={doc.name} className="rounded-2xl border border-gray-100 bg-white p-7 text-center">
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ background: doctorMeta[i].color }}
                    aria-hidden="true"
                  >
                    {doctorMeta[i].initials}
                  </div>
                  <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                  <p className="mt-1 text-sm text-teal-700">{doc.role}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    {doctorMeta[i].years} {d.yearsLabel}
                  </p>
                  <div className="mt-3 flex justify-center gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} size={12} className="fill-current text-amber-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">{d.faqTitle}</h2>
            <div className="flex flex-col gap-4">
              {d.faqs.map((item) => (
                <details key={item.q} className="group overflow-hidden rounded-xl border border-gray-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-medium text-gray-900 hover:bg-gray-50">
                    {item.q}
                    <span aria-hidden="true" className="ml-4 text-xl font-light text-teal-600 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-teal-800 px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">{d.ctaTitle}</h2>
            <p className="mt-4 text-teal-100">{d.ctaBody}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button type="button" className="flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-semibold text-teal-800 transition-colors hover:bg-teal-50">
                <Calendar size={16} aria-hidden="true" />
                {d.bookOnline}
              </button>
              <a href="tel:+61291234567" className="flex items-center gap-2 rounded-xl border-2 border-teal-400 px-8 py-3 font-medium text-white transition-colors hover:bg-teal-700">
                <Phone size={16} aria-hidden="true" />
                {d.callUs}
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-teal-200">
              <MapPin size={14} aria-hidden="true" />
              {d.address}
            </div>
          </div>
        </section>
      </div>

      <DemoCredit />
    </>
  );
}
