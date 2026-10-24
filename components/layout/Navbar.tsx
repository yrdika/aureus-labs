'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '~/components/ui/Button';
import { LanguageSwitcher } from '~/components/ui/LanguageSwitcher';
import { Logo } from '~/components/ui/Logo';
import { ThemeToggle } from '~/components/ui/ThemeToggle';
import { useLanguage } from '~/lib/i18n/LanguageProvider';
import { SITE } from '~/lib/site';
import { cn } from '~/lib/utils';

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const links = [
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.work, href: '/work' },
    { label: t.nav.process, href: '/#process' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-300',
        scrolled || open ? 'border-b border-line bg-bg/85 py-3 backdrop-blur-md' : 'border-b border-transparent py-5',
      )}
    >
      <nav aria-label={t.a11y.mainNav} className="wrap flex items-center justify-between gap-4">
        <Link href="/" aria-label={t.a11y.brandHome} className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            href={`mailto:${SITE.email}?subject=${encodeURIComponent(t.contact.form.mail.subject)}`}
            size="sm"
            className="hidden lg:inline-flex"
          >
            {t.nav.cta}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.menuClose : t.a11y.menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="wrap lg:hidden">
        <ul className="flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-2xl text-ink transition-colors hover:bg-ink/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Button
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(t.contact.form.mail.subject)}`}
              size="lg"
              className="w-full"
            >
              {t.nav.cta}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
