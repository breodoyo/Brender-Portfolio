export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the problem, requirements, and users.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Design a simple structure and implement incrementally.',
  },
  {
    number: '03',
    title: 'Test',
    description: 'Test APIs, edge cases, behavior, and accessibility.',
  },
  {
    number: '04',
    title: 'Improve',
    description: 'Review what works, identify weaknesses, and iterate.',
  },
]
