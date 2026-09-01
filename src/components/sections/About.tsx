import { about } from '../../data/portfolio'
import { revealDelay } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'
import './About.css'

/**
 * A short introduction: a few paragraphs of prose on the left and a
 * compact list of quick facts on the right.
 */
export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={
        <>
          The short version of <em className="accent-serif">who I am</em>
        </>
      }
    >
      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} data-reveal style={revealDelay(index * 80)}>
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="about__aside" data-reveal style={revealDelay(120)}>
          <h3 className="about__aside-title">At a glance</h3>
          <dl className="about__facts">
            {about.facts.map((fact) => (
              <div key={fact.label} className="about__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  )
}
