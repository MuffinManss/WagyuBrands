'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function AboutBrand() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      aria-label="About Wagyu Brands"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(180deg, #fffaf3 0%, #f5f0ff 100%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Split layout: text left, image right */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">

          {/* Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-brown-dark text-sm font-semibold font-body mb-4 border border-brown-light/30">
              🐄 Our Story
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark dark:text-cream mb-5 leading-tight">
              About{' '}
              <span className="text-gradient">Wagyu Brands</span>
            </h2>
            <p className="font-body text-brown-medium dark:text-brown-light text-base md:text-lg leading-relaxed mb-4">
              Wagyu Brands was born from a simple belief — the world is better with more softness in it. We create kawaii characters and collectibles that bring a little magic into everyday life.
            </p>
            <p className="font-body text-brown-medium dark:text-brown-light text-base leading-relaxed mb-4">
              Moonmaru and Macarune aren't just characters — they're companions. Whether you're decorating your space, adding to your collection, or just need something to smile at on a rough day, our little cows are here for it.
            </p>
            <p className="font-body text-brown-medium dark:text-brown-light text-base leading-relaxed">
              We're a small, passionate team designing every piece with intention — because good things deserve to be made with care. 🌸
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-4xl overflow-hidden border-2 border-white/60 shadow-soft-lg glass-card"
            >
              <Image
                src="/images/banner_middle.png"
                alt="Moonmaru and Macarune"
                fill
                className="object-contain p-4"
                sizes="384px"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
