/**
 * Article previews.
 * TODO: replace the placeholder entries below with real published articles.
 * Keep the shape — Category / Title / Description / Date — so nothing else
 * needs to change.
 */
export type Article = {
  id: string
  category: string
  title: string
  description: string
  date: string
  href: string
  placeholder: boolean
}

export const articles: Article[] = [
  {
    id: 'placeholder-1',
    category: 'Backend',
    title: 'Placeholder article title',
    description:
      'Replace this with a short summary of the article. One or two sentences is enough.',
    date: 'Coming soon',
    href: '',
    placeholder: true,
  },
  {
    id: 'placeholder-2',
    category: 'Testing',
    title: 'Placeholder article title',
    description:
      'Replace this with a short summary of the article. One or two sentences is enough.',
    date: 'Coming soon',
    href: '',
    placeholder: true,
  },
  {
    id: 'placeholder-3',
    category: 'Frontend',
    title: 'Placeholder article title',
    description:
      'Replace this with a short summary of the article. One or two sentences is enough.',
    date: 'Coming soon',
    href: '',
    placeholder: true,
  },
]
