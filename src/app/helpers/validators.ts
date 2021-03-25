import { BalValidators } from '@baloise/ui-library'
import { i18n } from '../../plugins/i18n.plugin'
import { ValidatorFn } from '../../lib/form/types'

export const isRequired = (): ValidatorFn => (value) => {
  return translate(BalValidators.isRequired()(value), 'validator.required')
}

export const isMinLength = (length: number): ValidatorFn => (value) => {
  return translate(
    BalValidators.isMinLength(length)(value),
    'validator.minLength',
  )
}

export const isMaxLength = (length: number): ValidatorFn => (value) => {
  return translate(
    BalValidators.isMaxLength(length)(value),
    'validator.maxLength',
  )
}

function translate(isValid: boolean, translateKey: string) {
  return isValid ? null : i18n.global.t(translateKey)
}
