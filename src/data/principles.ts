export type Principle = {
  number: string
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Build with purpose',
    description: 'Start from the problem, not the tooling.',
  },
  {
    number: '02',
    title: 'Understand the system',
    description: 'Know how the pieces fit together before changing them.',
  },
  {
    number: '03',
    title: 'Improve through iteration',
    description: 'Ship, test, break it, and make it better.',
  },
]
