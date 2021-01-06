/* ============
 * Logdown
 * ============
 *
 * Lightweight, unobtrusive, configurable JavaScript logger.
 *
 * https://caiogondim.github.io/logdown.js/
 */

import Vue from 'vue'
import { PluginObject } from 'vue'
import logdown from 'logdown'
import { appConfig } from '@/config/app.config'

export const Logger: PluginObject<logdown.Logger> = {
  install(VueInstance) {
    const PREFIX = 'app'

    const options = {
      markdown: true,
      isEnabled: appConfig.logEnabled,
    }

    window.localStorage.debug = appConfig.logEnabled ? `${PREFIX}:*` : 'none'

    const logdownOptions = Object.assign({}, options)
    const createLogger = (prefix: string) =>
      logdown(`${PREFIX}:${prefix}`, logdownOptions)

    VueInstance.$createLogger = createLogger

    VueInstance.prototype.$createLogger = createLogger
  },
}

Vue.use(Logger)
