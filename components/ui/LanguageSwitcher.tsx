'use client';

import { useLanguage } from '~/lib/i18n/LanguageProvider';
import type { Lang } from '~/lib/i18n/messages';
import { cn } from '~/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  const options: { code: Lang; label: string; name: string }[] = [
    { code: 'id', label: 'ID', name: t.a11y.langId },
    { code: 'en', label: 'EN', name: t.a11y.langEn },
  ];

  return (
    <div
      role="group"
      aria-label={t.a11y.langGroup}
      className={cn('inline-flex h-9 items-center rounded-full border border-line p-0.5 font-mono text-2xs font-medium', className)}
    >
      {options.map((option) => {
        const active = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            aria-pressed={active}
            aria-label={option.name}
            title={option.name}
            onClick={() => setLang(option.code)}
            className={cn(
              'h-full rounded-full px-2.5 tracking-wide transition-colors',
              active ? 'bg-ink text-bg' : 'text-muted hover:text-ink',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
