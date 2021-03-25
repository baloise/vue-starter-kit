import { reactive, watch } from '@vue/composition-api'
import {
  ControlOptions,
  ValidatorResult,
  FormControl,
  useFormControlFn,
  FormControlComposable,
} from './types'

export const useFormControl: useFormControlFn = (
  options: ControlOptions = {
    notifyChange: () => undefined,
  },
) => (name, startValue, validators): FormControlComposable => {
  const control = reactive<FormControl>({
    name,
    model: startValue,
    touched: !!startValue,
    pending: false,
    invalid: false,
    disabled: false,
    error: '',
    errors: [] as string[],
    validators,
    hasValidators: validators.length > 0,
  })

  async function validate(): Promise<boolean> {
    if (!control.disabled) {
      control.pending = true
      const results: ValidatorResult[] = await Promise.all(
        validators.map((validator) => validator(control.model)),
      )
      control.errors = results.filter((r) => r !== null) as string[]
      if (control.errors && control.errors.length > 0) {
        control.error = control.touched ? control.errors[0] : ''
      } else {
        control.error = ''
      }
      control.invalid = control.errors.length > 0
    } else {
      control.invalid = false
    }

    control.pending = false
    return !control.invalid
  }

  function updateForm() {
    options.notifyChange(control)
  }

  watch(
    () => control.model,
    async () => {
      control.touched = true
      await validate()
    },
  )
  watch(() => [control.invalid, control.touched, control.disabled], updateForm)

  validate()

  return { control, validate }
}
