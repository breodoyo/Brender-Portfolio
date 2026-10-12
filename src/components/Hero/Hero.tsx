import { useReveal } from '../../hooks/useReveal'
import { useRotatingTech } from '../../hooks/useRotatingTech'
import { useTypewriter } from '../../hooks/useTypewriter'
import { site } from '../../data/site'
import './Hero.css'

const heroTechnologies = ['Go', 'React', 'TypeScript', 'PostgreSQL']

export default function Hero() {
  const ref = useReveal<HTMLDivElement>()
  const typedHeadline = useTypewriter(site.headline)
  const { tech, index } = useRotatingTech(heroTechnologies)

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="shell hero__inner reveal" ref={ref}>
        <div className="hero__text">
          <h1 className="hero__heading" id="hero-heading">
            {/* Screen readers get the complete headline once; the animated
                layer below is decorative and never announced piecemeal. */}
            <span className="visually-hidden">{site.headline}</span>
            <span className="hero__heading-visual" aria-hidden="true">
              {/* Hidden at full width so typing never collapses the title. */}
              <span className="hero__heading-sizer">{site.headline}</span>
              <span className="hero__heading-live">
                {typedHeadline}
                <span className="hero__cursor" />
              </span>
            </span>
          </h1>

          <p className="hero__tech">
            <span className="hero__tech-prefix">Building with</span>{' '}
            <span className="hero__tech-rotate" aria-hidden="true">
              <span className="hero__tech-word" key={index}>
                {tech}
              </span>
            </span>
            <span className="visually-hidden">
              {heroTechnologies.join(', ')}
            </span>
          </p>

          <p className="hero__summary">{site.summary}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              View My Work
            </a>
            <a className="btn btn--secondary" href="#contact">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Decorative: the name is already stated in the headline, so the
            portrait carries no information. */}
        <figure className="hero__figure">
          <div className="hero__media" aria-hidden="true">
            <img
              className="hero__photo-img"
              src="/bree1.jpg"
              alt=""
              width={2556}
              height={3408}
            />
            <div className="hero__scrim" />
          </div>
        </figure>
      </div>
    </section>
  )
}
