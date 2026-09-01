import { education } from '../../data/portfolio'
import { revealDelay } from '../../hooks/useScrollReveal'
import Section from '../ui/Section'
import './Education.css'

/**
 * Education shown as a vertical timeline. An ordered list is used
 * because the entries are deliberately in date order.
 */
export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          Where I have been <em className="accent-serif">learning</em>
        </>
      }
    >
      <ol className="education__list">
        {education.map((entry, index) => (
          <li
            key={entry.institution}
            className="education__item"
            data-reveal
            style={revealDelay(index * 100)}
          >
            <div className="education__header">
              <div>
                <h3 className="education__qualification">
                  {entry.qualification}
                </h3>
                <p className="education__institution">{entry.institution}</p>
              </div>

              <div className="education__when">
                <span className="education__period">{entry.period}</span>
                <span className="education__location">{entry.location}</span>
              </div>
            </div>

            {entry.result && <p className="education__result">{entry.result}</p>}

            <ul className="education__highlights">
              {entry.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
