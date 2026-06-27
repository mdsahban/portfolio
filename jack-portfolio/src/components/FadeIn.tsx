import { motion, MotionProps } from 'framer-motion'
import React from 'react'

interface FadeInProps extends Omit<MotionProps, 'children'> {
  delay?: number
  duration?: number
  x?: number
  y?: number
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
}

export default function FadeIn({
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  as = 'div',
  ...props
}: FadeInProps) {
  const Component = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      {...props}
    >
      {children}
    </Component>
  )
}
