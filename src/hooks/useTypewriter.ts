import { useEffect, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  )
}

/**
 * Reveals `text` one character at a time, then leaves it complete.
 *
 * The animation is purely presentational: assistive technology receives the
 * whole string at once (see Hero), so nothing is announced character by
 * character. Users who prefer reduced motion get the finished text with no
 * timer. The pending timer is cleared on unmount so a fast navigation never
 * sets state on a dead component.
 */
export function useTypewriter(text: string, speed = 55) {
  const [state, setState] = useState(() => ({
    reduced: prefersReducedMotion(),
    typed: prefersReducedMotion() ? text : '',
  }))

  useEffect(() => {
    if (state.reduced) return

    let index = 0
    let timer = 0

    const step = () => {
      index += 1
      setState((prev) => ({ ...prev, typed: text.slice(0, index) }))

      if (index >= text.length) return

      // A little longer after punctuation and line breaks reads as natural
      // typing rhythm without turning the reveal into an unpredictable wait.
      const char = text[index - 1]
      const pause = /[.,!?]/.test(char) ? speed * 4 : char === '\n' ? speed * 3 : speed
      timer = window.setTimeout(step, pause)
    }

    timer = window.setTimeout(step, speed)

    return () => window.clearTimeout(timer)
  }, [state.reduced, text, speed])

  return state.reduced ? text : state.typed
}