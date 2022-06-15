<script setup lang="ts">
import {
  BalInput,
  BalField,
  BalFieldControl,
  BalFieldLabel,
  BalFieldMessage,
} from '@baloise/design-system-components-vue'
import { useBalField } from '@baloise/web-app-form-vue'
import { useField } from 'vee-validate'

export interface Props {
  /**
   * The name of the form control to register it
   * to the form schema of vee-validate
   */
  field: string
  /**
   * Form control label
   */
  label?: string
  /**
   * If `true` the form field and control gets disabled
   */
  disabled?: boolean
}

const props = defineProps<Props>()

const { value } = useField<string>(props.field)
const { invalid, message } = useBalField(props.field)
</script>

<template>
  <BalField :invalid="invalid" :disabled="props.disabled">
    <BalFieldLabel :required="true">{{ label }}</BalFieldLabel>
    <BalFieldControl>
      <BalInput v-model="value" :data-testid="`field-${field}`" />
    </BalFieldControl>
    <BalFieldMessage>
      {{ message }}
    </BalFieldMessage>
  </BalField>
</template>
