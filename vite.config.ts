import { resolve } from 'path'
import { defineConfig } from 'vite'
import type { UserConfigExport } from 'vite'
import type { UserConfig } from 'vitest'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

const testConfig = {
  test: {
    global: true,
    environment: 'happy-dom',
    deps: {
      inline: ['@baloise/design-system-components'],
    },
  },
} as UserConfig

// https://vitejs.dev/config/
const config = defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  optimizeDeps: {
    exclude: ['@stencil/core', '@types/jest'],
  },
  plugins: [vue(), eslint()],
  ...testConfig,
})

export default ({ mode }: { mode: string }): UserConfigExport => {
  if (mode === 'development') {
    return {
      ...config,
      // Mock backend service
      server: {
        proxy: {
          '^/api': {
            target: 'http://localhost:8080/your-app-name',
            changeOrigin: true,
          },
        },
      },
    }
  }

  return config
}
