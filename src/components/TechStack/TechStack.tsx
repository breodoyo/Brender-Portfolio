import SectionLabel from '../ui/SectionLabel'
import { useReveal } from '../../hooks/useReveal'
import { techCategories } from '../../data/tech'
import './TechStack.css'

export default function TechStack() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="tech section"
      id="tech"
      aria-labelledby="tech-heading"
    >
      <div className="shell reveal" ref={ref}>
        <SectionLabel>Technical Toolkit</SectionLabel>
        <h2 className="section-heading" id="tech-heading">
          Tools I use to build and test software.
        </h2>

        <div className="tech__grid">
          {techCategories.map((category) => (
            <section
              className="tech__category"
              key={category.id}
              data-accent={category.accent}
              aria-labelledby={`tech-${category.id}`}
            >
              <h3 className="tech__label" id={`tech-${category.id}`}>
                {category.label}
              </h3>
              <ul className="tech__list">
                {category.items.map((item) => (
                  <li className="tech__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
