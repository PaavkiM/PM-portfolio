import { skillGroups } from '../../data/portfolio'
import Card from '../ui/Card'
import Section from '../ui/Section'
import TagList from '../ui/TagList'
import './Skills.css'

/**
 * Skills grouped into categories. Each group is one card, and the grid
 * re-flows automatically, so adding a fifth group to
 * data/portfolio.ts needs no CSS changes.
 */
export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Tools I reach for <em className="accent-serif">most often</em>
        </>
      }
      intro="An honest snapshot rather than a wish list: these are the things I have actually used to build and ship something."
    >
      <div className="skills__grid">
        {skillGroups.map((group, index) => (
          <Card key={group.title} interactive revealDelay={index * 70}>
            <h3 className="skills__title">{group.title}</h3>
            <p className="skills__description">{group.description}</p>
            <TagList
              items={group.skills}
              tone="solid"
              ariaLabel={`${group.title} skills`}
            />
          </Card>
        ))}
      </div>
    </Section>
  )
}
