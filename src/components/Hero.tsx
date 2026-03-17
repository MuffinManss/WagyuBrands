'use client'

import { useEffect, useState } from 'react'
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
      style={{ margin: 0, padding: 0, background: '#ffffff' }}
    >
      {/* ── Hero banner — desktop: logo | socials | cows | nav ── */}
      <div className="hidden md:flex" style={{ width: '100%', background: '#ffffff', alignItems: 'center', padding: '0 2rem', boxSizing: 'border-box', position: 'relative' }}>

        {/* Logo — far left */}
        <Image
          src="/images/banner_logo.png"
          alt="Wagyu Brands logo"
          width={400}
          height={200}
          priority
          style={{ height: 'auto', width: '180px', display: 'block', flexShrink: 0 }}
        />

        {/* Social icons — left half */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '0.75rem', alignItems: 'center' }}>
          {[
            { href: '#', label: 'Instagram', svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
            { href: '#', label: 'TikTok', svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/></svg> },
            { href: '#', label: 'Discord', svg: <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg> },
          ].map(s => (
            <a key={s.label} href={s.href} aria-label={s.label} style={{ color: '#5a3e2b', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#e8829a')}
              onMouseOut={e => (e.currentTarget.style.color = '#5a3e2b')}
            >
              {s.svg}
            </a>
          ))}
        </div>

        {/* Cows — absolutely centered in the full banner */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
          <Image
            src="/images/banner_middle.png"
            alt="Moonmaru and Macarune"
            width={400}
            height={200}
            priority
            style={{ height: 'auto', width: '180px', display: 'block' }}
          />
        </div>

        {/* Spacer to keep nav pushed right */}
        <div style={{ width: '180px', flexShrink: 0 }} />

        {/* Nav links — right side */}
        <nav style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '1.5rem', alignItems: 'center' }}>
          {[
            { label: 'Characters', href: '#characters' },
            { label: 'Story',      href: '#story' },
            { label: 'Products',   href: '#products' },
            { label: 'Gallery',    href: '#gallery' },
            { label: 'Community',  href: '#community' },
          ].map(item => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#5a3e2b',
                textDecoration: 'none',
                fontFamily: "'Bubblegum Sans', cursive",
                whiteSpace: 'nowrap',
              }}
              onMouseOver={e => (e.currentTarget.style.color = '#e8829a')}
              onMouseOut={e => (e.currentTarget.style.color = '#5a3e2b')}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Mobile banner — logo left, cows right ── */}
      <div className="flex md:hidden items-center justify-between px-4 py-2" style={{ background: '#ffffff' }}>
        <Image
          src="/images/banner_logo.png"
          alt="Wagyu Brands logo"
          width={400}
          height={200}
          priority
          style={{ height: 'auto', width: '130px', display: 'block' }}
        />
        <Image
          src="/images/banner_middle.png"
          alt="Moonmaru and Macarune"
          width={400}
          height={200}
          priority
          style={{ height: 'auto', width: '150px', display: 'block' }}
        />
      </div>

      {/* ── Main character image — full width ── */}
      <div style={{ width: '100%', lineHeight: 0 }}>
        <Image
          src="/images/main.png"
          alt="Moonmaru — kawaii cow character"
          width={1920}
          height={1080}
          priority
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* ── Text content — centered, below the image ── */}
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
    </section>
  )
}
