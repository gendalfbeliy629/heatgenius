'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Flame,
  Phone,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wallet,
  Wrench
} from 'lucide-react'
import { brands, siteConfig } from '@/lib/site'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
}

const problems = [
  {
    icon: Thermometer,
    title: 'Котёл не греет',
    text: 'Оперативно находим причину: розжиг, датчики, насос, давление, автоматика, тяга.'
  },
  {
    icon: Flame,
    title: 'Появляется ошибка на дисплее',
    text: 'Расшифровываем код ошибки, устраняем неисправность и проверяем стабильную работу после ремонта.'
  },
  {
    icon: Wrench,
    title: 'Падает давление или течёт система',
    text: 'Диагностика гидравлики, расширительного бака, клапанов, теплообменника и соединений.'
  }
]

const services = [
  {
    title: 'Ремонт котлов',
    text: 'Baxi, Vaillant, Ariston, Navien, Protherm, Bosch и другие марки. Большинство неисправностей устраняем за один визит.',
    price: 'от 1 500 ₽',
    href: '/remont-kotlov'
  },
  {
    title: 'Техническое обслуживание',
    text: 'Чистка, профилактика, проверка узлов, настройка горения и сезонная подготовка системы отопления.',
    price: 'от 2 000 ₽',
    href: '/obsluzhivanie-kotlov'
  },
  {
    title: 'Автоматика ZONT',
    text: 'Подбор, монтаж, запуск и настройка удалённого управления отоплением и контролем температуры.',
    price: 'от 3 500 ₽',
    href: '/zont'
  },
  {
    title: 'Монтаж отопления',
    text: 'Проектирование, монтаж и модернизация систем отопления и водоснабжения для дома, дачи и коттеджа.',
    price: 'по смете',
    href: '/montazh-otopleniya'
  }
]

const advantages = [
  {
    icon: Clock3,
    title: 'Выезд за 1–2 часа',
    text: 'Работаем без выходных по Москве и Московской области. Быстро выезжаем на срочные заявки.'
  },
  {
    icon: BadgeCheck,
    title: '95% ремонтов за 1 визит',
    text: 'Опыт и типовые запчасти позволяют устранять большинство неисправностей сразу на месте.'
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия до 12 месяцев',
    text: 'После ремонта даём гарантию на выполненные работы и объясняем, как избежать повторной поломки.'
  },
  {
    icon: Wallet,
    title: 'Цена понятна до начала работ',
    text: 'Сначала диагностика и согласование, потом ремонт. Без скрытых платежей и навязанных услуг.'
  }
]

const cases = [
  {
    title: 'Baxi — ошибка розжига',
    text: 'Заменили датчик и выполнили настройку горения. Котёл стабильно запустился, проблема исчезла.',
    footer: 'Время ремонта: 40 минут'
  },
  {
    title: 'Vaillant — падение давления',
    text: 'Проверили гидравлику, расширительный бак и подсоединения. Устранили утечку и восстановили давление.',
    footer: 'Время ремонта: 1 час 20 минут'
  },
  {
    title: 'Navien — нестабильный нагрев',
    text: 'Очистили теплообменник, проверили насос и датчики, выполнили сервисную настройку системы.',
    footer: 'Результат: стабильная температура'
  }
]

const reviews = [
  {
    title: 'Алексей, Москва',
    text: 'Приехали быстро, проблему нашли сразу, цену согласовали до начала ремонта. Всё спокойно и профессионально.'
  },
  {
    title: 'Ольга, Химки',
    text: 'Котёл перестал нормально греть вечером. Мастер приехал в тот же день, всё починил, объяснил, что делать дальше.'
  },
  {
    title: 'Игорь, Мытищи',
    text: 'Подключали автоматику ZONT. Сделали аккуратно, всё настроили с телефона, показали как пользоваться.'
  }
]

const faq = [
  {
    title: 'Сколько стоит диагностика?',
    text: 'Стоимость зависит от задачи, но итоговая цена ремонта всегда согласуется до начала работ.'
  },
  {
    title: 'Какие бренды вы обслуживаете?',
    text: 'Работаем с популярными бытовыми и коттеджными котлами: Baxi, Vaillant, Ariston, Navien, Protherm, Bosch и другими.'
  },
  {
    title: 'Можно ли приехать в выходной?',
    text: 'Да. Работаем без выходных и принимаем заявки каждый день.'
  },
  {
    title: 'Вы делаете только ремонт?',
    text: 'Нет. Также выполняем сервисное обслуживание, монтаж отопления и настройку автоматики ZONT.'
  }
]

export function LandingPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero__shell"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <div className="hero__grid">
              <div className="hero__content">
                <div className="eyebrow">
                  <Sparkles size={14} />
                  Premium-сервис по отоплению
                </div>

                <h1 className="hero__title">
                  Ремонт котлов <span className="accent">за 1 визит</span>
                </h1>

                <p className="hero__lead">
                  Выезд мастера за 1–2 часа, аккуратная диагностика, понятная цена до начала работ
                  и гарантия до 12 месяцев. Работаем по Москве и Московской области.
                </p>

                <div className="hero-badges">
                  <div className="hero-badge">
                    <Clock3 size={16} />
                    {siteConfig.schedule}
                  </div>
                  <div className="hero-badge">
                    <BadgeCheck size={16} />
                    95% ремонтов за один визит
                  </div>
                  <div className="hero-badge">
                    <ShieldCheck size={16} />
                    Гарантия до 12 месяцев
                  </div>
                </div>

                <div className="hero-actions btn-row">
                  <a className="btn-primary" href={siteConfig.phoneHref}>
                    <Phone size={18} />
                    Вызвать мастера
                  </a>
                  <a
                    className="btn-secondary"
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Написать в WhatsApp
                  </a>
                </div>

                <p className="hero-note">
                  Сейчас доступно: <span>3 окна на выезд сегодня</span>
                </p>
              </div>

              <div className="hero__panel">
                <motion.div
                  className="card metrics-card"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: 0.08 }}
                >
                  <h3>Почему выбирают HeatGenius</h3>
                  <ul className="metrics-list">
                    <li>
                      <span className="icon-box">
                        <Clock3 size={18} />
                      </span>
                      <div>
                        <span className="metric-number">1–2 часа</span>
                        <span className="metric-label">среднее время выезда мастера</span>
                      </div>
                    </li>
                    <li>
                      <span className="icon-box">
                        <BadgeCheck size={18} />
                      </span>
                      <div>
                        <span className="metric-number">9+ лет</span>
                        <span className="metric-label">практического опыта с котельным оборудованием</span>
                      </div>
                    </li>
                    <li>
                      <span className="icon-box">
                        <ShieldCheck size={18} />
                      </span>
                      <div>
                        <span className="metric-number">до 12 мес.</span>
                        <span className="metric-label">гарантия на выполненные работы</span>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="card quote-card"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: 0.16 }}
                >
                  <h3>Что вы получаете</h3>
                  <ul className="offer-list">
                    <li>
                      <span className="icon-box">
                        <Wrench size={18} />
                      </span>
                      <div className="muted">Точный поиск неисправности без гаданий и лишних замен.</div>
                    </li>
                    <li>
                      <span className="icon-box">
                        <Wallet size={18} />
                      </span>
                      <div className="muted">Прозрачную стоимость до старта работ, а не “сюрприз” в конце.</div>
                    </li>
                    <li>
                      <span className="icon-box">
                        <ShieldCheck size={18} />
                      </span>
                      <div className="muted">Понятную гарантию и рекомендации по дальнейшей эксплуатации.</div>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
            <div className="eyebrow">Частые проблемы</div>
            <h2 className="section-title">Когда нельзя откладывать вызов мастера</h2>
            <p className="section-subtitle">
              Неисправный котёл — это не только дискомфорт, но и риск остановки отопления в самый
              неподходящий момент. Мы быстро разбираемся, в чём причина, и устраняем её без лишней
              суеты.
            </p>
          </motion.div>

          <div className="grid grid-3 section-cards">
            {problems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="card problem-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="icon-box">
                    <Icon size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <motion.div className="card dark-panel" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
            <div className="eyebrow">Услуги</div>
            <h2 className="section-title">Все ключевые работы по отоплению в одном месте</h2>
            <p className="section-subtitle">
              Вместо “универсального мастера на все случаи” — профильный сервис с понятной
              специализацией: ремонт, обслуживание, автоматика и монтаж.
            </p>

            <div className="grid grid-2 section-cards">
              {services.map((item, index) => (
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
                  <div className="service-card__footer">
                    <span className="price-chip">{item.price}</span>
                    <Link href={item.href} className="btn-ghost">
                      Подробнее <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
            <div className="eyebrow">Преимущества</div>
            <h2 className="section-title">Сервис, который выглядит и работает на уровне топов</h2>
            <p className="section-subtitle">
              Не просто “починить котёл”, а дать спокойствие: быстро приехать, аккуратно разобраться,
              честно назвать цену и качественно довести работу до результата.
            </p>
          </motion.div>

          <div className="grid grid-4 section-cards">
            {advantages.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="card advantage-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="icon-box">
                    <Icon size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="brand-row">
            {brands.map((brand) => (
              <div key={brand} className="brand-chip">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <motion.div className="card dark-panel" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
            <div className="eyebrow">Как мы работаем</div>
            <h2 className="section-title">Понятный процесс без хаоса и лишних обещаний</h2>
            <div className="process-grid">
              {[
                ['01', 'Заявка', 'Вы звоните или пишете в WhatsApp. Уточняем симптомы и договариваемся о выезде.'],
                ['02', 'Диагностика', 'Мастер на месте проверяет систему, находит причину и объясняет, что именно сломалось.'],
                ['03', 'Согласование', 'До начала ремонта вы понимаете стоимость, сроки и что будет сделано.'],
                ['04', 'Результат', 'Ремонт, запуск, контрольная проверка и рекомендации по эксплуатации.']
              ].map(([num, title, text], index) => (
                <motion.div
                  key={num}
                  className="process-step"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="process-step__num">{num}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="cta-strip">
              <div>
                <h3 style={{ margin: 0, fontSize: 24 }}>Нужно срочно восстановить отопление?</h3>
                <p className="muted" style={{ margin: '8px 0 0' }}>
                  Позвоните сейчас — подскажем по симптомам и предложим ближайшее время выезда.
                </p>
              </div>
              <div className="btn-row">
                <a className="btn-primary" href={siteConfig.phoneHref}>
                  Позвонить мастеру
                </a>
                <a className="btn-secondary" href="/contacts">
                  Оставить заявку
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
            <div className="eyebrow">Кейсы</div>
            <h2 className="section-title">Типовые задачи, которые решаем каждый день</h2>
            <p className="section-subtitle">
              Не просто красивые слова, а реальные сценарии: ошибка розжига, утечка давления,
              нестабильный нагрев, проблемы с автоматикой и запуском.
            </p>
          </motion.div>

          <div className="grid grid-3 section-cards">
            {cases.map((item, index) => (
              <motion.div
                key={item.title}
                className="card case-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <span className="icon-box">
                  <BadgeCheck size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="case-card__footer">
                  <span className="muted">{item.footer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <motion.div className="card dark-panel" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
            <div className="eyebrow">Отзывы</div>
            <h2 className="section-title">Почему нас рекомендуют дальше</h2>

            <div className="grid grid-3 section-cards">
              {reviews.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="soft-card review-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="icon-box">
                    <Sparkles size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title">Частые вопросы</h2>
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
    </main>
  )
}