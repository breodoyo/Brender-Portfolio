/**
 * Site-wide identity and links.
 * TODO: fill in `x` once that profile exists.
 * Empty links are filtered out of the footer instead of rendering dead hrefs.
 */
export const site = {
  name: 'Brender Odoyo',
  role: 'Backend & Full-Stack Developer',
  // Explicit line break: the two halves are separate clauses, and a single
  // max-width cannot produce this break because the second line is the longer
  // one. Rendered via white-space: pre-line on .hero__heading.
  headline: "Hi, I'm Brender.\nA Software Developer",
  summary:
    'I build web applications and APIs with Go, React, TypeScript, and PostgreSQL, with a strong focus on clean architecture, testing, and solving real-world problems.',
  email: 'brenderjohns2@gmail.com',
  location: 'Kisumu, Kenya',
  year: 2026,
  links: {
    github: 'https://github.com/breodoyo',
    linkedin: 'https://linkedin.com/in/brender-adhiambo-517737191/',
    devto: 'https://dev.to/breodoyo',
    x: '',
    resume:
      'https://eu.wps.com/cms/docs/d/cbPasmvZJy0uqVOe?platform=pc&refer=copylink',
  },
}

export type NavPage = 'journey' | 'articles'

export type NavItem = {
  id: string
  label: string
  /** Set when the item is a standalone page rather than a homepage anchor. */
  page?: NavPage
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey', page: 'journey' },
  { id: 'articles', label: 'Articles', page: 'articles' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]
