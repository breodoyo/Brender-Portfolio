import type { Accent } from './tech'

export type { Accent }

export type Project = {
  id: string
  number: string
  title: string
  description: string
  tech: string[]
  repo: string
  /** Only set when a live demo exists. The button is hidden when empty. */
  live?: string
  accent: Accent
  /** Placeholder copy for the visual area. No fake screenshots. */
  visualNote: string
}

export const projects: Project[] = [
  {
    id: 'niavo',
    number: '01',
    title: 'Niavo',
    description:
      'A workflow and work-execution platform designed to help teams organize organizations, users, workflows, and work items in one system.',
    tech: ['Go', 'React', 'PostgreSQL', 'Docker', 'REST APIs'],
    repo: 'https://github.com/breodoyo/niavo',
    accent: 'gold',
    visualNote: 'Interface layout placeholder',
  },
  {
    id: 'soulwe',
    number: '02',
    title: 'Soulwe',
    description:
      'A culturally-aware digital wellbeing companion designed around journaling, reflection, breathing exercises, supportive circles, and accessible mental wellbeing experiences.',
    tech: ['Go', 'React', 'TypeScript', 'PostgreSQL', 'AI'],
    repo: 'https://github.com/breodoyo/Soulwe',
    accent: 'terracotta',
    visualNote: 'Interface layout placeholder',
  },
  {
    id: 'groupie-tracker',
    number: '03',
    title: 'Groupie Tracker',
    description:
      'A web application built around consuming and presenting artist and concert data through a structured backend and frontend experience.',
    tech: [],
    repo: 'https://github.com/breodoyo/groupie-tracker',
    accent: 'green',
    visualNote: 'Interface layout placeholder',
  },
  {
    id: 'tetris-optimizer',
    number: '04',
    title: 'Tetris Optimizer',
    // TODO: replace with a real one-line description.
    description:
      'Placeholder description — add a short summary of what this project does and the problem it solves.',
    tech: [],
    repo: 'https://github.com/breodoyo/tetris-optimizer',
    accent: 'navy',
    visualNote: 'Placeholder',
  },
]
