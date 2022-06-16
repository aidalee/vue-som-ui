import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
    Inspect(),
    vueJsx()
  ]
});