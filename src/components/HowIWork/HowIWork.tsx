import { useReveal } from '../../hooks/useReveal'
import { processSteps } from '../../data/process'
import './HowIWork.css'

export default function HowIWork() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="process section"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="shell reveal" ref={ref}>
        <p className="section-label--ruled">My Process</p>

        <div className="process__panel">
          <div className="process__intro">
            <h2 className="section-heading" id="process-heading">
              How I work
            </h2>
          </div>

          <ol className="process__steps">
            {processSteps.map((step) => (
              <li className="process__step" key={step.number}>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__text">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
