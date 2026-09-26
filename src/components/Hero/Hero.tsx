import SectionLabel from '../ui/SectionLabel'
import { useReveal } from '../../hooks/useReveal'
import { site } from '../../data/site'
import './Hero.css'

export default function Hero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="shell hero__inner reveal" ref={ref}>
        <div className="hero__text">
          <SectionLabel>{site.role}</SectionLabel>

          <h1 className="hero__heading" id="hero-heading">
            {site.headline}
          </h1>

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

        <figure className="hero__photo">
          <div className="hero__photo-frame">
            <img
              className="hero__photo-img"
              src="/brender-odoyo.jpg"
              alt="Portrait of Brender Odoyo"
              width={1600}
              height={898}
            />
          </div>
          <figcaption className="hero__photo-caption">
            {site.name}
            <span className="hero__photo-caption-detail">{site.location}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
