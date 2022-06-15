import { resolve } from 'path'
import type { UserConfig } from 'vite'

// https://vitejs.dev/config/
export const baseConfig: UserConfig = {
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  optimizeDeps: {
    exclude: ['@stencil/core', '@types/jest'],
  },
}
