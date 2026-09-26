import SectionLabel from '../ui/SectionLabel'
import { useReveal } from '../../hooks/useReveal'
import { journey } from '../../data/journey'
import './Journey.css'

export default function Journey() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="journey section"
      id="journey"
      aria-labelledby="journey-heading"
    >
      <div className="shell reveal" ref={ref}>
        <SectionLabel>My Journey</SectionLabel>
        <h2 className="section-heading" id="journey-heading">
          A short history of how I got here.
        </h2>

        <ol className="journey__list">
          {journey.map((entry, index) => (
            <li className="journey__item" key={entry.id}>
              <span className="journey__node" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="journey__content">
                <p className="journey__period">{entry.period}</p>
                <h3 className="journey__role">{entry.role}</h3>
                <p className="journey__org">
                  {entry.org}
                  {entry.location && (
                    <span className="journey__location">
                      {' '}
                      &middot; {entry.location}
                    </span>
                  )}
                </p>
                <p className="journey__summary">{entry.summary}</p>

                <ul className="journey__points">
                  {entry.points.map((point) => (
                    <li className="journey__point" key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
