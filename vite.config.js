import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  /*resolve: {
    alias: {
      'src': path.resolve(__dirname, './'),
      '@/app': path.resolve(__dirname, './src/app'),
      '@/entities': path.resolve(__dirname, './src/entities'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/processes': path.resolve(__dirname, './src/processes'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
    },
  },*/
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setupTests.ts',
  },
});
