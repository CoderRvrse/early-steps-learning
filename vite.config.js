// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // ① The sub-folder your site will live in on GH Pages:
  base: '/early-steps-learning/',

  // ② Where to spit out the built files:
  build: {
    outDir: 'docs',        // <-- GitHub Pages will serve docs/
    emptyOutDir: true      // <-- clear out docs/ before each build
  }
})
