import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hello, It's Me</p>
          <h1 className="hero-name">Brender Odoyo</h1>
          <h2 className="hero-role">
            And I'm a <span className="highlight">Backend Developer</span>
          </h2>
          <p className="hero-desc">
            I build web applications and APIs with Go, React, TypeScript, and
            PostgreSQL, with a strong focus on clean architecture, testing,
            and solving real-world problems.
          </p>

          <div className="hero-cta">
            <a href="#work" className="btn-primary">
              See my work
            </a>
            <a href="/resume.pdf" className="btn-ghost">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="glow" />
          <img src="/Bre-pic.JPG" alt="Brender Odoyo" />
        </div>
      </div>
    </section>
  );
}