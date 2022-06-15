import { App } from 'vue'

export type InstallPlugin<TValue = void> = (app: App) => TValue

export type InstallPluginWithOptions<TOptions = undefined, TValue = void> = (
  app: App,
  options: TOptions,
) => TValue
