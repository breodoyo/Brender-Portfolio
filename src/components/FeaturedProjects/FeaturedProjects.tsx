import SectionLabel from '../ui/SectionLabel'
import ProjectVisual from './ProjectVisual'
import { useReveal } from '../../hooks/useReveal'
import { projects } from '../../data/projects'
import './FeaturedProjects.css'

export default function FeaturedProjects() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="work section"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="shell reveal" ref={ref}>
        <SectionLabel>Featured Work</SectionLabel>
        <h2 className="section-heading" id="work-heading">
          Projects built to solve real problems.
        </h2>

        <div className="work__list">
          {projects.map((project) => (
            <article
              className="work__item"
              key={project.id}
              data-accent={project.accent}
            >
              <div className="work__body">
                <p className="work__number">{project.number}</p>

                <h3 className="work__title">{project.title}</h3>

                <p className="work__description">{project.description}</p>

                {project.tech.length > 0 && (
                  <ul className="work__tech">
                    {project.tech.map((item) => (
                      <li className="work__tech-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="work__actions">
                  {project.live && (
                    <a
                      className="btn btn--primary"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View Project
                    </a>
                  )}
                  <a
                    className={project.live ? 'btn btn--secondary' : 'link-arrow'}
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <div className="work__visual">
                <ProjectVisual
                  title={project.title}
                  note={project.visualNote}
                  accent={project.accent}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
