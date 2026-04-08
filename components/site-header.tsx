import Link from 'next/link'
import { navigation, siteConfig } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="logo">
          <span className="logo-mark">HG</span>
          <span>HeatGenius</span>
        </Link>

        <nav className="nav-desktop" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-phone">
            <span>{siteConfig.schedule}</span>
            <a href={siteConfig.phoneHref}>
              <strong>{siteConfig.phoneDisplay}</strong>
            </a>
          </div>

          <a className="btn-secondary" href={siteConfig.phoneHref}>
            Позвонить
          </a>
        </div>
      </div>
    </header>
  )
}