'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import EmailCapture from './EmailCapture'

const NAV_LINKS = [
  { label: 'Home',       href: '#hero' },
  { label: 'Characters', href: '#characters' },
  { label: 'Our Story',  href: '#story' },
  { label: 'Products',   href: '#products' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Community',  href: '#community' },
]

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-4 overflow-hidden" aria-label="Footer">
      {/* Wave top */}
      <div className="wave-divider -mt-16 mb-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: 64 }}>
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z"
            fill="currentColor"
            className="text-cream dark:text-[#1a1117]"
          />
        </svg>
      </div>

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, #f5ede0 0%, #fffaf3 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Top: signup CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 glass-card rounded-4xl p-8 border border-white/60 shadow-soft"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-20 h-20 mx-auto mb-4"
          >
            <Image
              src="/images/mango-sushi.gif"
              alt="Macarune"
              fill
              className="object-contain"
              unoptimized
              sizes="80px"
            />
          </motion.div>
          <h3 className="font-display font-extrabold text-2xl text-brown-dark dark:text-cream mb-2">
            Don't miss the drop! 🎀
          </h3>
          <p className="font-body text-brown-medium dark:text-brown-light text-sm mb-6 max-w-sm mx-auto">
            Be the first to know about launches, limited editions, and exclusive early-bird deals.
          </p>
          <EmailCapture source="footer" compact />
        </motion.div>

        {/* Main footer grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col gap-1 mb-4">
              <div className="relative h-10 w-36">
                <Image
                  src="/images/moonmaru_logo.png"
                  alt="Moonmaru"
                  fill
                  className="object-contain object-left"
                  sizes="144px"
                />
              </div>
              <p className="font-body text-xs text-brown-light">by Wagyu Brands</p>
            </div>
            <p className="font-body text-sm text-brown-medium dark:text-brown-light leading-relaxed max-w-xs">
              Kawaii collectible characters for people who believe the world needs a little more softness.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-display font-bold text-brown-dark dark:text-cream text-sm uppercase tracking-wider mb-4">
              Explore
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-brown-medium dark:text-brown-light hover:text-brown-dark dark:hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="font-display font-bold text-brown-dark dark:text-cream text-sm uppercase tracking-wider mb-4">
              Follow Us
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Instagram', icon: '📸', href: '#' },
                { label: 'TikTok',    icon: '🎵', href: '#' },
                { label: 'Twitter',   icon: '🐦', href: '#' },
                { label: 'YouTube',   icon: '▶️', href: '#' },
                { label: 'Discord',   icon: '💬', href: '#' },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-2xl glass-card border border-white/60 flex items-center justify-center text-lg shadow-soft"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="font-body text-xs text-brown-light mt-4">
              Coming soon on all platforms! 🌸
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brown-light/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-brown-light">
          <p>© {new Date().getFullYear()} Wagyu Brands. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-pink-medium animate-pulse-soft">♥</span> for the kawaii community
          </p>
        </div>
      </div>
    </footer>
  )
}
