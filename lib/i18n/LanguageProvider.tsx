'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LANG, messages, type Lang, type Messages } from './messages';
import { STORAGE_KEYS } from '~/lib/site';

interface LanguageContextValue {
  lang: Lang;
  t: Messages;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLang(value: unknown): value is Lang {
  return value === 'id' || value === 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEYS.lang);
      if (isLang(stored)) setLangState(stored);
    } catch {
      // storage unavailable (private mode): keep default language
    }
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (ready) document.documentElement.removeAttribute('data-lang-pending');
  }, [ready]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEYS.lang, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({ lang, t: messages[lang], setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
