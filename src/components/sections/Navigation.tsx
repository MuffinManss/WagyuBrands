'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const NAV_ITEMS = [
  { label: 'Home',       href: '#hero' },
  { label: 'Characters', href: '#characters' },
  { label: 'Story',      href: '#story' },
  { label: 'Products',   href: '#products' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Community',  href: '#community' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      // Active section detection
      const sections = NAV_ITEMS.map(n => n.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navVisible = scrolled || isMobile

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: navVisible ? 0 : -100, opacity: navVisible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3 glass shadow-soft border-b border-white/30"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center" aria-label="Moonmaru home">
          <Image
            src="/images/moomaru-logo.png"
            alt="Moonmaru"
            width={120}
            height={40}
            className="object-contain h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 font-body
                  ${active === item.href
                    ? 'bg-pink text-brown-dark shadow-soft'
                    : 'text-brown-medium hover:bg-pink/40 hover:text-brown-dark'
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full glass-card"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="block w-4 h-0.5 bg-brown-dark rounded-full"
                animate={{
                  rotate: menuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                  y: menuOpen ? (i === 0 ? 8 : i === 2 ? -8 : 0) : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 inset-x-4 z-40 glass rounded-3xl shadow-soft-xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all font-body
                      ${active === item.href
                        ? 'bg-pink text-brown-dark'
                        : 'text-brown-medium hover:bg-pink/30'
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
