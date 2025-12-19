import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/Demo_Personal_Webiste/' : '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  }
}))
