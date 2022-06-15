import { defineStore } from 'pinia'
import {
  BalSwissLanguage,
  onBalConfigChange,
  BalConfigState,
  updateBalAllowedLanguages,
  updateBalLanguage,
} from '@baloise/design-system-components'
import { useStorage } from '@vueuse/core'
import { i18n } from '../plugins/i18n.plugin'
import { updateLocale } from '@baloise/web-app-form-vue'

export const useI18nStore = defineStore('i18n', {
  state: () => {
    return {
      locale: useStorage<BalSwissLanguage>('i18n-locale', 'en'),
      allowedLanguages: ['en', 'de'] as BalSwissLanguage[],
    }
  },
  actions: {
    /**
     * Initialize the language settings for the Design System and
     * the vue-i18n library. Listens also for language changes
     * from the Design System to update the locale state of our store.
     */
    init() {
      updateBalAllowedLanguages(this.allowedLanguages)
      this.update(this.locale)
      onBalConfigChange((config: BalConfigState) => {
        if (config.language !== this.locale) {
          this.update(config.language as BalSwissLanguage)
        }
      })
    },
    /**
     * Updates the locale / language for all parties.
     */
    update(locale: BalSwissLanguage) {
      this.locale = locale
      updateBalLanguage(this.locale)
      i18n.global.locale.value = this.locale
      updateLocale(i18n as any)
    },
  },
})
