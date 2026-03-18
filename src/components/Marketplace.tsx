'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const products = [
  { emoji: '🌸', name: 'Sticker Sheets', desc: 'Holographic & matte designs for your world', color: 'from-pink-light to-cream', border: 'border-pink-medium/40' },
  { emoji: '🧸', name: 'Plushies', desc: 'Squishy, huggable Moonmaru & Macarune', color: 'from-lavender-light to-cream', border: 'border-lavender-medium/40' },
  { emoji: '🎁', name: 'Blind Boxes', desc: 'Mystery figures — who will you get?', color: 'from-peach-light to-cream', border: 'border-peach-medium/40' },
  { emoji: '👕', name: 'Apparel', desc: 'Cozy tees, hoodies & accessories', color: 'from-mint-light to-cream', border: 'border-mint-medium/40' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Marketplace() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="marketplace"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      aria-label="Marketplace coming soon"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(160deg, #fff5f8 0%, #f5f0ff 50%, #f0fff8 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, #fce4ec 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-pink text-brown-dark text-sm font-semibold font-body mb-4 border border-pink-medium/30">
            🛍️ The Shop
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark dark:text-cream mb-4">
            Marketplace{' '}
            <span className="text-gradient">Coming Soon</span>
          </h2>
          <p className="font-body text-brown-medium dark:text-brown-light text-lg max-w-lg mx-auto">
            Stickers, plushies, blind boxes and more — all designed with love. The kawaii shop opens soon. 🎀
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`relative glass-card rounded-3xl border-2 ${p.border} shadow-soft-lg p-6 flex flex-col items-center text-center gap-3 overflow-hidden cursor-default`}
            >
              {/* top gradient stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${p.color}`} aria-hidden="true" />

              <motion.span
                className="text-4xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {p.emoji}
              </motion.span>
              <p className="font-display font-extrabold text-brown-dark dark:text-cream text-sm leading-tight">{p.name}</p>
              <p className="font-body text-xs text-brown-light leading-relaxed">{p.desc}</p>

              {/* Coming soon badge */}
              <span className="mt-auto inline-block bg-gradient-to-r from-pink-medium to-lavender-medium text-white text-xs font-semibold font-body px-3 py-1 rounded-full shadow-soft">
                Coming Soon
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="glass-card rounded-4xl border border-white/60 shadow-soft-lg p-8 md:p-10 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-pink-light via-lavender-light to-mint-light opacity-50 rounded-4xl"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="text-3xl mb-3">✨🛒✨</p>
            <h3 className="font-display font-extrabold text-2xl text-brown-dark dark:text-cream mb-2">
              Be first in line
            </h3>
            <p className="font-body text-brown-medium dark:text-brown-light text-sm max-w-sm mx-auto mb-5">
              Sign up and we'll send you an exclusive early-access invite the moment the shop goes live.
            </p>
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block btn-shimmer font-display font-bold text-white px-8 py-3.5 rounded-full shadow-soft"
            >
              Notify Me 🎀
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
