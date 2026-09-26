/**
 * Site-wide identity and links.
 * TODO: replace `email`, and fill in `devto` / `x` once those profiles exist.
 * Empty links are filtered out of the footer instead of rendering dead hrefs.
 */
export const site = {
  name: 'Brender Odoyo',
  role: 'Backend & Full-Stack Developer',
  headline: 'Building reliable software and thoughtful digital experiences.',
  summary:
    'I build web applications and APIs with Go, React, TypeScript, and PostgreSQL, with a strong focus on clean architecture, testing, and solving real-world problems.',
  email: 'brender.odoyo@example.com',
  location: 'Kisumu, Kenya',
  year: 2026,
  links: {
    github: 'https://github.com/breodoyo',
    linkedin: 'https://linkedin.com/in/brender-adhiambo-517737191/',
    devto: '',
    x: '',
    resume: '/Brender-Odoyo-Resume.pdf',
  },
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'articles', label: 'Articles' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]
