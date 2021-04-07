import { defineConfig, UserConfigExport, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import fixStencilImport from './stencil-fix.js'

// https://vitejs.dev/config/#resolve-alias
const alias: Record<string, string> = {
  'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
}

const fixStencilImportPlugin = (): Plugin => {
  return {
    name: 'fixStencilImport',
    configResolved() {
      fixStencilImport()
    },
    configureServer(server) {
      server.watcher.once('change', () => {
        fixStencilImport()
      })
    },
  }
}

// https://vitejs.dev/config/
const config = defineConfig({
  base: '/app-name/',
  resolve: { alias },
  optimizeDeps: {
    exclude: ['@stencil/core', '@types/jest'],
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    fixStencilImportPlugin(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('bal'),
        },
      },
    }),
  ],
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
