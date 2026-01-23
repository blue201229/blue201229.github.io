import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get repository name from environment or use default
// For GitHub Pages: if repo is "username.github.io", use base: '/'
// Otherwise, use base: '/repo-name/'
const repoName = process.env.VITE_REPO_NAME || 'portfolio'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? (repoName === 'blue201229.github.io' ? '/' : `/${repoName}/`)
    : '/',
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
