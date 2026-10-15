export type Accent = 'gold' | 'terracotta' | 'green' | 'navy'

export type TechCategory = {
  id: string
  label: string
  tools: string
}

export const techCategories: TechCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    tools: 'Go (Chi, Gin), REST APIs, PostgreSQL, SQL',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    tools: 'React, TypeScript, JavaScript, HTML, CSS, Vite',
  },
  {
    id: 'engineering',
    label: 'Engineering',
    tools: 'Docker, Git, GitHub, Linux, Debugging',
  },
  {
    id: 'testing',
    label: 'Testing',
    tools: 'API, functional, regression, exploratory and accessibility testing. Postman, axe DevTools',
  },
]
