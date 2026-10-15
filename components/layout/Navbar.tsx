'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '~/components/ui/Button';
import { cn } from '~/lib/utils';

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-white/8 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Aureus Labs home">
          <span className="w-7 h-7 rounded-lg bg-gold-500 flex items-center justify-center text-charcoal-900 font-bold text-sm select-none group-hover:bg-gold-400 transition-colors">
            A
          </span>
          <span className="font-semibold text-cream-50 text-base tracking-tight">
            Aureus<span className="text-gold-500">Labs</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm text-cream-200/70 hover:text-cream-50 transition-colors rounded-lg hover:bg-white/6"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            as="a"
            href="mailto:ramadika305@gmail.com?subject=Project Inquiry"
            variant="primary"
            size="sm"
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-cream-200 hover:bg-white/8 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-900/98 backdrop-blur-md border-t border-white/8 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 text-sm text-cream-200/70 hover:text-cream-50 transition-colors rounded-lg hover:bg-white/6"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-white/8">
            <Button
              as="a"
              href="mailto:ramadika305@gmail.com?subject=Project Inquiry"
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
