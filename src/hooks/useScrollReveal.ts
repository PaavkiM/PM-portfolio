import { useEffect } from 'react'
import type { CSSProperties } from 'react'

/**
 * Fades elements in as they scroll into view.
 *
 * How to use it:
 *   1. Call `useScrollReveal()` once, inside App.
 *   2. Add a `data-reveal` attribute to any element you want animated.
 *   3. Optionally stagger a list with an inline delay:
 *        <li data-reveal style={{ '--reveal-delay': '120ms' }}>
 *
 * The matching CSS lives in styles/global.css under "4. Scroll reveal".
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    // If the visitor asked their system to reduce motion, show
    // everything immediately instead of animating.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          // Animate once, then stop watching this element.
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

/**
 * Small helper for staggering a reveal.
 *
 *   <p data-reveal style={revealDelay(120)}>...</p>
 *
 * TypeScript does not know about custom CSS properties in `style`,
 * so the cast here saves you writing one every single time.
 */
export function revealDelay(milliseconds: number): CSSProperties {
  return { '--reveal-delay': `${milliseconds}ms` } as CSSProperties
}
