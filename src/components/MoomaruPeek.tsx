'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MoomaruPeek() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f5ede0 0%, #fffaf3 100%)' }}
      aria-hidden="true"
    >
      {/* Pink glow behind the cow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 blur-3xl opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #ffd6e7 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-full flex justify-center items-end"
      >
        <Image
          src="/images/moomaru_banner.png"
          alt="Moonmaru peeking"
          width={1200}
          height={860}
          style={{ width: '100%', maxWidth: '640px', height: 'auto', display: 'block' }}
        />
      </motion.div>
    </section>
  )
}
