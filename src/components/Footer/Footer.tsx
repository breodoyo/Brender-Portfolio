import { site } from '../../data/site'
import './Footer.css'

const footerLinks = [
  { label: 'GitHub', href: site.links.github },
  { label: 'LinkedIn', href: site.links.linkedin },
  { label: 'Dev.to', href: site.links.devto },
  { label: 'X', href: site.links.x },
  { label: 'Resume', href: site.links.resume },
]

export default function Footer() {
  // Empty hrefs are dropped rather than rendered as dead links.
  const links = footerLinks.filter((link) => Boolean(link.href))

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__identity">
          <p className="footer__name">{site.name}</p>
          <p className="footer__role">{site.role}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul className="footer__list">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="footer__link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer__copyright">
          &copy; {site.year} {site.name}
        </p>
      </div>
    </footer>
  )
}
