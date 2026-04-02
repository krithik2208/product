import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product1: resolve(__dirname, 'product1.html'),
        product2: resolve(__dirname, 'product2.html'),
        product3: resolve(__dirname, 'product3.html')
      }
    }
  }
})
