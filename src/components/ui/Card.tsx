import type { ReactNode } from 'react'

import { revealDelay as makeRevealDelay } from '../../hooks/useScrollReveal'
import './Card.css'

/**
 * A bordered surface used by the Skills, Projects and Education
 * sections. `interactive` adds the lift-and-glow effect on hover,
 * which should only be used when the card is clickable or is the
 * main focus of a grid.
 */
type CardProps = {
  children: ReactNode
  interactive?: boolean
  /** Extra class names when a section needs its own tweaks. */
  className?: string
  /** Passed through so cards can be animated by useScrollReveal. */
  revealDelay?: number
}

export default function Card({
  children,
  interactive = false,
  className = '',
  revealDelay,
}: CardProps) {
  return (
    <article
      className={`card ${interactive ? 'card--interactive' : ''} ${className}`}
      data-reveal
      style={revealDelay ? makeRevealDelay(revealDelay) : undefined}
    >
      {children}
    </article>
  )
}
