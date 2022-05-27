<script setup lang="ts">
import { BalRadioGroup, BalRadio } from '@baloise/design-system-components-vue'
import { useBalField } from '../../../../lib'
import FormField from '../../../../lib/FormField.vue'

interface Props {
  value?: string
  label?: string
  disabled?: boolean
  message?: string
}

const props = defineProps<Props>()

const { value, message, invalid } = useBalField<string>('gender', {
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
    <BalRadioGroup v-model="value">
      <BalRadio name="gender" value="male">Male</BalRadio>
      <BalRadio name="gender" value="female">Female</BalRadio>
    </BalRadioGroup>
  </FormField>
</template>
