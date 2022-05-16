import { BalValidators as b } from '@baloise/web-app-validators-vue'
import { validator as v } from '../plugins/validation.plugin'

export { rules } from '@baloise/web-app-validators-vue'

export const isRequired = () => v(b.isRequired(), 'validator.required')
