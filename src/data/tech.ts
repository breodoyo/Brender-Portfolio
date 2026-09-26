export type Accent = 'gold' | 'terracotta' | 'green' | 'navy'

export type TechCategory = {
  id: string
  label: string
  accent: Accent
  items: string[]
}

export const techCategories: TechCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    accent: 'navy',
    items: ['Go', 'REST APIs', 'Gin', 'Chi', 'PostgreSQL', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    accent: 'gold',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    accent: 'terracotta',
    items: ['Docker', 'Git', 'GitHub', 'Linux', 'Testing', 'Debugging'],
  },
  {
    id: 'testing',
    label: 'Testing',
    accent: 'green',
    items: [
      'API Testing',
      'Functional Testing',
      'Regression Testing',
      'Exploratory Testing',
      'Accessibility Testing',
      'Postman',
      'WAVE',
      'axe DevTools',
    ],
  },
]
