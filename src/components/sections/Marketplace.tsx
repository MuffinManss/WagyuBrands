'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark dark:text-cream mb-4">
            Wagyu Shops{' '}
            <span className="text-gradient">Coming Soon</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
