import { createValidator } from '@baloise/web-app-validators-vue'
import { i18n } from '@/plugins/i18n.plugin'

export { rules } from '@baloise/web-app-validators-vue'

export const { validator } = createValidator(i18n.global.t)
