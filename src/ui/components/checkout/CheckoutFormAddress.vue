<script setup lang="ts">
import { BalFormGrid, BalFormCol } from '@baloise/design-system-components-vue'
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
    <BalFormCol size="two-thirds">
      <TextField
        :field="'deliveryAddress.street'"
        :label="$t('deliveryAddress.street.label')"
        :disabled="disabled"
      />
    </BalFormCol>
    <BalFormCol size="one-third">
      <TextField
        :field="'deliveryAddress.streetNumber'"
        :label="$t('deliveryAddress.streetNumber.label')"
        :disabled="disabled"
      />
    </BalFormCol>
    <BalFormCol size="one-third">
      <TextField
        :field="'deliveryAddress.postalCode'"
        :label="$t('deliveryAddress.postalCode.label')"
        :disabled="disabled"
      />
    </BalFormCol>
    <BalFormCol size="two-thirds">
      <TextField
        :field="'deliveryAddress.city'"
        :label="$t('deliveryAddress.city.label')"
        :disabled="disabled"
      />
    </BalFormCol>
  </BalFormGrid>
</template>
