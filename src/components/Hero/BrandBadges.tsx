import { brands, type BrandName } from './brands'

type BrandBadgesProps = {
  items: readonly {
    id: BrandName
    left?: string
    top?: string
    right?: string
    bottom?: string
    delay: number
    className?: string
  }[]
}

export default function BrandBadges({ items }: BrandBadgesProps) {
  return (
    <ul className="hero__badges" role="group" aria-label="Technologies featured">
      {items.map(({ id, left, top, right, bottom, delay, className }) => {
        const brand = brands[id]
        const classes = ['tech-chip', 'hero__badge--float']
        if (className) classes.push(className)
        return (
          <li
            className={classes.join(' ')}
            key={id}
            style={{
              left,
              top,
              right,
              bottom,
              animationDelay: `${delay}s`,
            }}
            role="img"
            aria-label={brand.name}
          >
            <img
              src={brand.src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              style={{ width: id === 'go' ? '78%' : '100%', height: id === 'go' ? '78%' : '100%', objectFit: 'contain', display: 'block' }}
            />
          </li>
        )
      })}
    </ul>
  )
}