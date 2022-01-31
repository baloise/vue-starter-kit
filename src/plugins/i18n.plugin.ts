/**
 * Vue i18n
 * --------------------
 * Internationalization plugin for Vue.js
 *
 * https://github.com/intlify/vue-i18n-next
 * https://vue-i18n.intlify.dev/guide
 *
 */
import { createI18n } from 'vue-i18n'
import de from '@/locales/de'
import en from '@/locales/en'
import fr from '@/locales/fr'
import it from '@/locales/it'

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages: { de, en, fr, it },
})
