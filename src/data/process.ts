export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'I read the requirements and work out what could go wrong before I write code.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'I keep handlers, services and repositories separate so each layer can be tested on its own.',
  },
  {
    number: '03',
    title: 'Test',
    description:
      'I check APIs, edge cases and accessibility, and I try to break what I just built.',
  },
  {
    number: '04',
    title: 'Improve',
    description: 'I fix what broke and refactor what was awkward.',
  },
]
