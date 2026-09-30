import type { Accent, ProjectImage } from '../../data/projects'
import './ProjectVisual.css'

type ProjectVisualProps = {
  title: string
  note: string
  accent: Accent
  image?: ProjectImage
}

/**
 * Shows the product screenshot when the project has one, and otherwise falls
 * back to an abstract interface-inspired wireframe built from borders and
 * blocks. The wireframe is deliberately abstract, so it can never be mistaken
 * for a screenshot of the product.
 */
export default function ProjectVisual({
  title,
  note,
  accent,
  image,
}: ProjectVisualProps) {
  return (
    <div className="visual" data-accent={accent}>
      <div
        className={`visual__canvas${image ? ' visual__canvas--image' : ''}`}
        aria-hidden={image ? undefined : 'true'}
      >
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            decoding="async"
          />
        ) : (
          <>
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
          </>
        )}
      </div>

      <p className="visual__meta">
        <span className="visual__name">{title}</span>
        {/* Only the wireframe needs a caption. Under a real screenshot the
            note would read as a placeholder label, which is a lie. */}
        {!image && <span className="visual__note">{note}</span>}
      </p>
    </div>
  )
}
