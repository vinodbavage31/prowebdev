'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  simple?: boolean
}

export default function TextReveal({ children, className = '', delay = 0, simple = false }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' }) // Added margin for earlier trigger

  // Simple version for performance
  if (simple) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  const words = children.split(' ')
  // Limit word animation for very long text
  const shouldAnimate = words.length < 15

  if (!shouldAnimate) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4, // Reduced from 0.5
            delay: delay + index * 0.03, // Reduced from 0.05
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
