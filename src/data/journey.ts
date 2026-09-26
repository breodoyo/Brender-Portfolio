export type JourneyEntry = {
  id: string
  role: string
  org: string
  location?: string
  period: string
  summary: string
  points: string[]
}

export const journey: JourneyEntry[] = [
  {
    id: 'apprentice',
    role: 'Software Development Apprentice',
    org: 'Zone01 Kisumu',
    location: 'Kisumu, Kenya',
    period: '2026 — Present',
    summary:
      'Project-based software development across backend systems, algorithms, and collaboration.',
    points: [
      'Project-based software development',
      'Go and backend development',
      'Algorithms and systems',
      'Collaboration',
      'Open source',
      'Technical problem solving',
    ],
  },
  {
    id: 'qa',
    role: 'QA / Software Tester',
    org: 'Placeholder employer — replace with the real organisation',
    period: '3+ years experience',
    summary:
      'Quality assurance work spanning functional, regression, exploratory, API, and accessibility testing.',
    points: [
      'Functional testing',
      'Regression testing',
      'Exploratory testing',
      'API testing',
      'Accessibility testing',
      'Bug reporting',
      'Debugging',
    ],
  },
]
