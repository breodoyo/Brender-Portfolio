import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found in index.html')
}

// Gates the scroll-reveal start state so content stays visible without JS.
document.documentElement.classList.add('js')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
