import { useReveal } from '../../hooks/useReveal'
import { journey } from '../../data/journey'
import './Journey.css'

type JourneyProps = {
  /** Standalone pages need an h1; on the homepage this section is an h2. */
  headingLevel?: 'h1' | 'h2'
}

export default function Journey({ headingLevel: Heading = 'h2' }: JourneyProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="journey section"
      id="journey"
      aria-labelledby="journey-heading"
    >
      <div className="shell reveal" ref={ref}>
        <Heading className="section-heading" id="journey-heading">
          A short history of how I got here.
        </Heading>

        <ol className="journey__list">
          {journey.map((entry) => (
            <li className="journey__item" key={entry.id}>
              <div className="journey__meta">
                <p className="journey__period">{entry.period}</p>
                <p className="journey__org">
                  {entry.org}
                  {entry.location && (
                    <span className="journey__location">
                      {' '}
                      &middot; {entry.location}
                    </span>
                  )}
                </p>
              </div>

              <div className="journey__content">
                <h3 className="journey__role">{entry.role}</h3>
                <p className="journey__summary">{entry.summary}</p>

                {entry.points && entry.points.length > 0 && (
                  <ul className="journey__points">
                    {entry.points.map((point) => (
                      <li className="journey__point" key={point}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
