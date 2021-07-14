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
import de from '../i18n/de'
import en from '../i18n/en'

export const i18n = createI18n({
  // you must set legacy `false`, to use Composition API
  // https://vue-i18n-next.intlify.dev/guide/advanced/composition.html
  legacy: false, 
  // Inject i18n property into component 
  // https://vue-i18n-next.intlify.dev/guide/advanced/composition.html#implicit-with-injected-properties-and-functions
  globalInjection: true, 
  locale: 'en',
  fallbackLocale: 'en',
  messages: { de, en },
})
