import type { Accent, ProjectLayout } from '../../data/projects'
import './ProjectVisual.css'

type ProjectVisualProps = {
  title: string
  note: string
  layout: ProjectLayout
  accent: Accent
}

/**
 * Abstract interface-inspired placeholder. Deliberately built from borders and
 * blocks rather than an image, so it can never be mistaken for a real
 * screenshot of the product. Swap for a real screenshot when one exists.
 */
export default function ProjectVisual({
  title,
  note,
  layout,
  accent,
}: ProjectVisualProps) {
  return (
    <div className="visual" data-variant={layout} data-accent={accent}>
      <div className="visual__canvas" aria-hidden="true">
        <div className="visual__accent" />
        <div className="visual__head" />
        <div className="visual__cols">
          <div className="visual__col">
            <div className="visual__bar" />
            <div className="visual__bar" />
            <div className="visual__bar" />
          </div>
          <div className="visual__stack">
            <div className="visual__bar" />
            <div className="visual__bar" />
            <div className="visual__bar" />
            <div className="visual__bar" />
          </div>
        </div>
      </div>

      <p className="visual__meta">
        <span className="visual__name">{title}</span>
        <span className="visual__note">{note}</span>
      </p>
    </div>
  )
}
