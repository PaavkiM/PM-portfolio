import { about, profile, socialLinks } from '../../data/portfolio'
import { revealDelay } from '../../hooks/useScrollReveal'
import Button from '../ui/Button'
import Highlight from '../ui/Highlight'
import './Hero.css'

/**
 * The first thing a visitor sees: who you are, what you do and two
 * clear next steps (see projects / read CV).
 */
export default function Hero() {
  // `import.meta.env.BASE_URL` is the `base` value from vite.config.ts.
  // Adding it here means the CV link works locally AND on GitHub Pages.
  const resumeHref = profile.resumeUrl
    ? `${import.meta.env.BASE_URL}${profile.resumeUrl}`
    : undefined

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <p className="hero__badge" data-reveal>
          <span className="hero__badge-dot" aria-hidden="true" />
          {profile.availability}
        </p>

        <h1 className="hero__title" data-reveal style={revealDelay(80)}>
          <Highlight text={profile.headline} />
        </h1>

        <p className="hero__intro" data-reveal style={revealDelay(160)}>
          {profile.intro}
        </p>

        <div className="hero__actions" data-reveal style={revealDelay(240)}>
          <Button href="#projects">View my projects</Button>
          {resumeHref && (
            <Button href={resumeHref} variant="outline" external>
              Download CV
            </Button>
          )}
        </div>

        <div className="hero__meta" data-reveal style={revealDelay(300)}>
          <p className="hero__role">
            {profile.role}
            <span aria-hidden="true"> · </span>
            {profile.location}
          </p>

          <ul className="hero__socials">
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

        {/* A definition list is the correct element for label/value pairs */}
        <dl className="hero__stats" data-reveal style={revealDelay(380)}>
          {about.stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <dt className="hero__stat-value">{stat.value}</dt>
              <dd className="hero__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
