'use client';

import { useEffect } from 'react';
import { useLanguage } from '~/lib/i18n/LanguageProvider';

type PageKey = 'home' | 'work' | 'dental' | 'saas' | 'dashboard';

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content);
}

export function PageMeta({ page }: { page: PageKey }) {
  const { t } = useLanguage();

  useEffect(() => {
    const { title, description } = t.meta[page];
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [t, page]);

  return null;
}
