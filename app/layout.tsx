import type { Metadata } from 'next';
import { Arimo } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

const inter = Arimo({ subsets: ['latin', 'hebrew', 'cyrillic'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [{ url: '/logo.svg', href: '/logo.svg' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
