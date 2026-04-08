import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { buildServiceJsonLd, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Монтаж отопления',
  description:
    'Проектирование, монтаж и модернизация систем отопления и водоснабжения в Москве и МО.',
  alternates: {
    canonical: '/montazh-otopleniya'
  },
  openGraph: {
    title: 'Монтаж отопления',
    description: 'Системы отопления и водоснабжения для дома, коттеджа и дачи.',
    url: `${siteConfig.domain}/montazh-otopleniya`
  }
}

export default function MontazhOtopleniyaPage() {
  const jsonLd = buildServiceJsonLd(
    'Монтаж отопления',
    'Проектирование и монтаж систем отопления и водоснабжения.',
    '/montazh-otopleniya'
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageTemplate
        eyebrow="Монтаж отопления"
        title="Монтаж и модернизация систем отопления"
        lead="Проектируем и собираем систему отопления под дом, дачу или коттедж: от базовой схемы до запуска и проверки работы всех контуров."
        bullets={[
          'Проектирование и подбор решений',
          'Монтаж системы',
          'Проверка и запуск'
        ]}
        price="по смете"
        faq={[
          {
            title: 'Делаете ли вы только монтаж новых систем?',
            text: 'Нет. Также можем модернизировать или доработать уже существующую систему отопления.'
          },
          {
            title: 'Можно ли выполнить монтаж поэтапно?',
            text: 'Да, в зависимости от объекта и текущего этапа строительства.'
          },
          {
            title: 'Вы работаете только в Москве?',
            text: 'Основная зона выезда — Москва и Московская область.'
          },
          {
            title: 'Как рассчитывается стоимость?',
            text: 'После обсуждения задачи и оценки объёма работ готовится понятная смета.'
          }
        ]}
        cards={[
          {
            title: 'Проект и логика системы',
            text: 'Продумываем схему так, чтобы система была надёжной, удобной и обслуживаемой.'
          },
          {
            title: 'Монтаж под ключ',
            text: 'Выполняем установку оборудования, разводку и подключение основных узлов.'
          },
          {
            title: 'Пуск и проверка',
            text: 'Проверяем герметичность, корректность работы и готовность системы к эксплуатации.'
          }
        ]}
      />
    </>
  )
}