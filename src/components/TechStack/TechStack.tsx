import { useEffect, useRef, type ReactElement } from 'react'
import { brands } from '../Hero/brands'
import { techCategories } from '../../data/tech'
import './TechStack.css'

const inlineIcons: Partial<Record<string, ReactElement>> = {
  JavaScript: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="2.5" fill="#f7df1e" />
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="10"
        fontWeight="700"
        fill="#1b1d21"
      >
        JS
      </text>
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#e34f26" d="M2 2h20l-1.8 16L12 22 3.8 18z" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#ffffff"
      >
        5
      </text>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1572b6" d="M2 2h20l-1.8 16L12 22 3.8 18z" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#ffffff"
      >
        3
      </text>
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 256 257" aria-hidden="true">
      <path
        fill="#646cff"
        d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322 0l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.616z"
      />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#ffffff"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.804 5.624-5.475 5.921.43.372.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  ),
}

export default function TechStack() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const reveal = () => grid.classList.add('tech__grid--in')

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal()
            observer.disconnect()
          }
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(grid)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="tech section"
      id="tech"
      aria-labelledby="tech-heading"
    >
      <div className="shell">
        <h2 className="section-heading" id="tech-heading">
          Tools I use to build and test software.
        </h2>

        <div className="tech__grid" ref={gridRef}>
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
              <p className="tech__caption">{category.caption}</p>

              <ul className="tech__list">
                {category.items.map((item) => (
                  <li className="tech__item" key={item.label}>
                    <span
                      className={
                        item.logo === 'go'
                          ? 'tech__icon tech__icon--go'
                          : 'tech__icon'
                      }
                      aria-hidden="true"
                    >
                      {item.logo ? (
                        <img
                          className={
                            item.logo === 'go'
                              ? 'tech__logo tech__logo--go'
                              : 'tech__logo'
                          }
                          src={brands[item.logo].src}
                          alt=""
                          width={22}
                          height={22}
                        />
                      ) : (
                        (inlineIcons[item.label] ?? (
                          <span className="tech__bullet" />
                        ))
                      )}
                    </span>
                    <span className="tech__text">{item.label}</span>
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
