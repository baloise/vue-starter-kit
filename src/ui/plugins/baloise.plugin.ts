import { I18n } from 'vue-i18n'
/**
 * Baloise Plugins
 * =============================
 *
 * The Baloise Design System
 * -----------------------------
 * Consists of UI components and a clearly defined visual style,
 * released as both code implementations and
 * design artifacts to build any number of web applications.
 *
 * https://design.baloise.dev/
 *
 *
 * Baloise Vue Forms
 * -----------------------------
 * Delivers utility components to create forms that follow the guides of the
 * Baloise Design System. Moreover it extends the useField function to work as
 * smooth as possible with the Baloise Design System and defines Baloise specific
 * yup schema validations.
 *
 * https://github.com/baloise/web-app-utils/blob/master/vue-form/packages/form-vue/README.md
 *
 */

import { App } from 'vue'
import './baloise-design-system.sass'
import { BalSwissLanguage } from '@baloise/design-system-components'
import { createBaloiseDesignSystem } from '@baloise/design-system-components-vue'
import { baloiseForm } from '@baloise/web-app-form-vue'

interface PluginOptions {
  i18n: I18n<any, any, any, false>
}

type InstallPlugin = (app: App, options: PluginOptions) => void

export const installBaloise: InstallPlugin = (app, { i18n }) => {
  app.config.compilerOptions.isCustomElement = (tag: string) =>
    tag.startsWith('bal-')

  const baloiseDesignSystem = createBaloiseDesignSystem({
    defaults: {
      region: 'CH',
      language: i18n.global.locale.value as BalSwissLanguage,
    },
  })

  app.use(baloiseDesignSystem).use(baloiseForm, { i18n })
}
