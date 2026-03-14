'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import EmailCapture from './EmailCapture'

const TYPEWRITER_TEXTS = [
  'Where Every Day Gets a Little More Kawaii ✨',
  'Soft Characters. Sweet Dreams. 🌸',
  'Collect the Cute. Live the Dream. 🐄',
  'Friends You\'ll Never Want to Let Go 💕',
]

function useTypewriter(texts: string[], speed = 55, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout
    const current = texts[idx]
    if (typing) {
      if (display.length < current.length) {
        timer = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed)
      } else {
        timer = setTimeout(() => setTyping(false), pause)
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2)
      } else {
        setIdx((idx + 1) % texts.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timer)
  }, [display, typing, idx, texts, speed, pause])

  return display
}

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const tagline = useTypewriter(TYPEWRITER_TEXTS)

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      aria-label="Hero section"
      style={{ background: 'linear-gradient(180deg, #fff5f9 0%, #fffaf3 60%, #f5ede0 100%)' }}
    >
      {/* Subtle pastel blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[-8%] w-80 h-80 rounded-full blur-3xl opacity-40" style={{ background: '#ffd6e7' }} />
        <div className="absolute top-[30%] right-[-6%] w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: '#e8d5f5' }} />
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 rounded-full blur-3xl opacity-25" style={{ background: '#d4f5e9' }} />
      </div>

      {/* ── 1. Top banner — full width, no crop ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full relative z-10"
        aria-hidden="true"
      >
        <Image
          src="/images/new_banner.jpg"
          alt="Wagyu Brands — Moonmaru and Macarune"
          width={1920}
          height={400}
          priority
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>

      {/* ── 2. Text content — centered, above the character ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-10 pb-6 text-center">

        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pink border border-pink-medium/40 text-brown-dark text-sm font-semibold font-body mb-6"
        >
          ✨ Coming Soon — Join the Waitlist
        </motion.div>

        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display font-extrabold leading-tight mb-4"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
        >
          <span className="text-gradient">Wagyu</span>
          {' '}
          <span className="text-brown-dark dark:text-cream">Brands</span>
        </motion.h1>

        <motion.div
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="min-h-[2rem] mb-4"
        >
          <p className="font-display text-lg md:text-xl font-semibold text-brown-medium dark:text-brown-light">
            {tagline}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-5 bg-pink-dark ml-0.5 align-middle"
            />
          </p>
        </motion.div>

        <motion.p
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body text-brown-medium dark:text-brown-light text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Meet <strong className="text-brown-dark dark:text-cream">Moonmaru</strong> and{' '}
          <strong className="text-brown-dark dark:text-cream">Macarune</strong> — two impossibly
          cute characters bringing warmth and magic to your everyday life. Stickers, plushies,
          blind boxes, and more on the way. 🌸
        </motion.p>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="max-w-md mx-auto">
          <EmailCapture source="hero" />
        </motion.div>

        <motion.p
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="text-xs text-brown-light mt-3 font-body"
        >
          🐄 Join 1,000+ fans already waiting for the drop!
        </motion.p>
      </div>

      {/* ── 3. Main character image — the centerpiece ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        className="relative z-10 w-full flex justify-center px-4 pb-0"
      >
        {/* Glow under the image */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-3xl opacity-50 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #ffd6e7 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/main.png"
            alt="Moonmaru — kawaii cow character in a snowy scene"
            width={960}
            height={680}
            priority
            style={{ width: '100%', maxWidth: '720px', height: 'auto', display: 'block' }}
          />
        </motion.div>
      </motion.div>

      {/* Floating decorative stars */}
      {['✦', '✧', '⋆', '✩', '✫', '❋', '✿'].map((sym, i) => (
        <motion.span
          key={i}
          className="absolute pointer-events-none select-none text-pink-medium/50 font-body z-10"
          style={{
            fontSize: `${10 + (i % 3) * 5}px`,
            left: `${5 + i * 13}%`,
            top: `${20 + (i % 5) * 12}%`,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3], rotate: [0, 15, 0] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          {sym}
        </motion.span>
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative z-10 flex flex-col items-center py-6 gap-1"
      >
        <p className="text-xs font-body text-brown-light">scroll to explore</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-brown-light/50 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-brown-light/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
