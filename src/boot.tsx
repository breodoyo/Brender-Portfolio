import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { ComponentType } from 'react'
import './styles/global.css'

/**
 * Shared bootstrap for every page entry. The portfolio is a multi-page static
 * site (index / journey / articles), so each HTML document mounts its own page
 * component through here rather than sharing a single root.
 */
export function mount(Page: ComponentType) {
  const rootElement = document.getElementById('root')

  if (!rootElement) {
    throw new Error('Root element #root not found in the page HTML')
  }

  // Gates the scroll-reveal start state so content stays visible without JS.
  document.documentElement.classList.add('js')

  createRoot(rootElement).render(
    <StrictMode>
      <Page />
    </StrictMode>,
  )
}
