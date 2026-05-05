'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import EmailCapture from '@/components/sections/EmailCapture'

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

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brown-dark mb-4">
            Wagyu Shops{' '}
            <span className="text-gradient">Coming Soon</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <EmailCapture
            source="marketplace"
            placeholder="your@email.com"
            buttonText="Notify Me"
          />
        </motion.div>
      </div>
    </section>
  )
}
