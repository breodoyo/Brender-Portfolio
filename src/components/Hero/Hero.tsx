import { useReveal } from '../../hooks/useReveal'
import { useTypewriter } from '../../hooks/useTypewriter'
import { site } from '../../data/site'
import BrandBadges from './BrandBadges'
import type { BrandName } from './brands'
import './Hero.css'

/** Irregular scattered badges around the portrait - no grid, no symmetry, no orbit. */
const heroBadges: readonly { id: BrandName; left?: string; top?: string; right?: string; bottom?: string; delay: number; className?: string }[] = [
  { id: 'react', left: '-14%', top: '12%', delay: 0, className: 'pos-react' },
  { id: 'typescript', left: '50%', top: '-14%', delay: 0.3, className: 'pos-typescript' },
  { id: 'go', right: '-14%', top: '18%', delay: 0.7, className: 'pos-go' },
  { id: 'postgresql', delay: 1.4, className: 'pos-postgresql' },
  { id: 'docker', left: '-16%', bottom: '16%', delay: 1.0, className: 'pos-docker' },
  { id: 'git', delay: 1.8, className: 'pos-git' },
  { id: 'vscode', right: '-16%', bottom: '22%', delay: 2.1, className: 'pos-vscode' },
  { id: 'postman', delay: 2.5, className: 'pos-postman' },
]

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
          <div className="hero-visual" aria-hidden="true">
            <div className="hero__media">
              <img
                className="hero__photo-img"
                src="/bree2.png"
                alt=""
                width={433}
                height={577}
              />
            </div>
            <BrandBadges items={heroBadges} />
          </div>
        </figure>
      </div>
    </section>
  )
}
