import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: When deploying to GitHub Pages, set base to '/REPO_NAME/'
// For example, if your repo is github.com/jessebiter/phenom100-quiz,
// set base to '/phenom100-quiz/'
export default defineConfig({
  plugins: [react()],
  base: 'phenom100-quiz/',
})
