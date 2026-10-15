import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import ProjectVisual from './ProjectVisual'
import { useReveal } from '../../hooks/useReveal'
import { projects } from '../../data/projects'
import './FeaturedProjects.css'

export default function FeaturedProjects() {
  const ref = useReveal<HTMLDivElement>()
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    setAtStart(track.scrollLeft <= 1)
    setAtEnd(track.scrollLeft >= maxScroll - 1)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    updateEdges()
    track.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      track.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [updateEdges])

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.work__row')
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step =
      (card instanceof HTMLElement ? card.offsetWidth : track.clientWidth) + gap
    track.scrollBy({ left: step * direction })
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollByCard(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollByCard(-1)
    }
  }

  return (
    <section className="work section" id="work" aria-labelledby="work-heading">
      <div className="shell reveal" ref={ref}>
        <p className="section-label--ruled">My Latest Projects</p>

        <h2 className="section-heading" id="work-heading">
          Projects built to solve real problems.
        </h2>

        <div
          className={`work__track${atEnd ? ' is-at-end' : ''}`}
          ref={trackRef}
          role="region"
          aria-label="Projects"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {projects.map((project) => (
            <article className="work__row" key={project.id}>
              <div className="work__visual">
                <ProjectVisual
                  title={project.title}
                  note={project.visualNote}
                  accent={project.accent}
                  image={project.image}
                />
              </div>

              <div className="work__body">
                <h3 className="work__title">{project.title}</h3>

                <p className="work__description">{project.description}</p>

                {project.tech.length > 0 && (
                  <p className="work__tech">{project.tech.join(' · ')}</p>
                )}

                <div className="work__actions">
                  <a
                    className="link-arrow"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work__controls">
          <button
            type="button"
            className="work__control"
            aria-label="Previous project"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            className="work__control"
            aria-label="Next project"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
