import { createValidator } from '@baloise/web-app-validators-vue'
import { i18n } from './i18n.plugin'

export { rules } from '@baloise/web-app-validators-vue'

export const { validator } = createValidator(i18n.global.t)
