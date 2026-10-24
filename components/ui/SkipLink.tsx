'use client';

import { useLanguage } from '~/lib/i18n/LanguageProvider';

export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main"
      className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-transform focus:translate-y-0"
    >
      {t.a11y.skip}
    </a>
  );
}
