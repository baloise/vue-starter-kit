import type { UserConfig } from 'vite'

// https://vitejs.dev/config/
export const testConfig: UserConfig = {
  test: {
    global: true,
    environment: 'happy-dom',
    deps: {
      inline: ['@baloise/design-system-components'],
    },
  },
} as UserConfig
