import { ConfigEnv, defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import { baseConfig } from '../.build/base.config'
import { testConfig } from '../.build/test.config'
import { proxyServerConfig } from './../.build/proxy-server.config'
import { useOnDevelopment } from '../.build/util.config'

export default (env: ConfigEnv): UserConfigExport =>
  defineConfig({
    ...baseConfig,
    ...testConfig,
    ...useOnDevelopment(env, proxyServerConfig),
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'vitest'],
        dts: true, // generate TypeScript declaration
      }),
    ],
  })
