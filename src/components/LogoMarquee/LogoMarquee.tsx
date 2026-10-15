import { brands } from '../Hero/brands'
import './LogoMarquee.css'

const items = [
  'react',
  'typescript',
  'go',
  'postgresql',
  'docker',
  'git',
  'vscode',
  'postman',
] as const

export default function LogoMarquee() {
  return (
    <div className="marquee" role="region" aria-label="Technologies I use">
      <div className="marquee__track">
        <div className="marquee__group">
          {items.map((id) => {
            const b = brands[id]
            return (
              <div className="marquee__item" key={id}>
                <img
                  src={b.src}
                  alt=""
                  width="24"
                  height="24"
                  className="marquee__logo"
                  aria-hidden="true"
                />
                <span className="marquee__name">{b.name}</span>
              </div>
            )
          })}
        </div>
        <div className="marquee__group" aria-hidden="true">
          {items.map((id) => {
            const b = brands[id]
            return (
              <div className="marquee__item" key={`${id}-dup`}>
                <img
                  src={b.src}
                  alt=""
                  width="24"
                  height="24"
                  className="marquee__logo"
                  aria-hidden="true"
                />
                <span className="marquee__name">{b.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}