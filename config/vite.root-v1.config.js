import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, '..'),
  build: {
    outDir: path.resolve(__dirname, '../dist/root-v1'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, '../index-v1.html')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@sites': path.resolve(__dirname, '../sites')
    }
  },
  server: {
    port: 5174,
    open: '/index-v1.html'
  }
})

