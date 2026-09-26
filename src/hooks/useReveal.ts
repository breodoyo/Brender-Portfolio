import { useEffect, useRef } from 'react'

/**
 * Adds `is-revealed` to an element once it scrolls into view.
 * The hidden start state is gated behind a `.js` class on <html>, so content
 * stays visible when JavaScript is unavailable. `prefers-reduced-motion` is
 * also handled in CSS, so nothing animates for those users.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      element.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add('is-revealed')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return ref
}
