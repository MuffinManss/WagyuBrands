'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    name: 'Instagram',
    handle: '@wagyubrands',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: 'from-pink-medium to-lavender-medium',
    bg: 'bg-pink-light',
    border: 'border-pink-medium/30',
    followers: '—',
    cta: 'Follow us',
    href: 'https://www.instagram.com/wagyubrands/',
  },
  {
    name: 'TikTok',
    handle: '@wagyubrands',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
      </svg>
    ),
    color: 'from-mint-medium to-lavender-medium',
    bg: 'bg-mint-light',
    border: 'border-mint-medium/30',
    followers: '—',
    cta: 'Follow us',
    href: 'https://www.tiktok.com/@wagyubrands',
  },
  {
    name: 'Twitter / X',
    handle: '@wagyubrands',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'from-peach-medium to-pink-medium',
    bg: 'bg-peach-light',
    border: 'border-peach-medium/30',
    followers: '—',
    cta: 'Follow us',
    href: 'https://x.com/wagyubrands',
  },
  {
    name: 'Wallpaper',
    handle: 'Free Download',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
      </svg>
    ),
    color: 'from-pink-light to-peach-medium',
    bg: 'bg-cream-dark',
    border: 'border-brown-light/30',
    followers: '—',
    cta: 'Download',
    href: '/images/hero-main-scene.png',
  },
]

export default function Community() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="community"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      aria-label="Community and social media"
    >
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #e8d5f5 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-brown-dark text-sm font-semibold font-body mb-3 border border-brown-light/30">
            Join Us
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark mb-3">
            Follow the{' '}
            <span className="text-gradient">Adventures</span>
          </h2>
          <p className="font-body text-brown-medium text-lg max-w-xl mx-auto">
            Moomaru and Macarune are always up to something cute. Come hang out!
          </p>
        </motion.div>

        {/* Two-column: video left, socials right */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Video — left side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="w-full md:w-2/5 rounded-3xl overflow-hidden shadow-soft-lg border border-white/60 flex-shrink-0"
          >
            <video
              src="/images/social-media-preview.mov"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', display: 'block' }}
            />
          </motion.div>

          {/* Socials — right side */}
          <div className="flex-1 flex flex-col gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                {...(s.name === 'Wallpaper'
                  ? { download: 'moonmaru-wallpaper.png' }
                  : { target: '_blank', rel: 'noopener noreferrer' })}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`glass-card rounded-2xl border-2 ${s.border} shadow-soft p-4 flex items-center gap-4 group`}
                aria-label={`${s.name} — ${s.handle}`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-soft flex-shrink-0`}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-brown-dark text-sm">{s.name}</p>
                  <p className="font-body text-xs text-brown-light truncate">{s.handle}</p>
                </div>
                <motion.span
                  className="text-brown-light group-hover:text-brown-medium transition-colors text-lg"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
