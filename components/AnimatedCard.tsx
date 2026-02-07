'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useCallback } from 'react'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function AnimatedCard({ children, className = '', disabled = false }: AnimatedCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Reduced rotation angle from 10 to 5 for smoother performance
    const rotateXValue = ((y - centerY) / centerY) * -5
    const rotateYValue = ((x - centerX) / centerX) * 5

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }, [disabled])

  const handleMouseLeave = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
  }, [])

  // Simple hover effect for mobile/disabled
  if (disabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'tween', // Changed from spring for better performance
        duration: 0.2,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
