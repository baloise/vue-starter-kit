import { resolve } from 'path'
import { defineConfig, UserConfigExport } from 'vite'
import { UserConfig } from 'vitest'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import svg from 'vite-svg-loader'

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
  base: '/app-name/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  optimizeDeps: {
    exclude: ['@stencil/core', '@types/jest'],
  },
  plugins: [
    vue(),
    eslint(),
    svg({
      svgoConfig: {
        plugins: [
          {
            name: 'removeDimensions',
            params: { removeDimensions: true },
          },
        ],
      },
    }),
  ],
  ...testConfig,
})

export default ({ mode }): UserConfigExport => {
  if (mode === 'development') {
    return {
      ...config,
      base: '/',
      // https://vitejs.dev/config/#server-options
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
