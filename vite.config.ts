import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves a project site from a sub-folder:
//   https://paavkim.github.io/PM-portfolio/
// `base` tells Vite to prefix every CSS/JS/image URL with that folder,
// otherwise the deployed page loads a blank screen.
//
// If you ever rename the GitHub repository, change this string to match:
//   base: '/new-repo-name/'
// If you rename it to `PaavkiM.github.io` (a user site served at the root),
// change it to:
//   base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/PM-portfolio/',
})
