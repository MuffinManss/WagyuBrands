'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useSpring(cursorX, { stiffness: 120, damping: 20 })
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 20 })
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    const enter = () => { isHoveringRef.current = true }
    const leave = () => { isHoveringRef.current = false }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[role="button"]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-pink-medium z-[99999] pointer-events-none mix-blend-multiply dark:mix-blend-screen"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brown z-[99998] pointer-events-none opacity-60"
        style={{ x: trailX, y: trailY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
