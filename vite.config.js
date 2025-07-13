import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',               // serve from project root
  publicDir: 'public',     // your static assets
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    open: true
  }
});
