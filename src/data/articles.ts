/**
 * Article summaries for the Articles list.
 *
 * These are previews, not the full text: each article is published on Dev.to and
 * the portfolio only carries the category, title, one-line summary and date.
 * `href` is optional so a draft can sit in the list without a dead link — while
 * it is absent the row renders "Not published yet" instead of a link.
 */
export type Article = {
  id: string
  category: string
  title: string
  description: string
  date: string
  href?: string
}

/** Newest first. */
export const articles: Article[] = [
  {
    id: 'chi-for-go-backend',
    category: 'Backend',
    title: 'Why I Chose Chi for My Go Backend',
    description:
      'Why I picked Chi over the other Go routers, and why choosing the right tooling matters as much as writing the code itself.',
    date: 'Sep 2, 2026',
    href: 'https://dev.to/breodoyo/why-i-chose-chi-for-my-go-backend-52d6',
  },
  {
    id: 'cli-to-docker',
    category: 'DevOps',
    title: 'From CLI to Docker: What Three Go Projects Taught Me',
    description:
      'How three Go projects grew from a command-line tool into a Dockerized web application, and what each stage taught me.',
    date: 'Jul 7, 2026',
    href: 'https://dev.to/breodoyo/-from-cli-to-docker-what-three-go-projects-taught-me-3c4c',
  },
  {
    id: 'learning-go-simplicity',
    category: 'Go',
    title: 'Learning Go: The Beauty of Simplicity',
    description:
      'Why Go’s straightforward syntax pushed me toward simpler code, and how small targeted exercises built a real foundation.',
    date: 'Jun 17, 2026',
    href: 'https://dev.to/breodoyo/learning-go-the-beauty-of-simplicity-5bnn',
  },
]