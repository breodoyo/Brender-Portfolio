import type { Accent } from './tech'

export type { Accent }

/** A real screenshot of the product interface. */
export type ProjectImage = {
  src: string
  /**
   * Intrinsic pixel size. CSS stretches the image to the canvas either way, so
   * these only supply the correct aspect ratio before the stylesheet applies.
   */
  width: number
  height: number
  /**
   * Empty string marks the image decorative. Each card already states the
   * project title and describes what it does, so a non-empty alt would just
   * repeat that to a screen reader.
   */
  alt: string
}

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
  /**
   * Caption for the abstract wireframe. Required because the wireframe always
   * needs one, but only rendered when there is no `image` to show instead.
   */
  visualNote: string
  /** Real product screenshot. Absent renders the abstract wireframe. */
  image?: ProjectImage
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
    image: { src: '/niavo-app.png', width: 1366, height: 653, alt: '' },
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
    image: { src: '/soulwe-web.png', width: 1366, height: 620, alt: '' },
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
    image: { src: '/groupie-tracker.png', width: 1363, height: 662, alt: '' },
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
