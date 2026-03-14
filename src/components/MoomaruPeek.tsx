'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MoomaruPeek() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#fffaf3] to-[#f5ede0] dark:from-[#1a1117] dark:to-[#1a1117] pt-8"
      aria-hidden="true"
    >
      {/* Soft background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 rounded-full blur-3xl opacity-30" style={{ background: '#ffd6e7' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative flex justify-center items-end"
      >
        <Image
          src="/images/moomaru_banner.png"
          alt="Moonmaru peeking"
          width={500}
          height={360}
          className="w-48 sm:w-64 md:w-80 h-auto object-contain"
        />
      </motion.div>
    </section>
  )
}
