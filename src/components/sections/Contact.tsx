import { contact, profile, socialLinks } from '../../data/portfolio'
import { revealDelay } from '../../hooks/useScrollReveal'
import Button from '../ui/Button'
import Highlight from '../ui/Highlight'
import './Contact.css'

/**
 * The closing call to action.
 *
 * This is a plain `mailto:` link rather than a form, because a form
 * would need a backend or a third-party service to actually send
 * anything, and the brief says no backend.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="section section--bordered contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact__panel" data-reveal>
          <p className="eyebrow">Contact</p>

          <h2 id="contact-heading" className="contact__heading">
            <Highlight text={contact.heading} />
          </h2>

          <p className="contact__blurb">{contact.blurb}</p>

          <div className="contact__actions">
            <Button href={`mailto:${profile.email}`}>{contact.ctaLabel}</Button>
            <span className="contact__email">{profile.email}</span>
          </div>

          <ul className="contact__links">
            {socialLinks.map((social, index) => (
              <li key={social.label} data-reveal style={revealDelay(index * 70)}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    social.href.startsWith('http')
                      ? 'noreferrer noopener'
                      : undefined
                  }
                >
                  <span className="contact__link-label">{social.label}</span>
                  <span className="contact__link-handle">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
