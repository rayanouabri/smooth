import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    target: 'es2015', // Compatibilité avec les navigateurs plus anciens comme Opera
    minify: 'esbuild', // Utiliser esbuild au lieu de terser (plus rapide et inclus)
    chunkSizeWarningLimit: 1200, // Eviter les faux positifs sur les gros bundles (données statiques)
  },
}) 