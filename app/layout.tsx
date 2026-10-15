import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aureus Labs — Digital Experiences, Built with Purpose.',
    template: '%s | Aureus Labs',
  },
  description:
    'We design and build modern websites that help businesses communicate clearly, build trust, and grow online.',
  keywords: ['web design', 'web development', 'landing page', 'SaaS website', 'digital studio'],
  authors: [{ name: 'Aureus Labs' }],
  creator: 'Aureus Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aureuslabs.dev',
    siteName: 'Aureus Labs',
    title: 'Aureus Labs — Digital Experiences, Built with Purpose.',
    description:
      'We design and build modern websites that help businesses communicate clearly, build trust, and grow online.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aureus Labs — Digital Experiences, Built with Purpose.',
    description:
      'We design and build modern websites that help businesses communicate clearly, build trust, and grow online.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-charcoal-900 text-cream-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
