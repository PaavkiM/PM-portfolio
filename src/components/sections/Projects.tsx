import { projects } from '../../data/portfolio'
import Card from '../ui/Card'
import Section from '../ui/Section'
import TagList from '../ui/TagList'
import './Projects.css'

/** A small arrow used on the project links. */
function ArrowIcon() {
  return (
    <svg
      className="projects__arrow"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 12L12 4M12 4H6M12 4v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * The projects grid. The project marked `featured: true` in
 * data/portfolio.ts stretches across the full width on desktop so it
 * gets read first.
 */
export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I have <em className="accent-serif">designed and built</em>
        </>
      }
      intro="Projects I've built to apply what I'm learning in computer science and statistics. Each one taught me something I could not have learned from a tutorial."
    >
      <div className="projects__grid">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            interactive
            revealDelay={index * 80}
            className={`project ${project.featured ? 'project--featured' : ''}`}
          >
            <div className="project__meta">
              <span className="project__year">{project.year}</span>
              {project.featured && (
                <span className="project__flag">Featured</span>
              )}
            </div>

            <h3 className="project__title">{project.title}</h3>
            <p className="project__summary">{project.summary}</p>
            <p className="project__description">{project.description}</p>

            <div className="project__footer">
              <TagList
                items={project.tech}
                ariaLabel={`Technologies used in ${project.title}`}
              />

              {/* Only renders a link if you supplied that URL in the data file */}
              {(project.liveUrl || project.repoUrl) && (
                <div className="project__links">
                  {project.liveUrl && (
                    <a
                      className="project__link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Live site
                      <ArrowIcon />
                      <span className="sr-only">
                        {' '}
                        for {project.title} (opens in a new tab)
                      </span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      className="project__link"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Source code
                      <ArrowIcon />
                      <span className="sr-only">
                        {' '}
                        for {project.title} (opens in a new tab)
                      </span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
