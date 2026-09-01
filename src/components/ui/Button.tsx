import type { ReactNode } from 'react'

import './Button.css'

/**
 * One button component used everywhere on the site.
 *
 * - Pass `href` and it renders a link (<a>).
 * - Leave `href` out and it renders a real <button>.
 * - `variant` picks the look: solid accent, outlined, or plain text.
 */
type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'quiet'
  /** Opens the link in a new tab, safely. */
  external?: boolean
  onClick?: () => void
  /** Screen-reader label, useful for icon-only buttons. */
  ariaLabel?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const className = `button button--${variant}`

  if (href) {
    return (
      <a
        className={className}
        href={href}
        aria-label={ariaLabel}
        {...(external
          ? { target: '_blank', rel: 'noreferrer noopener' }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
