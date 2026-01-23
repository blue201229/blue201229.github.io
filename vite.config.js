import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update this to match your GitHub repository name
  // If repo is "username.github.io", use base: '/'
  // If repo is "portfolio", use base: '/portfolio/'
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
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
