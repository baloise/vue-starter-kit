import { Ref, UnwrapRef } from '@vue/composition-api'

export type FormValue = string | number | null
export type ValidatorFn<TValue = FormValue> = (value: TValue) => ValidatorResult
export type ValidatorResult = string | null

export type FormControl = {
  name: string
  model: FormValue
  disabled: boolean
  pending: boolean
  invalid: boolean
  touched: boolean
  error: string
  errors: string[]
  hasValidators: boolean
  validators: ValidatorFn[]
  validate?: () => Promise<boolean>
}

export type ControlOptions = {
  notifyChange: (control: FormControl) => void
}

export type useFormControlFn = (
  options: ControlOptions,
) => (
  name: string,
  startValue: FormValue,
  validators: ValidatorFn[],
) => FormControlComposable

export type FormControlComposable = {
  control: UnwrapRef<FormControl>
  validate(): Promise<boolean>
}

export type FormComposable = {
  isFormValid: Ref<boolean>
  isValidated: Ref<boolean>
  validateAll: () => Promise<void>
  useFormControl: (
    name: string,
    startValue: FormValue,
    validators: ValidatorFn[],
  ) => FormControlComposable
}

export type useControlFn = (
  name: string,
  startValue: FormValue,
  validators: ValidatorFn[],
) => FormControlComposable
