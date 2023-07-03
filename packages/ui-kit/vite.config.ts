import path from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [
    // поддержка синтаксиса React (JSX и прочее)
    react(),
    // генерация файла `index.d.ts`
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  server: {
    host: '0.0.0.0',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@npm.piece/ui-kit',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`,
    },
  },
})
