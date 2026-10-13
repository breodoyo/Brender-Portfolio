export type BrandName =
  | 'go'
  | 'react'
  | 'typescript'
  | 'postgresql'
  | 'docker'
  | 'git'
  | 'vscode'
  | 'postman'

export type BrandIcon = {
  name: string
  color: string
  src: string
}

export const brands: Record<BrandName, BrandIcon> = {
  go: { name: 'Go', color: '#00ADD8', src: '/logos/go.svg' },
  react: { name: 'React', color: '#61DAFB', src: '/logos/react.svg' },
  typescript: { name: 'TypeScript', color: '#3178C6', src: '/logos/typescript.svg' },
  postgresql: { name: 'PostgreSQL', color: '#4169E1', src: '/logos/postgresql.svg' },
  docker: { name: 'Docker', color: '#2496ED', src: '/logos/docker.svg' },
  git: { name: 'Git', color: '#F05032', src: '/logos/git.svg' },
  vscode: { name: 'VS Code', color: '#007ACC', src: '/logos/vscode.svg' },
  postman: { name: 'Postman', color: '#FF6C37', src: '/logos/postman.svg' },
}