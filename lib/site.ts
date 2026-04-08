export const siteConfig = {
  name: 'HeatGenius',
  domain: 'https://heatgenius.ru',
  phoneDisplay: '+7 (993) 605-98-86',
  phoneHref: 'tel:+79936059886',
  whatsappHref: 'https://wa.me/79936059886',
  city: 'Москва и Московская область',
  schedule: 'Без выходных',
  email: 'info@heatgenius.ru',
  description:
    'Ремонт, обслуживание и монтаж котельного оборудования. Выезд мастера по Москве и Московской области.',
  keywords: [
    'ремонт котлов',
    'обслуживание котлов',
    'ремонт газовых котлов',
    'автоматика zont',
    'монтаж отопления',
    'ремонт котла москва',
    'обслуживание котла москва'
  ]
}

export const navigation = [
  { href: '/', label: 'Главная' },
  { href: '/remont-kotlov', label: 'Ремонт котлов' },
  { href: '/obsluzhivanie-kotlov', label: 'Обслуживание' },
  { href: '/zont', label: 'ZONT' },
  { href: '/montazh-otopleniya', label: 'Монтаж отопления' },
  { href: '/contacts', label: 'Контакты' }
]

export const brands = ['Baxi', 'Vaillant', 'Ariston', 'Navien', 'Protherm', 'Bosch']

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.domain,
    telephone: siteConfig.phoneDisplay,
    areaServed: siteConfig.city,
    openingHours: 'Mo-Su 09:00-21:00',
    description: siteConfig.description
  }
}

export function buildServiceJsonLd(serviceName: string, serviceDescription: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      areaServed: siteConfig.city
    },
    areaServed: siteConfig.city,
    description: serviceDescription,
    url: `${siteConfig.domain}${path}`
  }
}