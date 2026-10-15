import { techCategories } from '../../data/tech'
import './TechStack.css'

export default function TechStack() {
  return (
    <section className="tech section" id="tech" aria-labelledby="tech-heading">
      <div className="shell">
        <p className="section-label--ruled">My Stack</p>

        <h2 className="section-heading" id="tech-heading">
          Tools I work with
        </h2>

        <div className="tech__grid">
          {techCategories.map((category) => (
            <article
              className="tech__card"
              key={category.id}
              data-tone={category.id}
              aria-labelledby={`tech-${category.id}`}
            >
              <div className="tech__header">
                <h3 className="tech__title" id={`tech-${category.id}`}>
                  {category.label}
                </h3>
              </div>

              <div className="tech__body">
                <p className="tech__tools">{category.tools}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
