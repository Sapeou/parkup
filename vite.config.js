import { defineConfig } from 'vite'
import path from 'path'

// Minimal Vite config for Storybook integration.
// Add aliases to ensure only a single React instance is used (prevents hooks/context errors)
export default defineConfig({
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
      // react-dom/client sometimes required for newer React; ensure it's resolved too
      'react-dom/client': path.resolve(__dirname, 'node_modules', 'react-dom', 'client')
    }
  },
  server: {
    fs: {
      // Allow serving files from one level up to storybook when needed
      allow: ['..']
    }
  }
})
