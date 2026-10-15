import type { BrandName } from '../components/Hero/brands'

export type Accent = 'gold' | 'terracotta' | 'green' | 'navy'

export type TechItem = {
  label: string
  /** Key into the hero's brand map; items without a logo fall back to a bullet. */
  logo?: BrandName
}

export type TechCategory = {
  id: string
  label: string
  caption: string
  accent: Accent
  items: TechItem[]
}

export const techCategories: TechCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    caption: 'Where the logic lives',
    accent: 'navy',
    items: [
      { label: 'Go (Chi, Gin)', logo: 'go' },
      { label: 'REST APIs' },
      { label: 'PostgreSQL', logo: 'postgresql' },
      { label: 'SQL' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    caption: 'What users see',
    accent: 'gold',
    items: [
      { label: 'React', logo: 'react' },
      { label: 'TypeScript', logo: 'typescript' },
      { label: 'JavaScript' },
      { label: 'HTML' },
      { label: 'CSS' },
      { label: 'Vite' },
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    caption: 'How it ships',
    accent: 'terracotta',
    items: [
      { label: 'Docker', logo: 'docker' },
      { label: 'Git', logo: 'git' },
      { label: 'GitHub' },
      { label: 'Linux' },
      { label: 'Testing' },
      { label: 'Debugging' },
    ],
  },
  {
    id: 'testing',
    label: 'Testing',
    caption: 'How I make sure it works',
    accent: 'green',
    items: [
      { label: 'API Testing' },
      { label: 'Functional Testing' },
      { label: 'Regression Testing' },
      { label: 'Exploratory Testing' },
      { label: 'Accessibility Testing' },
      { label: 'Postman', logo: 'postman' },
      { label: 'axe DevTools' },
    ],
  },
]
