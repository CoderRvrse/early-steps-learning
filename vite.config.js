// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // ← this must match your repo name
  base: '/early-steps-learning/',

  root:      '.',
  publicDir: 'public',
  build: {
    outDir:    'docs',      // where GH-Pages will serve from
    emptyOutDir: true,
  },
})
