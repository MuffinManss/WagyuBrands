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

/* ── Inline SVG: Moonmaru (kawaii cow) ─────────────────────── */
function MoonmaruSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Moonmaru the kawaii cow">
      {/* Shadow */}
      <ellipse cx="100" cy="210" rx="52" ry="10" fill="#d4b8a0" opacity="0.3" />
      {/* Body */}
      <ellipse cx="100" cy="150" rx="62" ry="58" fill="#fff5ee" />
      {/* Brown patches on body */}
      <ellipse cx="68" cy="158" rx="22" ry="18" fill="#c89f7b" opacity="0.5" />
      <ellipse cx="128" cy="168" rx="18" ry="14" fill="#c89f7b" opacity="0.4" />
      {/* Head */}
      <ellipse cx="100" cy="88" rx="48" ry="44" fill="#fff5ee" />
      {/* Brown patch on head */}
      <ellipse cx="88" cy="76" rx="18" ry="14" fill="#c89f7b" opacity="0.5" />
      {/* Left ear */}
      <ellipse cx="58" cy="52" rx="14" ry="18" fill="#fff5ee" />
      <ellipse cx="58" cy="52" rx="8" ry="12" fill="#ffd6e7" />
      {/* Right ear */}
      <ellipse cx="142" cy="52" rx="14" ry="18" fill="#fff5ee" />
      <ellipse cx="142" cy="52" rx="8" ry="12" fill="#ffd6e7" />
      {/* Horns */}
      <ellipse cx="72" cy="38" rx="7" ry="12" fill="#e8d0b8" transform="rotate(-15 72 38)" />
      <ellipse cx="128" cy="38" rx="7" ry="12" fill="#e8d0b8" transform="rotate(15 128 38)" />
      {/* Eyes */}
      <ellipse cx="84" cy="85" rx="9" ry="10" fill="#3d2b1f" />
      <ellipse cx="116" cy="85" rx="9" ry="10" fill="#3d2b1f" />
      {/* Eye shine */}
      <circle cx="88" cy="81" r="3" fill="white" />
      <circle cx="120" cy="81" r="3" fill="white" />
      {/* Blush */}
      <ellipse cx="72" cy="100" rx="12" ry="7" fill="#ffd6e7" opacity="0.7" />
      <ellipse cx="128" cy="100" rx="12" ry="7" fill="#ffd6e7" opacity="0.7" />
      {/* Nose */}
      <ellipse cx="100" cy="108" rx="16" ry="10" fill="#ffd6e7" />
      <circle cx="94" cy="108" r="3.5" fill="#e07aab" />
      <circle cx="106" cy="108" r="3.5" fill="#e07aab" />
      {/* Mouth */}
      <path d="M92 118 Q100 124 108 118" stroke="#c89f7b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <rect x="68" y="195" width="22" height="18" rx="9" fill="#fff5ee" />
      <rect x="110" y="195" width="22" height="18" rx="9" fill="#fff5ee" />
      {/* Tail */}
      <path d="M162 155 Q178 145 174 162 Q170 172 162 168" stroke="#c89f7b" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="162" cy="170" r="7" fill="#ffd6e7" />
      {/* Flower accessory */}
      <circle cx="130" cy="66" r="6" fill="#ffd6e7" />
      <circle cx="140" cy="62" r="4" fill="#ffd6e7" />
      <circle cx="138" cy="72" r="4" fill="#ffd6e7" />
      <circle cx="128" cy="75" r="4" fill="#ffd6e7" />
      <circle cx="134" cy="69" r="5" fill="#fff5ee" />
    </svg>
  )
}

/* ── Inline SVG: Macarune (kawaii walrus) ──────────────────── */
function MacaruneSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Macarune the kawaii walrus">
      {/* Shadow */}
      <ellipse cx="100" cy="212" rx="55" ry="10" fill="#b8906a" opacity="0.3" />
      {/* Body */}
      <ellipse cx="100" cy="152" rx="66" ry="62" fill="#c89f7b" />
      {/* Tummy */}
      <ellipse cx="100" cy="162" rx="42" ry="40" fill="#e8d0b8" />
      {/* Head */}
      <ellipse cx="100" cy="86" rx="52" ry="48" fill="#c89f7b" />
      {/* Left ear */}
      <ellipse cx="54" cy="48" rx="13" ry="10" fill="#c89f7b" />
      <ellipse cx="54" cy="48" rx="7" ry="5" fill="#e8d0b8" />
      {/* Right ear */}
      <ellipse cx="146" cy="48" rx="13" ry="10" fill="#c89f7b" />
      <ellipse cx="146" cy="48" rx="7" ry="5" fill="#e8d0b8" />
      {/* Eyes */}
      <ellipse cx="82" cy="78" rx="10" ry="11" fill="#3d2b1f" />
      <ellipse cx="118" cy="78" rx="10" ry="11" fill="#3d2b1f" />
      {/* Eye shine */}
      <circle cx="86" cy="74" r="3.5" fill="white" />
      <circle cx="122" cy="74" r="3.5" fill="white" />
      {/* Blush */}
      <ellipse cx="66" cy="94" rx="13" ry="8" fill="#ffd6e7" opacity="0.6" />
      <ellipse cx="134" cy="94" rx="13" ry="8" fill="#ffd6e7" opacity="0.6" />
      {/* Snout */}
      <ellipse cx="100" cy="106" rx="22" ry="16" fill="#e8d0b8" />
      {/* Nostrils */}
      <ellipse cx="92" cy="104" rx="4" ry="5" fill="#b8906a" />
      <ellipse cx="108" cy="104" rx="4" ry="5" fill="#b8906a" />
      {/* Tusks */}
      <rect x="86" y="118" width="8" height="16" rx="4" fill="#fffaf3" />
      <rect x="106" y="118" width="8" height="16" rx="4" fill="#fffaf3" />
      {/* Mouth */}
      <path d="M90 114 Q100 120 110 114" stroke="#a07850" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Flippers */}
      <ellipse cx="38" cy="148" rx="16" ry="28" fill="#b8906a" transform="rotate(-20 38 148)" />
      <ellipse cx="162" cy="148" rx="16" ry="28" fill="#b8906a" transform="rotate(20 162 148)" />
      {/* Sunflower accessory */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <ellipse
          key={i}
          cx={160 + Math.cos((angle * Math.PI) / 180) * 9}
          cy={58 + Math.sin((angle * Math.PI) / 180) * 9}
          rx="5"
          ry="7"
          fill="#ffe5d0"
          transform={`rotate(${angle} ${160 + Math.cos((angle * Math.PI) / 180) * 9} ${58 + Math.sin((angle * Math.PI) / 180) * 9})`}
        />
      ))}
      <circle cx="160" cy="58" r="8" fill="#c89f7b" />
    </svg>
  )
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
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const tagline = useTypewriter(TYPEWRITER_TEXTS)

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-0 pb-12"
      aria-label="Hero section"
    >
      {/* moomaru_banner as background with gradient overlay */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <Image
          src="/images/moomaru_banner.png"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 130% 90% at 50% -10%, #ffd6e780 0%, #fffaf3cc 45%, #e8d5f590 100%)',
          }}
        />
        {/* Decorative blobs */}
        {[
          { top: '8%',  left: '3%',  color: '#ffd6e7', size: 280, delay: 0 },
          { top: '55%', right: '2%', color: '#e8d5f5', size: 220, delay: 1.5 },
          { top: '35%', left: '55%', color: '#d4f5e9', size: 180, delay: 2.5 },
          { top: '70%', left: '10%', color: '#ffe5d0', size: 160, delay: 1 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-50 pointer-events-none"
            style={{
              width: b.size, height: b.size,
              background: b.color,
              top: b.top,
              left: 'left' in b ? b.left : undefined,
              right: 'right' in b ? b.right : undefined,
            }}
            animate={{ scale: [1, 1.2, 1], y: [0, -18, 0] }}
            transition={{ duration: 7 + i * 2, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      {/* Floating decorative stars */}
      {['✦','✧','⋆','✩','✫','❋','✿'].map((sym, i) => (
        <motion.span
          key={i}
          className="absolute pointer-events-none select-none text-pink-medium/60 font-body"
          style={{
            fontSize: `${12 + (i % 3) * 6}px`,
            left: `${8 + i * 12}%`,
            top: `${10 + (i % 4) * 18}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4], rotate: [0, 20, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          {sym}
        </motion.span>
      ))}

      {/* character-scene banner at the very top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-8"
        aria-hidden="true"
      >
        <div className="relative w-full overflow-hidden">
          <Image
            src="/images/character-scene.jpeg"
            alt="Moonmaru characters scene"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          {/* Bottom fade into hero */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fffaf3] dark:from-[#1a1117] to-transparent" />
        </div>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">

          {/* ── Text column ─────────────────────────────── */}
          <div className="w-full max-w-2xl text-center z-10">
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
              className="font-body text-brown-medium dark:text-brown-light text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed"
            >
              Meet <strong className="text-brown-dark dark:text-cream">Moonmaru</strong> and{' '}
              <strong className="text-brown-dark dark:text-cream">Macarune</strong> — two impossibly
              cute characters ready to bring warmth and magic to your everyday life. Stickers,
              plushies, blind boxes, and more are on the way. 🌸
            </motion.p>

            {/* Email form */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
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
          className="flex flex-col items-center mt-14 gap-1"
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
      </div>
    </section>
  )
}
