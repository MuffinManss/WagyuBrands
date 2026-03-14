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
      aria-label="Hero section"
      style={{ margin: 0, padding: 0, background: 'linear-gradient(180deg, #fff5f9 0%, #fffaf3 100%)' }}
    >
      {/* ── Top banner — full width, no crop ── */}
      <div style={{ width: '100%', lineHeight: 0 }}>
        <Image
          src="/images/new_banner.jpg"
          alt="Wagyu Brands — Moonmaru and Macarune"
          width={1920}
          height={400}
          priority
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* ── Text content — centered ── */}
      <div style={{ textAlign: 'center', padding: '2.5rem 1.5rem 2rem' }}>
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pink border border-pink-medium/40 text-brown-dark text-sm font-semibold font-body mb-6"
        >
          ✨ Coming Soon — Join the Waitlist
        </motion.div>

        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display font-extrabold leading-tight mb-4 text-center"
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
          className="font-body text-brown-medium dark:text-brown-light text-base md:text-lg mx-auto mb-8 leading-relaxed"
          style={{ maxWidth: '560px' }}
        >
          Meet <strong className="text-brown-dark dark:text-cream">Moonmaru</strong> and{' '}
          <strong className="text-brown-dark dark:text-cream">Macarune</strong> — two impossibly
          cute characters bringing warmth and magic to your everyday life. Stickers, plushies,
          blind boxes, and more on the way. 🌸
        </motion.p>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" style={{ maxWidth: '420px', margin: '0 auto' }}>
          <EmailCapture source="hero" />
        </motion.div>

        <motion.p
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="text-xs text-brown-light font-body"
          style={{ marginTop: '0.75rem' }}
        >
          🐄 Join 1,000+ fans already waiting for the drop!
        </motion.p>
      </div>

      {/* ── Main character image — full-width cinematic splash ── */}
      <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
        <Image
          src="/images/main.png"
          alt="Moonmaru — kawaii cow character"
          width={1920}
          height={1080}
          priority
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </section>
  )
}
