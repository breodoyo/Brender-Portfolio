import { useReveal } from '../../hooks/useReveal'
import { site } from '../../data/site'
import './Contact.css'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="shell contact__inner reveal" ref={ref}>
        <div className="contact__copy">
          <p className="contact__label">Contact</p>
          <h2 className="contact__heading" id="contact-heading">
            Have a project, opportunity, or idea?
            <span className="contact__heading-accent">Let&rsquo;s talk.</span>
          </h2>
          <p className="contact__text">
            I&rsquo;m open to software development opportunities, interesting
            projects, and conversations about building useful technology.
          </p>
        </div>

        <div className="contact__actions">
          <a className="btn btn--on-navy btn--sm" href={`mailto:${site.email}`}>
            Email Me
          </a>
          <a
            className="btn btn--outline-navy btn--sm"
            href={site.links.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            className="btn btn--outline-navy btn--sm"
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
