'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
        {/* Text block */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">

          {/* Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-brown-dark text-sm font-semibold font-body mb-4 border border-brown-light/30">
              Our Story
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark dark:text-cream mb-5 leading-tight">
              About{' '}
              <span className="text-gradient">Wagyu Brands</span>
            </h2>
            <p className="font-body text-brown-medium dark:text-brown-light text-base md:text-lg leading-relaxed mb-4">
              Established in Osaka, 2025.
            </p>
            <p className="font-body text-brown-medium dark:text-brown-light text-base leading-relaxed">
              Wagyu Brands is a lifestyle brand centered on Moomaru and Friends, bringing a little joy to everyday life.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
