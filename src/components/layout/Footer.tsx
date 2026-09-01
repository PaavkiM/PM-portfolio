import { footer, navLinks, profile, socialLinks } from '../../data/portfolio'
import './Footer.css'

export default function Footer() {
  // Updates itself every January, so you never have a stale year.
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__name">
            {profile.name}
          </a>
          <p className="footer__note">{footer.note}</p>
        </div>

        <div className="footer__columns">
          <nav className="footer__column" aria-label="Footer navigation">
            <h2 className="footer__heading">Sections</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__column">
            <h2 className="footer__heading">Elsewhere</h2>
            <ul>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={
                      social.href.startsWith('http') ? '_blank' : undefined
                    }
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
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {profile.name}
        </p>
        <a href="#home" className="footer__top">
          Back to top
        </a>
      </div>
    </footer>
  )
}
