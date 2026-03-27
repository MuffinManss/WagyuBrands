'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const characters = [
  {
    name: 'Moomaru',
    color: 'from-pink-light to-cream',
    borderColor: 'border-pink-medium/40',
    badgeBg: 'bg-pink',
    image: '/images/moomaru-sunflowers.gif',
    unoptimized: true,
    role: 'Primary Mascot',
    birthday: 'February 11th — Hokkaido Snow Festival season',
    zodiac: 'Aquarius',
    description:
      'A gentle little cow from a quiet dairy meadow in Hokkaido, where the snow sparkles like sugar. She loves watching snowflakes fall, collecting ribbons, and sharing warm drinks with friends.',
    personality: ['Gentle', 'Comforting', 'Shy'],
    favorites: [
      { label: 'Fresh Hokkaido milk & melonpan' },
      { label: 'Collecting ribbons' },
      { label: 'Cozy cafés' },
      { label: 'Watching snow fall' },
    ],
    funFact: 'Her milk stays warm even on snowy days.',
  },
  {
    name: 'Macarune',
    color: 'from-lavender-light to-cream',
    borderColor: 'border-lavender-medium/40',
    badgeBg: 'bg-lavender',
    image: '/images/macarune-character.png',
    unoptimized: false,
    role: 'Secondary Mascot',
    birthday: '—',
    zodiac: '—',
    description:
      'Macarune is a round, velvety-brown walrus who takes life at his own perfect pace. He\'s always warm, always snuggly, and has an uncanny ability to make everyone around him feel instantly at home. He believes every day deserves a cozy snack.',
    personality: ['Cozy', 'Loyal', 'Playful', 'Warm'],
    favorites: [
      { label: 'Sushi Picnics' },
      { label: 'Sunflower Fields' },
      { label: 'Lo-fi Music' },
      { label: 'Soft Blankets' },
    ],
    funFact: 'Macarune keeps a tiny jar of sunflower seeds in his pocket at all times, just in case someone needs cheering up.',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Characters() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="characters"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      aria-label="Characters section"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, #e8d5f5 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full glass-pink text-brown-dark text-sm font-semibold font-body mb-3 border border-pink-medium/30">
            Meet the Gang
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark dark:text-cream mb-3">
            Our{' '}
            <span className="text-gradient">Characters</span>
          </h2>
          <p className="font-body text-brown-medium dark:text-brown-light text-lg max-w-xl mx-auto">
            Two little souls, one big world of kawaii adventures.
          </p>
        </motion.div>

        {/* Character cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {characters.map((char, i) => (
            <motion.article
              key={char.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className={`relative rounded-4xl glass-card border-2 ${char.borderColor} shadow-soft-lg overflow-hidden`}
            >
              {/* Card gradient top */}
              <div className={`h-2 w-full bg-gradient-to-r ${char.color}`} aria-hidden="true" />

              <div className="p-7 flex flex-col gap-5">
                {/* Top row: image + intro */}
                <div className="flex items-start gap-5">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex-shrink-0"
                  >
                    <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden border-2 border-white/60 shadow-soft">
                      <Image
                        src={char.image}
                        alt={`${char.name} character illustration`}
                        fill
                        className="object-cover"
                        unoptimized={char.unoptimized}
                        sizes="144px"
                      />
                    </div>
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <span className={`inline-block ${char.badgeBg} text-brown-dark text-xs font-semibold font-body px-3 py-1 rounded-full mb-2`}>
                      {char.role}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-brown-dark dark:text-cream mb-1">
                      {char.name}
                    </h3>
                    <p className="font-body text-brown-medium dark:text-brown-light text-sm leading-relaxed">
                      {char.description}
                    </p>
                  </div>
                </div>

                {/* Birthday & Zodiac */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl glass border border-white/40 px-4 py-3">
                    <p className="font-body font-semibold text-xs text-brown-light uppercase tracking-wider mb-1">Birthday</p>
                    <p className="font-body text-xs text-brown-dark dark:text-cream leading-snug">{char.birthday}</p>
                  </div>
                  <div className="rounded-2xl glass border border-white/40 px-4 py-3">
                    <p className="font-body font-semibold text-xs text-brown-light uppercase tracking-wider mb-1">Zodiac</p>
                    <p className="font-body text-xs text-brown-dark dark:text-cream">{char.zodiac}</p>
                  </div>
                </div>

                {/* Personality chips */}
                <div>
                  <p className="font-body font-semibold text-xs text-brown-light uppercase tracking-wider mb-2">Traits</p>
                  <div className="flex flex-wrap gap-2">
                    {char.personality.map(p => (
                      <span
                        key={p}
                        className="px-3 py-1 rounded-full glass text-brown-dark dark:text-cream text-xs font-body font-medium border border-white/40"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Favorites */}
                <div>
                  <p className="font-body font-semibold text-xs text-brown-light uppercase tracking-wider mb-2">Likes</p>
                  <div className="grid grid-cols-2 gap-2">
                    {char.favorites.map(f => (
                      <div key={f.label} className="flex items-center gap-2 text-sm font-body text-brown-medium dark:text-brown-light">
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fun fact */}
                <div className={`rounded-2xl p-3 bg-gradient-to-r ${char.color} border border-white/40`}>
                  <p className="text-xs font-body text-brown-dark">
                    <strong>Fun fact:</strong> {char.funFact}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
