/**
 * Vue i18n
 * --------------------
 * Internationalization plugin for Vue.js
 *
 * https://github.com/intlify/vue-i18n-next
 * https://vue-i18n.intlify.dev/guide
 *
 */
import { App } from 'vue'
import { createI18n, I18n } from 'vue-i18n'
import de from '../locales/de'
import en from '../locales/en'

type InstallPlugin = (app: App) => I18n<any, unknown, unknown, false>

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages: { de, en },
})

export const installI18n: InstallPlugin = (app) => {
  app.use(i18n)
  return i18n
}
