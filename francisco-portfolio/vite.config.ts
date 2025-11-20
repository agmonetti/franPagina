import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    // Optimizaciones de build
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      output: {
        // Separar chunks para mejor cache
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react'],
          'emailjs': ['@emailjs/browser'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false, // Más rápido en builds
  },
  optimizeDeps: {
    // Pre-bundle dependencies para desarrollo más rápido
    include: ['react', 'react-dom', 'lucide-react', '@emailjs/browser'],
  },
})
