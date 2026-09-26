import './About.css'

const techGroups = [
  { label: 'Backend', items: ['Go', 'REST APIs', 'PostgreSQL'] },
  { label: 'Frontend', items: ['React', 'TypeScript', 'HTML', 'CSS'] },
  { label: 'Engineering', items: ['Docker', 'Git', 'Testing', 'Debugging'] },
]

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="shell about__inner">
        <header className="about__header">
          <p className="about__eyebrow">Background</p>
          <h2 className="about__heading" id="about-heading">
            About Me
          </h2>
        </header>

        <div className="about__body">
          <p className="about__lead">
            I&rsquo;m a software developer focused on building practical,
            reliable applications.
          </p>

          <p>
            My development journey has taken me from software testing into
            backend and full-stack engineering, where I enjoy understanding how
            systems work and turning ideas into working products.
          </p>

          <p>
            I work primarily with Go on the backend and React and TypeScript on
            the frontend, with PostgreSQL, Docker, REST APIs, and testing as
            part of my toolkit.
          </p>

          <p>
            I&rsquo;m especially interested in software architecture, developer
            tooling, and products that solve meaningful problems.
          </p>

          <p className="about__closing">
            I learn by building, testing, breaking things, and improving them.
          </p>
        </div>

        <div className="about__tech">
          <h3 className="about__tech-heading">Technical Overview</h3>

          <dl className="about__tech-list">
            {techGroups.map((group) => (
              <div className="about__tech-group" key={group.label}>
                <dt className="about__tech-label">{group.label}</dt>
                <dd className="about__tech-items">
                  <ul className="about__tech-items-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
