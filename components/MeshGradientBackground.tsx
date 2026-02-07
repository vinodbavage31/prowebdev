'use client'

import { useEffect, useRef } from 'react'

export default function MeshGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0

    const animate = () => {
      if (!ctx || !canvas) return

      time += 0.005

      // Create mesh gradient effect
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.3 + Math.cos(time) * 100,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        canvas.width * 0.5
      )
      gradient1.addColorStop(0, 'rgba(14, 165, 233, 0.3)')
      gradient1.addColorStop(1, 'rgba(14, 165, 233, 0)')

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 1.2) * 100,
        canvas.height * 0.7 + Math.sin(time * 1.2) * 100,
        0,
        canvas.width * 0.7,
        canvas.height * 0.7,
        canvas.width * 0.5
      )
      gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.3)')
      gradient2.addColorStop(1, 'rgba(168, 85, 247, 0)')

      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.8) * 150,
        canvas.height * 0.5 + Math.cos(time * 0.8) * 150,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.4
      )
      gradient3.addColorStop(0, 'rgba(236, 72, 153, 0.2)')
      gradient3.addColorStop(1, 'rgba(236, 72, 153, 0)')

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  )
}
