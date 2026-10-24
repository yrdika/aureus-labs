'use client';

import Link from 'next/link';
import { LanguageSwitcher } from '~/components/ui/LanguageSwitcher';
import { ThemeToggle } from '~/components/ui/ThemeToggle';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

export function DemoBar({ name, notice }: { name: string; notice: string }) {
  const { t } = useLanguage();

  return (
    <div className="relative z-[60] border-b border-line bg-surface text-xs">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2.5 md:px-8">
        <Link href="/work" className="text-muted transition-colors hover:text-ink">
          {t.demo.back}
        </Link>
        <p className="order-last w-full text-center text-muted md:order-none md:w-auto">
          <span className="font-mono font-semibold uppercase tracking-label text-accent">{t.demo.conceptLabel}</span>
          {' — '}
          <strong className="font-medium text-ink">{name}</strong> {notice}
        </p>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export function DemoCredit() {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 border-t border-line bg-surface px-6 py-5 text-center text-xs text-muted">
      {t.demo.creditPrefix}{' '}
      <Link href="/" className="font-semibold text-accent underline-offset-4 hover:underline">
        {t.demo.by}
      </Link>{' '}
      {t.demo.creditSuffix}
    </div>
  );
}
