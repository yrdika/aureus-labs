import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, CheckCircle2, MapPin, Phone, Star } from 'lucide-react';
import { Navbar } from '~/components/layout/Navbar';
import { Footer } from '~/components/layout/Footer';
import { Badge } from '~/components/ui/Badge';
import { Button } from '~/components/ui/Button';

export const metadata: Metadata = {
  title: 'Bright Smile Dental — Demo Project',
  description: 'A fictional dental clinic website built as a portfolio concept by Aureus Labs.',
};

const services = [
  { icon: '🦷', title: 'General Dentistry', desc: 'Checkups, cleanings, fillings, and preventive care for the whole family.' },
  { icon: '✨', title: 'Teeth Whitening', desc: 'Professional in-chair whitening for noticeably brighter results.' },
  { icon: '🔧', title: 'Orthodontics', desc: 'Traditional braces and clear aligners to straighten your smile.' },
  { icon: '🦴', title: 'Dental Implants', desc: 'Permanent tooth replacement that looks, feels, and functions like natural teeth.' },
  { icon: '👶', title: 'Paediatric Dentistry', desc: 'Gentle, friendly dental care designed for children and teenagers.' },
  { icon: '🚨', title: 'Emergency Care', desc: 'Same-day appointments available for dental emergencies.' },
];

const doctors = [
  { name: 'Dr. Sarah Chen', role: 'Principal Dentist & Orthodontist', exp: '14 years', initials: 'SC', color: '#3b9e8c' },
  { name: 'Dr. Marcus Okafor', role: 'Implant & Restorative Specialist', exp: '11 years', initials: 'MO', color: '#6366f1' },
  { name: 'Dr. Priya Nair', role: 'Paediatric Dentist', exp: '8 years', initials: 'PN', color: '#f59e0b' },
];

const faqs = [
  { q: 'How often should I visit the dentist?', a: 'We recommend a check-up and clean every six months for most patients. Your dentist may suggest more frequent visits if you have ongoing concerns.' },
  { q: 'Do you accept insurance?', a: 'Yes — we work with most major dental insurance providers. Contact us before your appointment and we\'ll confirm your cover.' },
  { q: 'Is teeth whitening safe?', a: 'When performed by a registered dentist using clinically approved products, teeth whitening is very safe and effective. We offer a complimentary sensitivity assessment beforehand.' },
  { q: 'How do I book an appointment?', a: 'You can book online using the button above, call us during clinic hours, or send us an email. We typically offer next-day appointments for new patients.' },
];

export default function DentalClinicPage() {
  return (
    <div className="bg-[#f8fffe] text-gray-900 min-h-screen">
      {/* Demo notice */}
      <div className="bg-teal-900/90 text-teal-100 text-xs text-center py-2 px-4">
        <span className="font-semibold">Demo Project</span> — Bright Smile Dental is a fictional concept built by{' '}
        <Link href="/" className="underline hover:text-white">Aureus Labs</Link>.{' '}
        <Link href="/work" className="underline hover:text-white">← Back to portfolio</Link>
      </div>

      {/* Clinic Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">B</div>
            <span className="font-semibold text-gray-900">Bright Smile <span className="text-teal-600">Dental</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
            <a href="#team" className="hover:text-teal-600 transition-colors">Our Team</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Calendar size={14} />
            Book Appointment
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-xs font-medium mb-6">
              <Star size={12} className="fill-current" /> Rated 4.9/5 by over 800 patients
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your smile,<br />
              <span className="text-teal-600">our purpose.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Gentle, modern dental care for patients of all ages. From routine check-ups to complex restorations — we make every visit comfortable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                <Calendar size={16} />
                Book Online — It&apos;s Free
              </button>
              <a href="tel:+61291234567" className="flex items-center gap-2 border border-teal-200 text-teal-700 hover:bg-teal-50 font-medium px-6 py-3 rounded-xl transition-colors">
                <Phone size={16} />
                (02) 9123 4567
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              {['No wait times guaranteed', 'Same-day emergencies', 'All insurance accepted'].map((f) => (
                <div key={f} className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-teal-500" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-50 h-80 flex items-center justify-center border border-teal-100">
              <div className="text-center">
                <div className="text-7xl mb-4">🦷</div>
                <div className="bg-white rounded-xl shadow-sm px-5 py-3 inline-block">
                  <p className="text-sm font-semibold text-gray-700">Next available</p>
                  <p className="text-lg font-bold text-teal-600">Tomorrow, 9:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive dental services</h2>
            <p className="mt-3 text-gray-500">Everything your family needs under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Meet our dentists</h2>
            <p className="mt-3 text-gray-500">Experienced, caring professionals committed to your comfort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div key={d.name} className="bg-white rounded-2xl p-7 text-center border border-gray-100">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: d.color }}
                >
                  {d.initials}
                </div>
                <h3 className="font-semibold text-gray-900">{d.name}</h3>
                <p className="text-sm text-teal-600 mt-1">{d.role}</p>
                <p className="text-xs text-gray-400 mt-1">{d.exp} experience</p>
                <div className="flex justify-center gap-0.5 mt-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-current" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((item) => (
              <details key={item.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer text-sm font-medium text-gray-900 hover:bg-gray-50 list-none">
                  {item.q}
                  <span className="text-teal-500 group-open:rotate-45 transition-transform text-xl font-light ml-4">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 px-6 bg-teal-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready for a healthier smile?</h2>
          <p className="mt-4 text-teal-100">Book your first appointment online — it takes less than two minutes.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-xl hover:bg-teal-50 transition-colors flex items-center gap-2">
              <Calendar size={16} />
              Book Online
            </button>
            <a href="tel:+61291234567" className="border-2 border-teal-400 text-white font-medium px-8 py-3 rounded-xl hover:bg-teal-600 transition-colors flex items-center gap-2">
              <Phone size={16} />
              Call Us
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-teal-200 text-sm">
            <MapPin size={14} />
            42 Pacific Highway, St Leonards NSW 2065
          </div>
        </div>
      </section>

      {/* Project credit footer */}
      <div className="bg-teal-900 py-5 px-6 text-center text-xs text-teal-400">
        Concept project by{' '}
        <Link href="/" className="text-gold-400 hover:text-gold-300 font-semibold">Aureus Labs</Link>
        {' '}— fictional business, illustrative content only.
      </div>
    </div>
  );
}
