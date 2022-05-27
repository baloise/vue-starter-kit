<script setup lang="ts">
import {
  BalField,
  BalFieldLabel,
  BalFieldControl,
  BalFieldMessage,
} from '@baloise/design-system-components-vue'

interface Props {
  label?: string
  message?: string
  invalid?: boolean
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  message: undefined,
  invalid: false,
  required: true,
  disabled: false,
  readonly: false,
  loading: false,
})
</script>

<template>
  <BalField
    :invalid="props.invalid"
    :readonly="props.readonly"
    :disabled="props.disabled"
    :loading="props.loading"
    :required="props.required"
  >
    <BalFieldLabel v-if="props.label">{{ props.label }}</BalFieldLabel>
    <BalFieldControl>
      <slot></slot>
    </BalFieldControl>
    <BalFieldMessage>{{ props.message }}</BalFieldMessage>
  </BalField>
</template>
