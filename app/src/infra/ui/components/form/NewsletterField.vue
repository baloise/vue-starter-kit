<script setup lang="ts">
import { BalCheckbox } from '@baloise/design-system-components-vue'
import { useBalField } from '../../../../lib'
import FormField from '../../../../lib/FormField.vue'

interface Props {
  value?: boolean
  label?: string
  disabled?: boolean
  message?: string
}

const props = defineProps<Props>()

const { value, message, invalid } = useBalField<string>('wantsNewsletter', {
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
    <BalCheckbox interface="switch" v-model="value">
      I want to receive a newsletter
    </BalCheckbox>
  </FormField>
</template>
