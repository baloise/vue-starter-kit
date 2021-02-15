import { i18n } from '../../plugins/i18n.plugin'
import { ValidatorFn } from './use-validation'

export const isRequired = (): ValidatorFn<string | string[]> => value => {
  return value === undefined || value === null || value === '' || value === []
    ? i18n.global.t('validator.required')
    : null
}

export const minLength = (length: number): ValidatorFn<string> => value => {
  return value === undefined || value === null || value.length < length
    ? i18n.global.t('validator.minLength')
    : null
}

export const maxLength = (length: number): ValidatorFn<string> => value => {
  return value === undefined || value === null || value.length > length
    ? i18n.global.t('validator.maxLength')
    : null
}
