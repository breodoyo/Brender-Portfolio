import SectionLabel from '../ui/SectionLabel'
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
        <div className="process__panel">
          <div className="process__intro">
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="section-heading" id="process-heading">
              A simple loop, repeated carefully.
            </h2>
          </div>

          <ol className="process__steps">
            {processSteps.map((step) => (
              <li className="process__step" key={step.number}>
                <span className="process__number" aria-hidden="true">
                  {step.number}
                </span>
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
