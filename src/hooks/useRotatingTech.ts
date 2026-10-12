import { useEffect, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Cycles through `items` one at a time, holding each for `interval` ms so the
 * name is readable before the next fade-and-slide takes over.
 *
 * The current name is a single string; UI that remounts it on `index` drives
 * the CSS enter/hold/exit keyframes. Assistive technology never has to follow
 * the swaps: callers hide the animated word and expose the whole list once.
 * Reduced-motion users get the first item pinned with no timer, and the timer
 * is cleared on unmount.
 */
export function useRotatingTech(items: readonly string[], interval = 2600) {
  const [index, setIndex] = useState(0)
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia(REDUCED_MOTION_QUERY).matches,
  )

  useEffect(() => {
    if (reduced || items.length < 2) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, interval)

    return () => window.clearInterval(id)
  }, [interval, items.length, reduced])

  return { index, tech: reduced ? items[0] : items[index] }
}