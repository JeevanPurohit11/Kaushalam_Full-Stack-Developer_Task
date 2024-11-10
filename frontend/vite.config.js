// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://kaushalam-full-stack-developer-task.vercel.app/?vercelToolbarCode=cxOZ2ijiMHYX-90',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
