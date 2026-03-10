'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const products = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="6" width="36" height="36" rx="8" fill="#ffd6e7" />
        <path d="M14 16 Q24 10 34 16 Q34 26 24 34 Q14 26 14 16Z" fill="#f5a7c7" />
        <circle cx="20" cy="20" r="2" fill="#e07aab" />
        <circle cx="28" cy="20" r="2" fill="#e07aab" />
        <path d="M20 26 Q24 29 28 26" stroke="#e07aab" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    name: 'Sticker Sheets',
    teaser: 'Holographic, glossy & die-cut stickers featuring Moonmaru, Macarune, and their whole world. Stick them everywhere — your journal, laptop, water bottle, heart.',
    badge: 'Most Wanted',
    badgeColor: 'bg-pink text-brown-dark',
    color: 'from-pink-light to-cream',
    border: 'border-pink-medium/30',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <ellipse cx="24" cy="30" rx="16" ry="14" fill="#e8d5f5" />
        <ellipse cx="24" cy="18" rx="10" ry="9" fill="#c4a8e8" />
        <circle cx="21" cy="16" r="1.5" fill="#9b72cc" />
        <circle cx="27" cy="16" r="1.5" fill="#9b72cc" />
        <path d="M21 21 Q24 24 27 21" stroke="#9b72cc" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <ellipse cx="17" cy="14" rx="3.5" ry="4" fill="#e8d5f5" />
        <ellipse cx="31" cy="14" rx="3.5" ry="4" fill="#e8d5f5" />
      </svg>
    ),
    name: 'Plushies',
    teaser: 'Ultra-soft, huggable plush versions of Moonmaru and Macarune. Premium materials, embroidered faces, and sizes ranging from keychain to pillow-sized.',
    badge: 'Fan Favorite',
    badgeColor: 'bg-lavender text-brown-dark',
    color: 'from-lavender-light to-cream',
    border: 'border-lavender-medium/30',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="12" width="32" height="28" rx="6" fill="#d4f5e9" />
        <rect x="14" y="6" width="20" height="10" rx="4" fill="#8ed8be" />
        <circle cx="24" cy="26" r="8" fill="#8ed8be" />
        <text x="24" y="30" textAnchor="middle" fontSize="10" fill="white">?</text>
      </svg>
    ),
    name: 'Blind Boxes',
    teaser: 'Mystery collectibles — each box holds one secret character figure in a secret pose. Some come with chase variants so rare, you might never find them. Good luck~',
    badge: 'Mystery ✨',
    badgeColor: 'bg-mint text-brown-dark',
    color: 'from-mint-light to-cream',
    border: 'border-mint-medium/30',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M10 14 Q10 8 24 8 Q38 8 38 14 L36 38 Q36 42 24 42 Q12 42 12 38Z" fill="#ffe5d0" />
        <path d="M16 14 Q16 10 24 10 Q32 10 32 14" stroke="#f5c4a0" strokeWidth="2" fill="none" />
        <circle cx="24" cy="26" r="6" fill="#f5c4a0" />
        <circle cx="22" cy="24" r="1.5" fill="#e09060" />
        <circle cx="26" cy="24" r="1.5" fill="#e09060" />
      </svg>
    ),
    name: 'Apparel',
    teaser: 'Cozy oversized tees, hoodies, and bucket hats with original character art. Wear your soft side on the outside — because the world needs more pastel.',
    badge: 'New',
    badgeColor: 'bg-peach text-brown-dark',
    color: 'from-peach-light to-cream',
    border: 'border-peach-medium/30',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="16" fill="#ffd6e7" />
        <path d="M16 20 Q24 14 32 20 Q32 28 24 34 Q16 28 16 20Z" fill="#f5a7c7" />
        <circle cx="20" cy="22" r="1.5" fill="#e07aab" />
        <circle cx="28" cy="22" r="1.5" fill="#e07aab" />
        <rect x="18" y="8" width="12" height="4" rx="2" fill="#f5a7c7" />
      </svg>
    ),
    name: 'Accessories',
    teaser: 'Acrylic keychains, hair clips, lanyards, enamel pins, and phone cases. Your whole life can be decorated with Moonmaru\'s face. We support this lifestyle.',
    badge: 'Coming Soon',
    badgeColor: 'bg-cream-dark text-brown-dark',
    color: 'from-cream-dark to-cream',
    border: 'border-brown-light/30',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="10" width="32" height="28" rx="4" fill="#e8d5f5" />
        <rect x="12" y="16" width="24" height="3" rx="1.5" fill="#c4a8e8" />
        <rect x="12" y="22" width="18" height="2" rx="1" fill="#c4a8e8" opacity="0.6" />
        <rect x="12" y="27" width="14" height="2" rx="1" fill="#c4a8e8" opacity="0.4" />
        <circle cx="34" cy="34" r="8" fill="#9b72cc" />
        <path d="M30 34 L33 37 L38 31" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    name: 'Stationery',
    teaser: 'Notebooks, washi tape, memo pads, and greeting cards. For the people who still write things down by hand and use stickers as punctuation.',
    badge: 'Launching Soon',
    badgeColor: 'bg-lavender text-brown-dark',
    color: 'from-lavender-light to-cream',
    border: 'border-lavender-medium/30',
  },
]

export default function Products() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="products"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      aria-label="Coming soon products"
    >
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 80% 50%, #d4f5e9 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-brown-dark text-sm font-semibold font-body mb-3 border border-brown-light/30">
            Dropping Soon
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark dark:text-cream mb-3">
            Collect the{' '}
            <span className="text-gradient">Cute</span>
          </h2>
          <p className="font-body text-brown-medium dark:text-brown-light text-lg max-w-xl mx-auto">
            Everything your kawaii heart has been waiting for. 🌸
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative glass-card rounded-4xl border-2 ${p.border} shadow-soft p-6 flex flex-col gap-4 overflow-hidden group`}
            >
              {/* Hover shimmer */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-4xl`}
                aria-hidden="true"
              />

              <div className="relative z-10 flex items-start justify-between">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 rounded-3xl glass flex items-center justify-center shadow-soft border border-white/60"
                >
                  {p.icon}
                </motion.div>
                <span className={`${p.badgeColor} text-xs font-semibold font-body px-3 py-1 rounded-full`}>
                  {p.badge}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-bold text-xl text-brown-dark dark:text-cream mb-2">
                  {p.name}
                </h3>
                <p className="font-body text-sm text-brown-medium dark:text-brown-light leading-relaxed">
                  {p.teaser}
                </p>
              </div>

              <motion.a
                href="#hero"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 mt-auto inline-block text-center text-sm font-display font-semibold text-brown-dark glass rounded-2xl px-4 py-2 border border-white/60 hover:bg-white/60 transition-all"
              >
                Notify Me →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="font-body text-brown-medium dark:text-brown-light mb-4">
            Be first to know when these drop — sign up for early access! 🎀
          </p>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block btn-shimmer font-display font-bold text-white px-8 py-3.5 rounded-full shadow-soft"
          >
            Get Early Access ✨
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
