import { useReveal } from '../../hooks/useReveal'
import { useTypewriter } from '../../hooks/useTypewriter'
import { site } from '../../data/site'
import './Hero.css'

export default function Hero() {
  const ref = useReveal<HTMLDivElement>()
  const typedHeadline = useTypewriter(site.headline)

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
          <div className="hero__media">
            <img
              className="hero__photo-img"
              src="/bree2.png"
              alt=""
              width={433}
              height={577}
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
