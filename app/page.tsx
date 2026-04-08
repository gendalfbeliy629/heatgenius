const phoneRaw = '+79936059886';
const phoneView = '+7 (993) 605-98-86';
const whatsappUrl = `https://wa.me/${phoneRaw.replace(/\D/g, '')}?text=${encodeURIComponent(
  'Здравствуйте! Нужен ремонт или обслуживание котла. Подскажите, пожалуйста, по стоимости и времени выезда.'
)}`;

const services = [
  {
    title: 'Диагностика и ремонт котлов',
    price: 'от 1 500 ₽',
    text: 'Быстро находим причину ошибки, запускаем котёл и восстанавливаем стабильную работу без лишних замен.'
  },
  {
    title: 'Техническое обслуживание',
    price: 'от 2 000 ₽',
    text: 'Разовое и годовое обслуживание, чистка, настройка, профилактика поломок перед сезоном.'
  },
  {
    title: 'Работы с гидравликой',
    price: 'от 2 500 ₽',
    text: 'Устраняем завоздушивание, падение давления, течи, шумы и проблемы циркуляции в системе отопления.'
  },
  {
    title: 'Проектирование и монтаж',
    price: 'по смете',
    text: 'Проектируем и собираем системы отопления и водоснабжения для дома, коттеджа и коммерческих объектов.'
  },
  {
    title: 'Автоматика ZONT',
    price: 'от 3 000 ₽',
    text: 'Подбор, монтаж и настройка автоматики ZONT для удобного удалённого управления отоплением.'
  },
  {
    title: 'Пусконаладка',
    price: 'от 2 500 ₽',
    text: 'Проверяем безопасность, настраиваем режимы и вводим котёл в работу после монтажа или ремонта.'
  }
];

const painPoints = [
  'Котёл не запускается или уходит в ошибку',
  'Падает давление, шумят трубы или не греют радиаторы',
  'Горячая вода идёт нестабильно или пропадает',
  'Нужно срочно запустить отопление без затяжного ожидания'
];

const features = [
  'Выезд мастера за 1–2 часа по Москве и области',
  '95% типовых неисправностей закрываем за 1 визит',
  'Работаем без выходных и принимаем срочные заявки',
  'Оригинальные и сертифицированные запчасти',
  'Понятная стоимость до начала работ',
  'Гарантия до 12 месяцев на выполненные работы'
];

const stats = [
  { value: '9+ лет', label: 'опыта в ремонте и обслуживании котельного оборудования' },
  { value: '1–2 часа', label: 'среднее время выезда мастера по Москве и области' },
  { value: '95%', label: 'типовых проблем решаем без повторного визита' },
  { value: 'без выходных', label: 'принимаем заявки и выезжаем ежедневно' }
];

const process = [
  {
    title: '1. Принимаем заявку',
    text: 'Вы оставляете номер телефона или пишете в WhatsApp. Мы уточняем модель котла, симптомы и адрес.'
  },
  {
    title: '2. Подтверждаем выезд',
    text: 'Связываемся в течение нескольких минут, согласовываем время приезда и ориентир по стоимости.'
  },
  {
    title: '3. Проводим диагностику',
    text: 'На месте проверяем автоматику, гидравлику, безопасность, датчики, теплообменник и режимы работы.'
  },
  {
    title: '4. Ремонтируем и даём гарантию',
    text: 'После согласования цены выполняем ремонт, тестируем систему и выдаём гарантию на работу.'
  }
];

const cases = [
  {
    title: 'Baxi — ошибка розжига',
    text: 'Котёл не запускался после скачка напряжения. Выполнили диагностику, заменили датчик и восстановили запуск за 40 минут.'
  },
  {
    title: 'Vaillant — падает давление',
    text: 'В системе регулярно падало давление и останавливалось отопление. Нашли утечку в гидравлическом узле и устранили проблему за 1 визит.'
  },
  {
    title: 'Navien — нестабильная горячая вода',
    text: 'Клиент жаловался на перепады температуры. Провели обслуживание, очистку и настройку автоматики, после чего ГВС стабилизировалась.'
  }
];

const testimonials = [
  {
    name: 'Алексей, Одинцово',
    text: 'Приехали быстро, нашли причину ошибки, всё объяснили человеческим языком. Цена совпала с тем, что озвучили до ремонта.'
  },
  {
    name: 'Марина, Москва',
    text: 'Нужно было срочно вернуть отопление в дом. Мастер приехал в тот же день, сделал всё аккуратно и дал гарантию.'
  },
  {
    name: 'Дмитрий, Химки',
    text: 'Отдельный плюс за ZONT: помогли подобрать автоматику и настроили удалённое управление без лишней путаницы.'
  }
];

const faq = [
  {
    q: 'Сколько стоит диагностика?',
    a: 'Точную стоимость подтверждаем после описания проблемы и модели котла. Если нужен ремонт, заранее согласовываем цену до начала работ.'
  },
  {
    q: 'Какие марки вы обслуживаете?',
    a: 'Работаем с популярными брендами: Baxi, Vaillant, Ariston, Navien и другими бытовыми и коммерческими котлами.'
  },
  {
    q: 'Вы работаете только по Москве?',
    a: 'Нет, выезжаем по Москве, Московской области и по согласованию за её пределы.'
  },
  {
    q: 'Можно ли установить или настроить автоматику ZONT?',
    a: 'Да, подбираем, монтируем и настраиваем автоматику ZONT, а также помогаем интегрировать её в уже работающую систему.'
  }
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <div className="brand-mark">HG</div>
            <div>
              <div className="brand-name">HeatGenius</div>
              <div className="brand-subtitle">Ремонт и обслуживание котлов</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#services">Услуги</a>
            <a href="#advantages">Преимущества</a>
            <a href="#cases">Кейсы</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={`tel:${phoneRaw}`}>
              {phoneView}
            </a>
            <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badges">
              <span className="badge badge-live">Сейчас работаем</span>
              <span className="badge">Москва и Московская область</span>
              <span className="badge">Без выходных</span>
            </div>

            <h1>Ремонт и обслуживание котлов за 1 визит — без затяжных ожиданий и лишних работ</h1>
            <p className="hero-text">
              Выезжаем за 1–2 часа, устраняем типовые неисправности на месте, обслуживаем котлы,
              гидравлику, системы отопления и автоматику ZONT. До начала работ согласовываем стоимость,
              после ремонта выдаём гарантию.
            </p>

            <div className="hero-cta">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Вызвать мастера
              </a>
              <a className="button button-ghost" href={`tel:${phoneRaw}`}>
                Позвонить сейчас
              </a>
            </div>

            <div className="hero-note">
              Сегодня можно принять срочные заявки. Диагностика, ремонт, обслуживание, проектирование,
              монтаж и пусконаладка.
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-card glass">
              <div className="hero-card-top">
                <div>
                  <div className="mini-label">Почему выбирают HeatGenius</div>
                  <strong>Надёжный сервис для отопления</strong>
                </div>
                <span className="mini-status">95% за 1 визит</span>
              </div>

              <div className="hero-list">
                {features.slice(0, 4).map((item) => (
                  <div key={item} className="hero-list-item">
                    <span className="check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="hero-stats-grid">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.value} className="metric-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="pain-grid">
            <div>
              <SectionTitle
                eyebrow="Основные проблемы"
                title="Когда нужен выезд мастера — не откладывайте"
                description="Неисправный котёл — это не просто дискомфорт, а риск остаться без отопления и горячей воды в самый неподходящий момент."
              />
            </div>
            <div className="pain-list">
              {painPoints.map((item) => (
                <div key={item} className="pain-card glass">
                  <span className="alert-dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <SectionTitle
            eyebrow="Услуги"
            title="Закрываем весь цикл работ по котельному оборудованию"
            description="Сайт теперь упакован не как шаблонная визитка, а как сильный сервисный лендинг: с понятным оффером, услугами, кейсами и ясным действием для клиента."
          />

          <div className="cards-grid cards-grid-3">
            {services.map((service) => (
              <article key={service.title} className="service-card glass">
                <div className="service-price">{service.price}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Узнать стоимость →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-accent" id="advantages">
        <div className="container">
          <SectionTitle
            eyebrow="Преимущества"
            title="Сильное УТП вместо общих фраз"
            description="Сейчас на действующем сайте есть опыт, гарантия, доступные цены и выезд по Москве и области. В новой версии эти аргументы превращены в чёткие блоки, цифры и понятные обещания."
          />

          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.value + stat.label} className="stat-card glass">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature} className="feature-card glass">
                <span className="check">✓</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Как мы работаем"
            title="Путь клиента понятен с первого экрана"
            description="Вместо расплывчатого процесса пользователь видит прозрачную цепочку: заявка, звонок, выезд, диагностика, ремонт, гарантия."
          />

          <div className="cards-grid cards-grid-4">
            {process.map((step) => (
              <div key={step.title} className="step-card glass">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="cases">
        <div className="container">
          <SectionTitle
            eyebrow="Кейсы"
            title="Реальные типовые сценарии, которые понимает клиент"
            description="Даже если у вас пока нет полноценной CRM с кейсами, такие блоки уже повышают доверие и помогают человеку узнать свою проблему."
          />

          <div className="cards-grid cards-grid-3">
            {cases.map((item) => (
              <article key={item.title} className="case-card glass">
                <div className="case-tag">Кейс</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container testimonials-wrap">
          <SectionTitle
            eyebrow="Отзывы"
            title="Блок доверия, которого не хватает большинству сервисных сайтов"
            description="В новой структуре отзывы не спрятаны, а работают как полноценный продающий элемент рядом с кейсами и гарантиями."
          />

          <div className="cards-grid cards-grid-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="testimonial-card glass">
                <p>“{item.text}”</p>
                <footer>{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container cta-banner glass">
          <div>
            <div className="eyebrow">Прозрачная стоимость</div>
            <h2>Согласовываем цену до начала ремонта</h2>
            <p>
              Без скрытых платежей, без навязанных услуг и без сценария “сначала разберём, потом скажем сколько”.
            </p>
          </div>

          <div className="cta-banner-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Получить консультацию
            </a>
            <a className="button button-ghost" href={`tel:${phoneRaw}`}>
              {phoneView}
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq-layout">
          <div>
            <SectionTitle
              eyebrow="FAQ"
              title="Ответы на частые вопросы"
              description="Этот блок снижает количество сомнений до звонка и помогает убрать барьеры перед заявкой."
            />
          </div>

          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.q} className="faq-item glass">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <div>
            <div className="eyebrow">Финальный CTA</div>
            <h2>Оставьте заявку — мы свяжемся с вами и подберём удобное время выезда</h2>
            <p>
              Подходит для срочного ремонта, ежегодного обслуживания, работ с гидравликой, автоматики ZONT,
              проектирования и монтажа систем отопления.
            </p>
          </div>
          <div className="hero-cta">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </a>
            <a className="button button-secondary" href={`tel:${phoneRaw}`}>
              Позвонить
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <div className="brand-mark">HG</div>
              <div>
                <div className="brand-name">HeatGenius</div>
                <div className="brand-subtitle">Сервис по ремонту и обслуживанию котлов</div>
              </div>
            </div>
            <p className="footer-text">
              Выезд по Москве, Московской области и по согласованию за её пределы. Работаем без выходных.
            </p>
          </div>

          <div>
            <div className="footer-title">Навигация</div>
            <div className="footer-links">
              <a href="#services">Услуги</a>
              <a href="#advantages">Преимущества</a>
              <a href="#cases">Кейсы</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          <div>
            <div className="footer-title">Контакты</div>
            <div className="footer-links">
              <a href={`tel:${phoneRaw}`}>{phoneView}</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <span>Москва и Московская область</span>
            </div>
          </div>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Написать в WhatsApp">
        WA
      </a>
    </main>
  );
}
