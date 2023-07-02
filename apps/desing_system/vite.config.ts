import path from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
  build: {
    lib: {
      // путь к основному файлу библиотеки
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      // название библиотеки
      name: 'ruk',
      // форматы генерируемых файлов
      formats: ['es', 'umd'],
      // названия генерируемых файлов
      fileName: format => `ruk.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
