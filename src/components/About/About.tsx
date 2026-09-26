import SectionLabel from '../ui/SectionLabel'
import { useReveal } from '../../hooks/useReveal'
import { principles } from '../../data/principles'
import './About.css'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="about section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="shell about__inner reveal" ref={ref}>
        <div className="about__lead">
          <SectionLabel>About</SectionLabel>

          <h2 className="about__heading" id="about-heading">
            I build software by understanding the problem first.
          </h2>

          <p className="about__intro">
            I&rsquo;m a software developer focused on backend and full-stack
            development. I work primarily with Go on the backend and React and
            TypeScript on the frontend, with PostgreSQL, Docker, REST APIs, and
            testing as part of my toolkit.
          </p>

          <blockquote className="about__quote">
            <p>
              &ldquo;I learn by building, testing, breaking things, and
              improving them.&rdquo;
            </p>
          </blockquote>
        </div>

        <div className="about__details">
          <p className="about__details-text">
            I&rsquo;m especially interested in software architecture, developer
            tooling, and products that solve meaningful problems.
          </p>

          <ol className="about__principles">
            {principles.map((principle) => (
              <li className="about__principle" key={principle.number}>
                <span className="about__principle-number">
                  {principle.number}
                </span>
                <div className="about__principle-body">
                  <h3 className="about__principle-title">
                    {principle.title}
                  </h3>
                  <p className="about__principle-text">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
