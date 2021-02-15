/* eslint @typescript-eslint/no-explicit-any: "off" */

import { reactive, ref, watch } from 'vue'

export type ValidatorFn<TValue = any> = (value: TValue) => ValidatorResult
export type ValidatorResult = string | null

type FormControl = {
  name: string
  model: any
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

type ControlOptions = {
  notifyChange: (control: FormControl) => void
}

const useFormControl = (
  options: ControlOptions = {
    notifyChange: () => undefined,
  },
) => (name: string, startValue: any, validators: ValidatorFn[]) => {
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

  const validate = async (): Promise<boolean> => {
    if (!control.disabled) {
      control.pending = true
      const results: ValidatorResult[] = await Promise.all(
        validators.map(validator => validator(control.model)),
      )
      control.errors = results.filter(r => r !== null) as string[]
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

  const updateForm = () => {
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

export const useForm = () => {
  const controls = new Map<string, FormControl>()
  const isFormValid = ref(false)
  const isValidated = ref(false)

  async function validateAll() {
    for (const control of controls.values()) {
      if (control.validate) {
        await control.validate()
      }
    }
    isValidated.value = true
  }

  async function update() {
    const results = [...controls.values()].filter(r => !r.disabled)
    const areControlsValid = results.every(r => !r.invalid)
    const areControlsChecked = results
      .filter(r => r.hasValidators)
      .every(r => r.touched)
    isFormValid.value = areControlsValid && areControlsChecked
  }

  return {
    useFormControl: useFormControl({
      notifyChange: async control => {
        controls.set(control.name, control)
        await update()
      },
    }),
    validateAll,
    isFormValid,
    isValidated,
  }
}

export const useControl = (
  name: string,
  startValue: any,
  validators: ValidatorFn[],
) =>
  useFormControl({
    notifyChange: () => undefined,
  })(name, startValue, validators)
