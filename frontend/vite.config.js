// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://kaushalam-full-stack-developer-task.vercel.app/?vercelToolbarCode=8SBhp6rXS12tFKI',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
