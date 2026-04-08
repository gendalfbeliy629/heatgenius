import Link from 'next/link'
import { navigation, siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h3 className="footer__title">HeatGenius</h3>
            <p>
              Ремонт и обслуживание котлов, монтаж отопления, настройка автоматики ZONT.
              Работаем по Москве и Московской области.
            </p>
          </div>

          <div>
            <h3 className="footer__title">Разделы</h3>
            <div className="footer-links">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer__title">Контакты</h3>
            <div className="footer-links">
              <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <span>{siteConfig.city}</span>
              <span>{siteConfig.schedule}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 HeatGenius. Все права защищены.
        </div>
      </div>
    </footer>
  )
}