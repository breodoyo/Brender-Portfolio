import './Nav.css'

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'articles', label: 'Articles' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  return (
    <header className="nav">
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top">
          Brender Odoyo
        </a>

        <nav className="nav__primary" aria-label="Primary">
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.id}>
                <a className="nav__link" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav
