import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/shared/*': path.resolve(__dirname, './shared/*'),
      '@/entities/*': path.resolve(__dirname, './entities/*'),
      '@/features/*': path.resolve(__dirname, './features/*'),
    }
  },
  server: {
    port: 3000
  }
})
