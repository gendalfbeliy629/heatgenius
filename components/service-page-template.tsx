'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Phone, ShieldCheck, Wrench } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'

type Props = {
  eyebrow: string
  title: string
  lead: string
  bullets: string[]
  price: string
  path: string
  serviceName: string
  serviceDescription: string
  faq: Array<{ title: string; text: string }>
  cards: Array<{ title: string; text: string }>
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
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
          <motion.div
            className="hero__shell page-hero__inner"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="page-hero__title">{title}</h1>
            <p className="page-hero__lead">{lead}</p>

            <div className="hero-badges" style={{ marginTop: 24 }}>
              {bullets.map((item) => (
                <div key={item} className="hero-badge">
                  <BadgeCheck size={16} />
                  {item}
                </div>
              ))}
            </div>

            <div className="hero-actions btn-row">
              <a className="btn-primary" href={siteConfig.phoneHref}>
                <Phone size={18} />
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
          </motion.div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <motion.div
            className="card dark-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
          >
            <div className="eyebrow">Что входит</div>
            <h2 className="section-title">Как мы подходим к задаче</h2>

            <div className="grid grid-3 section-cards">
              {cards.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="soft-card service-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="icon-box">
                    <Wrench size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
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
                  Оставить заявку <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
          >
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title">Частые вопросы по услуге</h2>
          </motion.div>

          <div className="grid grid-2 section-cards">
            {faq.map((item, index) => (
              <motion.div
                key={item.title}
                className="card faq-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <motion.div
            className="card cta-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
          >
            <div className="eyebrow">Финальный CTA</div>
            <h2 className="section-title">Не тяните с проблемой отопления</h2>
            <p className="section-subtitle">
              Чем раньше сделать диагностику, тем выше шанс устранить неисправность быстро и без
              серьёзных расходов.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a className="btn-primary" href={siteConfig.phoneHref}>
                <Phone size={18} />
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
              <div className="hero-badge">
                <ShieldCheck size={16} />
                Гарантия до 12 месяцев
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}