import { useEffect, useState } from 'react'

import { navLinks, profile, socialLinks } from '../../data/portfolio'
import './Navbar.css'

/**
 * Fixed navigation bar.
 *
 * On desktop it shows the links in a row. Below 860px it collapses to a
 * hamburger button that opens a full-screen menu.
 *
 * It also underlines the link for whichever section you are currently
 * looking at, and gains a blurred background once you scroll.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* 1. Give the navbar a background once the page has scrolled a little. */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll() // run once in case the page loads part-way down
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* 2. Work out which section is on screen so we can highlight its link. */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return

        // If two sections are visible, highlight the higher one.
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        )
        setActiveSection(topMost.target.id)
      },
      // Only counts a section as "current" when it is near the middle
      // of the screen, which feels more natural than the very top.
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  /* 3. While the mobile menu is open: stop the page behind it from
        scrolling, and let the Escape key close it. */
  useEffect(() => {
    if (!isMenuOpen) return

    document.body.classList.add('is-menu-open')

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('is-menu-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  /* 4. If the window is widened to desktop size while the menu is open,
        close it so the layout cannot get stuck. */
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 860px)')

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    desktopQuery.addEventListener('change', handleChange)
    return () => desktopQuery.removeEventListener('change', handleChange)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">{profile.initials}</span>
          <span className="navbar__logo-name">{profile.name}</span>
        </a>

        {/* ---------- Desktop links ---------- */}
        <nav className="navbar__desktop" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`navbar__link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            className="button button--outline navbar__cta"
            href={`mailto:${profile.email}`}
          >
            Get in touch
          </a>
        </nav>

        {/* ---------- Hamburger (mobile only) ---------- */}
        <button
          type="button"
          className={`navbar__toggle ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>

      {/* ---------- Full-screen mobile menu ----------
          It stays in the DOM so it can animate. `visibility: hidden`
          in the CSS keeps it out of the keyboard tab order while closed. */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="mobile-menu__links">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className="mobile-menu__item"
                style={{ transitionDelay: `${60 + index * 45}ms` }}
              >
                <a href={`#${link.id}`} onClick={closeMenu}>
                  <span className="mobile-menu__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <a
            className="button button--primary"
            href={`mailto:${profile.email}`}
            onClick={closeMenu}
          >
            Get in touch
          </a>

          <ul className="mobile-menu__socials">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    social.href.startsWith('http')
                      ? 'noreferrer noopener'
                      : undefined
                  }
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
