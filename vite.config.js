import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),

    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      pattern: []
    }
  },
  server: {
    port: 8080,//默认开启的端口
    open: true,//自动打开浏览器
    cors: true,//允许跨域
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
