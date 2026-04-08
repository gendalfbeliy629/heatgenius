import type { Metadata } from 'next'
import { Clock3, MapPin, Phone, Send, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Связаться с HeatGenius: телефон, WhatsApp, зона работы, заявка на выезд мастера.',
  alternates: {
    canonical: '/contacts'
  }
}

export default function ContactsPage() {
  return (
    <main>
      <section className="page-hero hero">
        <div className="container">
          <div className="hero__shell page-hero__inner">
            <div className="eyebrow">Контакты</div>
            <h1 className="page-hero__title">Свяжитесь с HeatGenius</h1>
            <p className="page-hero__lead">
              Позвоните, напишите в WhatsApp или оставьте заявку. Подскажем по симптомам,
              сориентируем по выезду и предложим ближайшее свободное время.
            </p>

            <div className="btn-row" style={{ marginTop: 26 }}>
              <a className="btn-primary" href={siteConfig.phoneHref}>
                <Phone size={18} />
                {siteConfig.phoneDisplay}
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
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="contact-grid">
            <div className="card contact-card">
              <div className="eyebrow">Как связаться</div>
              <h2 className="section-title">Контактная информация</h2>
              <ul className="contact-list">
                <li>
                  <span className="icon-box">
                    <Phone size={18} />
                  </span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18 }}>Телефон</h3>
                    <p style={{ marginTop: 6 }}>
                      <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
                    </p>
                  </div>
                </li>

                <li>
                  <span className="icon-box">
                    <Send size={18} />
                  </span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18 }}>WhatsApp</h3>
                    <p style={{ marginTop: 6 }}>
                      <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                        Написать в мессенджер
                      </a>
                    </p>
                  </div>
                </li>

                <li>
                  <span className="icon-box">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18 }}>Зона работы</h3>
                    <p style={{ marginTop: 6 }}>{siteConfig.city}</p>
                  </div>
                </li>

                <li>
                  <span className="icon-box">
                    <Clock3 size={18} />
                  </span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 18 }}>График</h3>
                    <p style={{ marginTop: 6 }}>{siteConfig.schedule}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card contact-card">
              <div className="eyebrow">Заявка</div>
              <h2 className="section-title">Оставить обращение</h2>

              <form>
                <label className="contact-label" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  className="contact-input"
                  id="name"
                  name="name"
                  placeholder="Например, Алексей"
                />

                <label className="contact-label" htmlFor="phone" style={{ marginTop: 16 }}>
                  Телефон
                </label>
                <input
                  className="contact-input"
                  id="phone"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                />

                <label className="contact-label" htmlFor="message" style={{ marginTop: 16 }}>
                  Что случилось
                </label>
                <textarea
                  className="contact-textarea"
                  id="message"
                  name="message"
                  placeholder="Например: котёл не зажигается, выдаёт ошибку, падает давление"
                />

                <div className="btn-row" style={{ marginTop: 20 }}>
                  <button type="button" className="btn-primary">
                    Отправить заявку
                  </button>
                </div>

                <p className="form-note">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>

                <div className="hero-badge" style={{ marginTop: 14 }}>
                  <ShieldCheck size={16} />
                  Ответим и сориентируем по выезду
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}