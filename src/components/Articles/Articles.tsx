import SectionLabel from '../ui/SectionLabel'
import { useReveal } from '../../hooks/useReveal'
import { articles } from '../../data/articles'
import './Articles.css'

type ArticlesProps = {
  /** Standalone pages need an h1; on the homepage this section is an h2. */
  headingLevel?: 'h1' | 'h2'
}

export default function Articles({ headingLevel: Heading = 'h2' }: ArticlesProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="articles section"
      id="articles"
      aria-labelledby="articles-heading"
    >
      <div className="shell reveal" ref={ref}>
        <SectionLabel>Articles</SectionLabel>
        <Heading className="section-heading" id="articles-heading">
          Writing, learning, and sharing.
        </Heading>

        <ul className="articles__list">
          {articles.map((article) => (
            <li className="articles__row" key={article.id}>
              <div className="articles__meta">
                <span className="articles__category">{article.category}</span>
                <span className="articles__date">{article.date}</span>
              </div>

              <div className="articles__body">
                <h3 className="articles__title">{article.title}</h3>
                <p className="articles__description">{article.description}</p>
              </div>

              <div className="articles__action">
                {article.href ? (
                  <a
                    className="link-arrow"
                    href={article.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Read article
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ) : (
                  <span className="articles__draft">Not published yet</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
