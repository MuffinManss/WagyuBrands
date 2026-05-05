'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px' })

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Hero section"
      className="m-0 p-0 bg-white"
    >
      {/* ── Desktop banner: logo | socials | cows | nav ── */}
      <div className="hidden md:flex w-full bg-white items-center px-8 relative h-28 overflow-hidden">

        {/* Left: Logo + Social icons */}
        <motion.div
          className="flex-1 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/hero-wagyu-logo.png"
            alt="Wagyu Brands logo"
            width={400}
            height={200}
            priority
            className="h-full w-auto max-h-[112px] object-contain block shrink-0"
          />
          <div className="flex-1 flex justify-center items-center gap-3">
            {[
              {
                href: 'https://www.instagram.com/wagyubrands/', label: 'Instagram',
                svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
              },
              {
                href: 'https://www.tiktok.com/@wagyubrands', label: 'TikTok',
                svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" /></svg>,
              },
              {
                href: '#', label: 'Discord',
                svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>,
              },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-brown-dark"
                whileHover={{ scale: 1.15 }}
                style={{ color: '#5a3e2b' }}
                onMouseOver={e => (e.currentTarget.style.color = '#e8829a')}
                onMouseOut={e => (e.currentTarget.style.color = '#5a3e2b')}
              >
                {s.svg}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Cows — absolutely centered in the full banner */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="/images/hero-characters-center.png"
            alt="Moomaru and Macarune"
            width={400}
            height={200}
            priority
            className="h-full w-auto max-h-[76px] object-contain block"
            style={{ height: '76px' }}
          />
        </div>

        {/* Spacer to keep nav pushed right */}
        <div className="w-[180px] shrink-0" />

        {/* Nav links — right side */}
        <motion.nav
          className="flex-1 flex justify-center items-center gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: 'Marketplace', href: '#marketplace' },
            { label: 'About',       href: '#about' },
            { label: 'Characters',  href: '#characters' },
            { label: 'Community',   href: '#community' },
          ].map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-[1.05rem] font-extrabold text-brown-dark no-underline whitespace-nowrap transition-colors"
              style={{ fontFamily: "'Bubblegum Sans', cursive" }}
              onMouseOver={e => (e.currentTarget.style.color = '#e8829a')}
              onMouseOut={e => (e.currentTarget.style.color = '#5a3e2b')}
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      </div>

      {/* ── Mobile banner — logo left, cows right ── */}
      <div className="flex md:hidden items-center justify-between px-4 bg-white h-[72px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="h-full flex items-center"
        >
          <Image
            src="/images/hero-wagyu-logo.png"
            alt="Wagyu Brands logo"
            width={400}
            height={200}
            priority
            className="h-full w-auto max-h-[72px] object-contain block"
          />
        </motion.div>
        <div className="h-full flex items-center">
          <Image
            src="/images/hero-characters-center.png"
            alt="Moomaru and Macarune"
            width={400}
            height={200}
            priority
            className="h-full w-auto max-h-[48px] object-contain block"
          />
        </div>
      </div>

      {/* ── Main character scene — full width ── */}
      <motion.div
        className="w-full leading-[0]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/images/hero-main-scene.png"
          alt="Moomaru — kawaii cow character"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto block"
        />
      </motion.div>
    </section>
  )
}
