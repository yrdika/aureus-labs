'use client';

import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '~/lib/i18n/LanguageProvider';
import { useTheme } from '~/lib/theme/ThemeProvider';
import { cn } from '~/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.a11y.themeToggle}
      aria-pressed={theme === 'dark'}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink/40 hover:bg-ink/5',
        className,
      )}
    >
      <Sun size={16} aria-hidden="true" className="hidden dark:block" />
      <Moon size={16} aria-hidden="true" className="dark:hidden" />
    </button>
  );
}
