import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/adapters': path.resolve(__dirname, './src/adapters'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/contexts': path.resolve(__dirname, './src/contexts'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/interceptors': path.resolve(__dirname, './src/interceptors'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/models': path.resolve(__dirname, './src/models'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/utilities': path.resolve(__dirname, './src/utilities')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
