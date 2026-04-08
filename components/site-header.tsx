'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Flame, Menu, X } from 'lucide-react'
import { navigation, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">
            <Flame size={20} />
          </span>
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

          <button
            type="button"
            className="mobile-toggle"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="container mobile-menu"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card" style={{ padding: 12 }}>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div style={{ padding: '12px 16px 4px' }}>
                <a className="btn-primary" href={siteConfig.phoneHref} style={{ width: '100%' }}>
                  Позвонить сейчас
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}