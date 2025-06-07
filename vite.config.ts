import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dynamicImport()
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', '@studio-freight/lenis', 'gsap'],
          '3d-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'ui-vendor': ['lucide-react', 'react-helmet-async'],
          'utils': ['date-fns', 'react-intersection-observer', 'react-spring']
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit
  },
  server: {
    fs: {
      strict: false
    }
  }
});