<script setup lang="ts">
import { BalFormGrid, BalFormCol } from '@baloise/design-system-components-vue'
import GenderField from '../form/GenderField.vue'
import TextField from '../form/TextField.vue'

interface Props {
  /**
   * If `true` all the form controls of this form section
   * will be disabled.
   */
  disabled: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})
</script>

<template>
  <BalFormGrid>
    <BalFormCol>
      <GenderField
        :label="$t('contact.gender.label')"
        :field="'contact.gender'"
        :disabled="disabled"
      />
    </BalFormCol>
    <BalFormCol size="half">
      <TextField
        :field="'contact.firstName'"
        :label="$t('contact.firstName.label')"
        :disabled="disabled"
      />
    </BalFormCol>
    <BalFormCol size="half">
      <TextField
        :field="'contact.lastName'"
        :label="$t('contact.lastName.label')"
        :disabled="disabled"
      />
    </BalFormCol>
    <BalFormCol>
      <TextField
        :field="'contact.email'"
        :label="$t('contact.email.label')"
        :disabled="disabled"
      />
    </BalFormCol>
  </BalFormGrid>
</template>
