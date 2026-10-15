import SectionLabel from '../ui/SectionLabel'
import { useReveal } from '../../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section
      className="about section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="shell about__inner reveal" ref={ref}>
        <figure className="about__figure">
          <img src="/Bre-pic.JPG" alt="Brender Odoyo" />
        </figure>

        <div className="about__copy">
          <SectionLabel>About me</SectionLabel>

          <div className="about__body">
            <h2 className="about__heading" id="about-heading">
              I like understanding what happens behind the scenes.
            </h2>

            <p className="about__text">
              I enjoy figuring out how systems work, tracking down bugs, and
              testing the cases that are easy to overlook. I want to know why
              something breaks, not just how to patch it.
            </p>

            <p className="about__text">
              Lately I've been building more projects, sharpening my
              problem-solving, and exploring open source. I learn best by working
              on real code and with other developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
