import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero__inner">
        <div className="hero__text">
          <p className="hero__role">Backend &amp; Full-Stack Developer</p>

          <h1 className="hero__title" id="hero-title">
            Building reliable software and thoughtful digital experiences.
          </h1>

          <p className="hero__summary">
            I build web applications and APIs with Go, React, TypeScript, and
            PostgreSQL, with a strong focus on clean architecture, testing, and
            solving real-world problems.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              View My Work
            </a>
            <a className="btn btn--secondary" href="/resume.pdf" download>
              Download CV
            </a>
          </div>
        </div>

        <figure className="hero__photo">
          <div className="hero__photo-frame">
            <img
              className="hero__photo-img"
              src="/Bre-pic.JPG"
              alt="Brender Odoyo, backend and full-stack developer"
              width="6000"
              height="3368"
            />
          </div>
          <figcaption className="hero__photo-caption">
            Brender Odoyo
            <span className="hero__photo-caption-role">
              Backend &amp; Full-Stack Developer
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
