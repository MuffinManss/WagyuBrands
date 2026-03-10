'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const timeline = [
  {
    year: '2020',
    icon: '✏️',
    title: 'A Doodle in a Notebook',
    body: 'It started with a tiny cow sketch in the corner of a sketchbook — round ears, soft patches, the gentlest eyes. No one knew she\'d become Moonmaru. She was just a doodle looking for a home.',
    color: 'bg-pink-light border-pink-medium/40',
    accent: 'bg-pink',
  },
  {
    year: '2021',
    icon: '🌿',
    title: 'A Walrus Joins the Story',
    body: 'A year later, Macarune waddled onto the page — round, brown, and unbothered. He brought with him a love of sushi, sunflowers, and deep philosophical naps. The two became inseparable.',
    color: 'bg-lavender-light border-lavender-medium/40',
    accent: 'bg-lavender',
  },
  {
    year: '2022',
    icon: '💡',
    title: 'Wagyu Brands is Born',
    body: 'After years of sketching, dreaming, and an embarrassing number of sticker prototypes, Wagyu Brands officially came to life. The mission: bring these characters to people who believe the world needs more softness.',
    color: 'bg-mint-light border-mint-medium/40',
    accent: 'bg-mint',
  },
  {
    year: '2023',
    icon: '🌸',
    title: 'Building the World',
    body: 'Our little universe grew. Moonmaru got a flower meadow. Macarune got a cozy den. The characters developed backstories, quirks, and an entire lore written in the margins of too many notebooks.',
    color: 'bg-peach-light border-peach-medium/40',
    accent: 'bg-peach',
  },
  {
    year: '2024 →',
    icon: '🚀',
    title: 'The Launch Begins',
    body: 'Stickers, plushies, blind boxes, apparel — everything we\'ve dreamed of is finally becoming real. This is just the beginning of a much sweeter chapter. Thank you for being here for it.',
    color: 'bg-cream-dark border-brown-light/40',
    accent: 'bg-brown',
  },
]

export default function Story() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="story"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      aria-label="Our story section"
    >
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 100% 70% at 20% 50%, #ffe5d0 0%, transparent 60%)',
        }}
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
          <span className="inline-block px-4 py-1 rounded-full glass text-brown-dark text-sm font-semibold font-body mb-3 border border-brown-light/30">
            Our Origin Story
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark dark:text-cream mb-3">
            How It All{' '}
            <span className="text-gradient">Began</span>
          </h2>
          <p className="font-body text-brown-medium dark:text-brown-light text-lg max-w-xl mx-auto">
            Every big dream starts with a tiny sketch. Here's ours. 📝
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Timeline */}
          <div className="flex-1 relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-medium via-lavender-medium to-brown-light origin-top hidden sm:block"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex gap-4 sm:gap-6 items-start"
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-12 h-12 rounded-2xl ${item.accent} flex items-center justify-center text-xl shadow-soft border-2 border-white/60`}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="block text-xs font-display font-bold text-brown-medium mt-1 text-center">
                      {item.year}
                    </span>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`flex-1 rounded-3xl p-4 border-2 ${item.color} glass-card`}
                  >
                    <h3 className="font-display font-bold text-lg text-brown-dark dark:text-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-brown-medium dark:text-brown-light leading-relaxed">
                      {item.body}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Illustration column */}
          <div className="lg:w-64 flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-full"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-4xl overflow-hidden border-2 border-white/60 shadow-soft-xl glass-card aspect-square"
              >
                <Image
                  src="/images/character-scene.jpeg"
                  alt="Wagyu Brands character artwork"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="relative rounded-4xl overflow-hidden border-2 border-white/60 shadow-soft-xl w-48 h-48 glass-card"
            >
              <Image
                src="/images/mango-void.gif"
                alt="Moonmaru in the cosmic void"
                fill
                className="object-cover"
                unoptimized
                sizes="192px"
              />
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="text-center glass-card rounded-3xl p-4 border border-brown-light/30"
            >
              <p className="font-display text-sm text-brown-dark dark:text-cream italic">
                "We make characters for people who believe the world needs a little more softness."
              </p>
              <footer className="text-xs text-brown-light mt-2 font-body">— Wagyu Brands</footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
