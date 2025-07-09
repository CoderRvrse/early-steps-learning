// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root:       '.',            // unchanged
  base:       '/early-steps-learning/',  
  publicDir:  'public',       // unchanged
  build: {
    outDir:     'docs',        // already set
    emptyOutDir:true,
  },
})
