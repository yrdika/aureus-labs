import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '~/lib/i18n/LanguageProvider';
import { ThemeProvider } from '~/lib/theme/ThemeProvider';
import { id } from '~/lib/i18n/messages/id';
import { SITE, STORAGE_KEYS } from '~/lib/site';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: id.meta.home.title, template: '%s | Aureus Labs' },
  description: id.meta.home.description,
  keywords: ['web design', 'web development', 'landing page', 'SaaS website', 'digital studio', 'studio digital', 'jasa pembuatan website'],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    url: SITE.url,
    siteName: SITE.name,
    title: id.meta.home.title,
    description: id.meta.home.description,
  },
  twitter: {
    card: 'summary',
    title: id.meta.home.title,
    description: id.meta.home.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f1ea' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0c' },
  ],
};

// Runs before first paint: applies the saved/system theme and flags a pending English swap.
const bootstrap = `(function(){var r=document.documentElement;r.classList.add('js');var t=null,l=null;try{t=localStorage.getItem('${STORAGE_KEYS.theme}');l=localStorage.getItem('${STORAGE_KEYS.lang}')}catch(e){}var d=t==='dark'||(t!=='light'&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)r.classList.add('dark');if(l==='en'){r.lang='en';r.setAttribute('data-lang-pending','');setTimeout(function(){r.removeAttribute('data-lang-pending')},3000)}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${sans.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
