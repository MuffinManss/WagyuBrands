'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const tagline = useTypewriter(TYPEWRITER_TEXTS)

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── main.png as full hero background ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <Image
          src="/images/main.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay — heavier on left for text readability, lighter on right to show character */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(255,250,243,0.92) 0%, rgba(255,214,231,0.80) 35%, rgba(255,214,231,0.40) 60%, rgba(232,213,245,0.15) 100%)',
          }}
        />
        {/* Bottom fade for smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fffaf3] dark:from-[#1a1117] to-transparent" />
      </motion.div>

      {/* Floating decorative stars */}
      {['✦','✧','⋆','✩','✫','❋','✿'].map((sym, i) => (
        <motion.span
          key={i}
          className="absolute pointer-events-none select-none text-pink-medium/60 font-body z-10"
          style={{
            fontSize: `${12 + (i % 3) * 6}px`,
            left: `${6 + i * 11}%`,
            top: `${28 + (i % 4) * 14}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4], rotate: [0, 20, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          {sym}
        </motion.span>
      ))}

      {/* ── New banner — smaller at top ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full relative z-10"
        aria-hidden="true"
      >
        <Image
          src="/images/new_banner.jpg"
          alt="Wagyu Brands — Moonmaru and Macarune"
          width={1920}
          height={400}
          className="w-full h-auto"
          style={{ maxHeight: '130px', objectFit: 'contain', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#fffaf3]/70 to-transparent" />
      </motion.div>

      {/* ── Hero text content ── */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-4 py-8">
        <div className="w-full max-w-xl lg:max-w-2xl">

          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pink border border-pink-medium/40 text-brown-dark text-sm font-semibold font-body mb-5"
          >
            ✨ Coming Soon — Join the Waitlist
          </motion.div>

          {/* Brand name */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-display font-extrabold leading-tight mb-4"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
          >
            <span className="text-gradient">Wagyu</span>
            <br />
            <span className="text-brown-dark dark:text-cream">Brands</span>
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="min-h-[2.5rem] mb-5"
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

          {/* Sub-text */}
          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="font-body text-brown-medium dark:text-brown-light text-base md:text-lg max-w-lg mb-8 leading-relaxed"
          >
            Meet <strong className="text-brown-dark dark:text-cream">Moonmaru</strong> and{' '}
            <strong className="text-brown-dark dark:text-cream">Macarune</strong> — two impossibly
            cute characters ready to bring warmth and magic to your everyday life. Stickers,
            plushies, blind boxes, and more are on the way. 🌸
          </motion.p>

          {/* Email form */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="max-w-md">
            <EmailCapture source="hero" />
          </motion.div>

          {/* Social proof */}
          <motion.p
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="text-xs text-brown-light mt-4 font-body"
          >
            🐄 Join 1,000+ fans already waiting for the drop!
          </motion.p>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="relative z-10 flex flex-col items-center pb-6 gap-1"
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
