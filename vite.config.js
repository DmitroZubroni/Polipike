import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [react(),
    ViteImageOptimizer({
      /* настройки */
      jpg: {
        quality: 80, // качество 80% (хороший баланс)
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
    }),
  ],
})
