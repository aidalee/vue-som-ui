import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md'; // 安装了比当前版本高的版本时发现无法支持本地注册，只能全局注册 https://www.npmjs.com/package/vite-plugin-md

// 文档: https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      packages: resolve(__dirname, '../packages'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown()
  ],
});
