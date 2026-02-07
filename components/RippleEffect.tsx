'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ripple {
  id: number
  x: number
  y: number
}

export default function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleClick = (e: MouseEvent) => {
      // Limit to max 3 ripples for performance
      if (ripples.length >= 3) return

      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setRipples((prev) => [...prev.slice(-2), newRipple]) // Keep max 3

      timeoutId = setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, 800) // Reduced from 1000ms
    }

    window.addEventListener('click', handleClick, { passive: true })
    return () => {
      window.removeEventListener('click', handleClick)
      clearTimeout(timeoutId)
    }
  }, [ripples.length])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute w-20 h-20 border-2 border-primary-500 rounded-full"
            style={{
              left: ripple.x - 40,
              top: ripple.y - 40,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
