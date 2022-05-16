import { ConfigEnv, defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

import { baseConfig } from '../.build/base.config'
import { proxyServerConfig } from './../.build/proxy-server.config'
import { useOnDevelopment } from '../.build/util.config'

export default (env: ConfigEnv): UserConfigExport =>
  defineConfig({
    ...baseConfig,
    ...useOnDevelopment(env, proxyServerConfig),
    plugins: [vue()],
  })
