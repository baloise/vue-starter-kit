import type { UserConfig } from 'vite'

// https://vitejs.dev/config/
export const proxyServerConfig: UserConfig = {
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8080/your-app-name',
        changeOrigin: true,
      },
    },
  },
}
