'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  symbol: string
  color: string
}

const SYMBOLS = ['✦', '✧', '⋆', '✩', '✫', '❋', '✿', '❀', '˚', '·']
const COLORS = ['#ffd6e7', '#e8d5f5', '#d4f5e9', '#ffe5d0', '#c89f7b', '#ffffff']

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let rafId: number

    const stars: Star[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 12 + 6,
      opacity: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.3 + 0.05,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      stars.forEach(s => {
        ctx.save()
        ctx.globalAlpha = s.opacity
        ctx.fillStyle = s.color
        ctx.font = `${s.size}px serif`
        ctx.fillText(s.symbol, s.x, s.y)
        ctx.restore()
        s.y -= s.speed
        s.opacity += Math.sin(Date.now() / 1000 + s.x) * 0.003
        s.opacity = Math.max(0.1, Math.min(0.8, s.opacity))
        if (s.y < -20) {
          s.y = height + 20
          s.x = Math.random() * width
        }
      })
      rafId = requestAnimationFrame(draw)
    }

    draw()

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  )
}
