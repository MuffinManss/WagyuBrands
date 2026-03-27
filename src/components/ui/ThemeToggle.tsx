'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('moonmaru-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored === 'dark' || (!stored && prefersDark)
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('moonmaru-theme', next ? 'dark' : 'light')
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-7 rounded-full glass border border-brown-light/50 flex items-center px-1 transition-colors duration-300"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        layout
        className="w-5 h-5 rounded-full flex items-center justify-center text-sm shadow-soft"
        style={{ background: dark ? '#3d2b1f' : '#ffd6e7' }}
        animate={{ x: dark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {dark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
}
