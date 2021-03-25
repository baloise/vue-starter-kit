import { ref } from '@vue/composition-api'
import { useFormControl } from './form-control'
import { FormComposable, FormControl } from './types'

export const useForm = (): FormComposable => {
  const controls = new Map<string, FormControl>()
  const isFormValid = ref(false)
  const isValidated = ref(false)

  async function validateAll() {
    for (const control of Array.from(controls.values())) {
      if (control.validate) {
        await control.validate()
      }
    }
    isValidated.value = true
  }

  async function update() {
    const results = [...Array.from(controls.values())].filter(
      (r) => !r.disabled,
    )
    const areControlsValid = results.every((r) => !r.invalid)
    const areControlsChecked = results
      .filter((r) => r.hasValidators)
      .every((r) => r.touched)
    isFormValid.value = areControlsValid && areControlsChecked
  }

  return {
    useFormControl: useFormControl({
      notifyChange: async (control) => {
        controls.set(control.name, control)
        await update()
      },
    }),
    validateAll,
    isFormValid,
    isValidated,
  }
}
