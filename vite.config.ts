import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Journey and Articles are standalone pages, not homepage sections.
      // Real .html entries keep the site static-host friendly: no SPA fallback
      // rewrite is needed, so a hard refresh or deep link never 404s.
      input: {
        main: 'index.html',
        journey: 'journey.html',
        articles: 'articles.html',
      },
    },
  },
})
