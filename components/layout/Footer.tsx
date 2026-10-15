import Link from 'next/link';
import { Mail } from 'lucide-react';

const footerLinks = {
  Studio: [
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/work' },
    { label: 'Process', href: '/#process' },
    { label: 'About', href: '/#about' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-charcoal-950/80 px-6 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <span className="w-7 h-7 rounded-lg bg-gold-500 flex items-center justify-center text-charcoal-900 font-bold text-sm">
                A
              </span>
              <span className="font-semibold text-cream-50 text-base tracking-tight">
                Aureus<span className="text-gold-500">Labs</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-cream-200/50 leading-relaxed max-w-xs">
              Digital experiences, built with purpose. We help businesses communicate clearly and grow online.
            </p>
            <a
              href="mailto:ramadika305@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-gold-500/80 hover:text-gold-400 transition-colors"
            >
              <Mail size={14} />
              ramadika305@gmail.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-2xs font-semibold tracking-widest2 uppercase text-cream-200/40 mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream-200/50 hover:text-cream-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-2xs text-cream-200/30 tracking-wide">
            © {new Date().getFullYear()} Aureus Labs. All rights reserved.
          </p>
          <p className="text-2xs text-cream-200/30">
            Digital Experiences, Built with Purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
