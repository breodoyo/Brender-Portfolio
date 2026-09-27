import SectionLabel from '../ui/SectionLabel'
import { useReveal } from '../../hooks/useReveal'
import { site } from '../../data/site'
import './Hero.css'

export default function Hero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Decorative: the name and location are already stated in the copy
          below, so the portrait carries no information of its own. */}
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__photo-img"
          src="/brender-odoyo.jpg"
          alt=""
          width={1600}
          height={898}
        />
        <div className="hero__scrim" />
      </div>

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

        <p className="hero__photo-caption">
          {site.name}
          <span className="hero__photo-caption-detail">{site.location}</span>
        </p>
      </div>
    </section>
  )
}
