import { useEffect, useState } from 'react'
import { navItems, site } from '../../data/site'
import type { NavItem } from '../../data/site'
import './Navbar.css'

// Set per document: index.html -> "home", journey.html -> "journey", etc.
const currentPage = document.documentElement.dataset.page ?? 'home'
const isHome = currentPage === 'home'

/**
 * On the homepage, section links stay in-page anchors so they keep smooth
 * scrolling. On a subpage they become "/#section", which the browser resolves
 * natively. Journey and Articles always point at their own document.
 */
function hrefFor(item: NavItem) {
  if (item.page) return `/${item.page}.html`
  return isHome ? `#${item.id}` : `/#${item.id}`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="navbar">
      <div className="shell navbar__inner">
        <a className="navbar__brand" href={isHome ? '#main' : '/'}>
          {site.name}
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="navbar__toggle-text">
            {open ? 'Close' : 'Menu'}
          </span>
          <span className="navbar__toggle-bars" aria-hidden="true" />
        </button>

        <nav
          className="navbar__nav"
          id="primary-menu"
          aria-label="Primary"
          data-open={open ? 'true' : 'false'}
        >
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className="navbar__link"
                  href={hrefFor(item)}
                  aria-current={
                    item.page === currentPage ? 'page' : undefined
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
