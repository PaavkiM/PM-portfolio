import type { ReactNode } from 'react'

import './Section.css'

/**
 * The shared wrapper every content section uses.
 *
 * It gives all sections the same width, vertical spacing and heading
 * layout, so the page stays visually consistent and you only have to
 * write the unique part of each section.
 */
type SectionProps = {
  /** Used by the navbar anchor links, e.g. id="about" -> href="#about". */
  id: string
  /** The small uppercase label above the heading. */
  eyebrow: string
  /** The section heading. */
  title: ReactNode
  /** Optional paragraph under the heading. */
  intro?: ReactNode
  /** Draws a hairline across the top of the section. */
  bordered?: boolean
  children: ReactNode
}

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  bordered = true,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${bordered ? 'section--bordered' : ''}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <header className="section__header" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-heading`} className="section__title">
            {title}
          </h2>
          {intro && <p className="section__intro">{intro}</p>}
        </header>

        {children}
      </div>
    </section>
  )
}
