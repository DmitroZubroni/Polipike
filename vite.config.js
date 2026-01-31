import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 75 },
      png: { quality: 80 },
      webp: { quality: 75 },
      avif: { quality: 50 },
    })
  ],
  build: {
    assetsInlineLimit: 0, // ❗ не инлайнить картинки в JS
  }
})
