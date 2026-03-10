'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

interface Props {
  source?: string
  placeholder?: string
  buttonText?: string
  compact?: boolean
}

type State = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function EmailCapture({
  source = 'website',
  placeholder = 'your@email.com',
  buttonText = 'Join the Herd 🐄',
  compact = false,
}: Props) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const validate = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())

  const shoot = () => {
    const colors = ['#ffd6e7', '#e8d5f5', '#d4f5e9', '#c89f7b', '#ffe5d0', '#ffffff']
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors,
      shapes: ['circle', 'square'],
    })
    setTimeout(() => confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors,
    }), 200)
    setTimeout(() => confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors,
    }), 400)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate(email)) {
      setState('error')
      setMessage('Please enter a valid email address ✉️')
      return
    }

    setState('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setState('success')
        setMessage('You\'re in the herd! ✨ We\'ll see you soon~')
        setEmail('')
        shoot()
      } else if (res.status === 409) {
        setState('duplicate')
        setMessage('You\'re already on the list! 🌸')
      } else {
        setState('error')
        setMessage(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setState('error')
      setMessage('Connection error. Please try again.')
    }
  }

  const stateColors: Record<State, string> = {
    idle:      '',
    loading:   '',
    success:   'border-mint-medium bg-mint-light',
    error:     'border-pink-dark/40 bg-pink-light',
    duplicate: 'border-lavender-medium bg-lavender-light',
  }

  return (
    <div className={`w-full ${compact ? 'max-w-sm' : 'max-w-md'} mx-auto`}>
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-4 px-6 rounded-3xl glass-card border border-mint-medium/50"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6 }}
              className="text-4xl mb-2"
            >
              🎉
            </motion.div>
            <p className="font-display font-bold text-brown-dark text-lg">{message}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            className={`flex ${compact ? 'flex-row gap-2' : 'flex-col sm:flex-row gap-3'}`}
            noValidate
          >
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (state !== 'idle') setState('idle')
                }}
                placeholder={placeholder}
                disabled={state === 'loading'}
                className={`w-full px-5 py-3.5 rounded-full glass-card border-2 text-brown-dark placeholder-brown-light/80 font-body text-sm
                  focus:outline-none focus:border-pink-medium transition-all duration-200
                  disabled:opacity-50
                  ${stateColors[state] || 'border-brown-light/40'}
                  ${!compact ? 'text-base' : ''}
                `}
                aria-label="Email address"
                aria-describedby={message ? 'email-message' : undefined}
                autoComplete="email"
              />
            </div>

            <motion.button
              type="submit"
              disabled={state === 'loading'}
              whileHover={state !== 'loading' ? { scale: 1.04, y: -1 } : {}}
              whileTap={state !== 'loading' ? { scale: 0.97 } : {}}
              className={`btn-shimmer font-display font-bold text-white rounded-full shadow-soft transition-all
                disabled:opacity-60 disabled:cursor-not-allowed
                ${compact ? 'px-5 py-3 text-sm whitespace-nowrap' : 'px-8 py-3.5 text-base'}
              `}
            >
              {state === 'loading' ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full block"
                  />
                  {compact ? '...' : 'Joining...'}
                </span>
              ) : (
                buttonText
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Error / duplicate message */}
      <AnimatePresence>
        {message && state !== 'success' && (
          <motion.p
            id="email-message"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-xs mt-2 text-center font-body font-medium
              ${state === 'error' ? 'text-pink-dark' : ''}
              ${state === 'duplicate' ? 'text-lavender-dark' : ''}
            `}
            role="alert"
            aria-live="polite"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="text-xs text-center text-brown-light mt-3 font-body">
        No spam, ever. Unsubscribe anytime. 🌸
      </p>
    </div>
  )
}
