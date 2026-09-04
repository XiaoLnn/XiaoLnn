import { defineConfig } from 'vite'

export default defineConfig({
  base: '/music1/',
  build: {
    target: 'es2019',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          player: ['./src/js/features/player.js'],
          lyrics: ['./src/js/features/lyrics.js'],
          search: ['./src/js/features/search.js']
        }
      }
    }
  }
})
