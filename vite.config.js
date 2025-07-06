// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root:       '.',       // serve & build from here
  publicDir:  'public',  // your assets folder
  build: {
    outDir: '../dist',   // optional: change if you want a different build folder
  }
})
