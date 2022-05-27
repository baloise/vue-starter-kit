<script setup lang="ts">
import { BalInput } from '@baloise/design-system-components-vue'
import { useBalField } from '../../../../lib'
import FormField from '../../../../lib/FormField.vue'

interface Props {
  field: string
  value?: string
  label?: string
  disabled?: boolean
  message?: string
}

const props = defineProps<Props>()

const { value, message, invalid } = useBalField<string>(props.field, {
  props,
})
</script>

<template>
  <FormField
    :label="label"
    :message="message"
    :invalid="invalid"
    :required="true"
    :disabled="disabled"
  >
    <BalInput v-model="value"></BalInput>
  </FormField>
</template>
