<script setup lang="ts">
import {
  BalRadioGroup,
  BalRadio,
  BalField,
  BalFieldLabel,
  BalFieldControl,
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
      <BalRadioGroup v-model="value">
        <BalRadio name="gender" value="male">
          {{ $t('contact.gender.value.male') }}
        </BalRadio>
        <BalRadio name="gender" value="female">
          {{ $t('contact.gender.value.female') }}
        </BalRadio>
      </BalRadioGroup>
    </BalFieldControl>
    <BalFieldMessage>
      {{ message }}
    </BalFieldMessage>
  </BalField>
</template>
