import SectionLabel from '../ui/SectionLabel'
import { useReveal } from '../../hooks/useReveal'
import { site } from '../../data/site'
import './Resume.css'

export default function Resume() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="resume section"
      id="resume"
      aria-labelledby="resume-heading"
    >
      <div className="shell reveal" ref={ref}>
        <div className="resume__panel">
          <div className="resume__copy">
            <SectionLabel>Resume</SectionLabel>
            <h2 className="section-heading" id="resume-heading">
              Experience in one page.
            </h2>
            <p className="resume__text">Want the concise version?</p>
          </div>

          <div className="resume__actions">
            <a
              className="btn btn--primary"
              href={site.links.resume}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Resume
            </a>
            <a
              className="btn btn--secondary"
              href={site.links.resume}
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
