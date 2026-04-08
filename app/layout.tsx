import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'HeatGenius — ремонт и обслуживание котлов в Москве и области',
  description:
    'Ремонт, обслуживание, автоматика ZONT, проектирование и монтаж систем отопления. Выезд мастера за 1–2 часа по Москве и Московской области.',
  metadataBase: new URL('https://heatgenius.ru'),
  openGraph: {
    title: 'HeatGenius — ремонт и обслуживание котлов',
    description:
      'Выезд мастера за 1–2 часа. Диагностика, ремонт, обслуживание, ZONT, проектирование и монтаж.',
    url: 'https://heatgenius.ru',
    siteName: 'HeatGenius',
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
