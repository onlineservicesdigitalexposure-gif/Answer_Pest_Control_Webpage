import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replace(/\\/g, '/')
          if (
            normalized.includes('/node_modules/react/') ||
            normalized.includes('/node_modules/react-dom/') ||
            normalized.includes('/node_modules/react-helmet-async/')
          ) {
            return 'react-vendor'
          }
          if (normalized.includes('/node_modules/framer-motion/')) {
            return 'motion'
          }
          if (normalized.includes('/node_modules/lucide-react/')) {
            return 'icons'
          }
          return undefined
        },
      },
    },
  },
})
