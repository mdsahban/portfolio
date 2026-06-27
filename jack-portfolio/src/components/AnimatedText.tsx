import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = text.split('')

  return (
    <p ref={ref} className={`relative ${className}`}>
      {characters.map((char, i) => {
        const start = i / characters.length
        const end = (i + 1) / characters.length

        const opacity = useTransform(
          scrollYProgress,
          [start, end],
          [0.2, 1]
        )

        return (
          <motion.span
            key={i}
            style={{ opacity }}
          >
            {char}
          </motion.span>
        )
      })}
    </p>
  )
}
