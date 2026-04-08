import Link from 'next/link'
import { siteConfig } from '@/lib/site'

type Props = {
  eyebrow: string
  title: string
  lead: string
  bullets: string[]
  price: string
  faq: Array<{ title: string; text: string }>
  cards: Array<{ title: string; text: string }>
}

export function ServicePageTemplate({
  eyebrow,
  title,
  lead,
  bullets,
  price,
  faq,
  cards
}: Props) {
  return (
    <main>
      <section className="page-hero hero">
        <div className="container">
          <div className="hero__shell page-hero__inner">
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="page-hero__title">{title}</h1>
            <p className="page-hero__lead">{lead}</p>

            <div className="hero-badges" style={{ marginTop: 24 }}>
              {bullets.map((item) => (
                <div key={item} className="hero-badge">
                  {item}
                </div>
              ))}
            </div>

            <div className="hero-actions btn-row">
              <a className="btn-primary" href={siteConfig.phoneHref}>
                Позвонить сейчас
              </a>
              <a
                className="btn-secondary"
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>

            <p className="hero-note">
              Ориентир по стоимости: <span>{price}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="card dark-panel">
            <div className="eyebrow">Что входит</div>
            <h2 className="section-title">Как мы подходим к задаче</h2>

            <div className="grid grid-3 section-cards">
              {cards.map((item) => (
                <div key={item.title} className="soft-card service-card">
                  <span className="icon-box">→</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="cta-strip">
              <div>
                <h3 style={{ margin: 0, fontSize: 24 }}>Нужен быстрый выезд мастера?</h3>
                <p className="muted" style={{ margin: '8px 0 0' }}>
                  Работаем по Москве и Московской области без выходных.
                </p>
              </div>
              <div className="btn-row">
                <a className="btn-primary" href={siteConfig.phoneHref}>
                  Вызвать мастера
                </a>
                <Link className="btn-secondary" href="/contacts">
                  Оставить заявку
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title">Частые вопросы по услуге</h2>
          </div>

          <div className="grid grid-2 section-cards">
            {faq.map((item) => (
              <div key={item.title} className="card faq-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="card cta-card">
            <div className="eyebrow">Финальный CTA</div>
            <h2 className="section-title">Не тяните с проблемой отопления</h2>
            <p className="section-subtitle">
              Чем раньше сделать диагностику, тем выше шанс устранить неисправность быстро и без
              серьёзных расходов.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a className="btn-primary" href={siteConfig.phoneHref}>
                Позвонить мастеру
              </a>
              <a
                className="btn-secondary"
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Написать в WhatsApp
              </a>
              <div className="hero-badge">Гарантия до 12 месяцев</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}