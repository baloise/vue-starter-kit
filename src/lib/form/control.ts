import { useFormControl } from './form-control'
import { useControlFn } from './types'

export const useControl: useControlFn = (name, startValue, validators) =>
  useFormControl({
    notifyChange: () => undefined,
  })(name, startValue, validators)
