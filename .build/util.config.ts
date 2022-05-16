import { ConfigEnv, UserConfig } from 'vite'

export const useOnDevelopment = (env: ConfigEnv, config: UserConfig) => {
  if (env.mode === 'development') {
    return config
  }
  return {}
}
