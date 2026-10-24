'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Logo } from '~/components/ui/Logo';
import { useLanguage } from '~/lib/i18n/LanguageProvider';
import { SITE } from '~/lib/site';

export function Footer() {
  const { t } = useLanguage();

  const studioLinks = [
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.work, href: '/work' },
    { label: t.nav.process, href: '/#process' },
    { label: t.nav.about, href: '/#about' },
  ];

  return (
    <footer className="relative z-10 overflow-hidden border-t border-line bg-surface">
      <div className="wrap pb-10 pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link href="/" aria-label={t.a11y.brandHome} className="inline-block">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.a11y.footerNav} className="md:col-span-3">
            <h2 className="label">{t.footer.studio}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink/80 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="label">{t.footer.contact}</h2>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-accent"
            >
              <Mail size={14} aria-hidden="true" />
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {SITE.name}. {t.footer.rights}
          </p>
          <p>{t.footer.conceptNote}</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[22vw] leading-[0.78] tracking-tight text-ink/[0.045] md:text-[15rem]"
      >
        Aureus Labs
      </p>
    </footer>
  );
}
