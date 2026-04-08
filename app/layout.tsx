import type { Metadata } from 'next'
import './globals.css'
import { siteConfig, buildLocalBusinessJsonLd } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'HeatGenius — ремонт и обслуживание котлов в Москве и МО',
    template: '%s | HeatGenius'
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: siteConfig.domain,
    title: 'HeatGenius — ремонт и обслуживание котлов в Москве и МО',
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: 'ru_RU'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeatGenius — ремонт и обслуживание котлов в Москве и МО',
    description: siteConfig.description
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <a className="floating-call" href={siteConfig.phoneHref} aria-label="Позвонить">
          Позвонить
        </a>
        <a
          className="floating-wa"
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Написать в WhatsApp"
        >
          WhatsApp
        </a>
      </body>
    </html>
  )
}