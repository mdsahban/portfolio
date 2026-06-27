import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface MagnetProps {
  children: React.ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)

      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = padding

      if (distance < maxDistance) {
        setIsActive(true)
        setOffset({
          x: x / strength,
          y: y / strength,
        })
      } else {
        setIsActive(false)
        setOffset({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, strength])

  return (
    <motion.div
      ref={ref}
      animate={{ x: offset.x, y: offset.y }}
      transition={{
        duration: isActive ? 0.3 : 0.6,
        ease: isActive ? 'easeOut' : 'easeInOut',
      }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  )
}
