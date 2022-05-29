<script setup lang="ts">
import TextField from './form/TextField.vue'

interface Props {
  disabled: false
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <h3 class="title is-size-4">Delivery Address</h3>
    <div class="columns is-multiline">
      <TextField
        class="column is-two-thirds py-0"
        :field="'deliveryAddress.street'"
        :label="'Street'"
        :disabled="disabled"
      ></TextField>
      <TextField
        class="column is-one-third py-0"
        :field="'deliveryAddress.streetNumber'"
        :label="'Street Number'"
        :disabled="disabled"
      ></TextField>
      <TextField
        class="column is-one-third py-0"
        :field="'deliveryAddress.postalCode'"
        :label="'Postal Code'"
        :disabled="disabled"
      ></TextField>
      <TextField
        class="column is-two-thirds py-0"
        :field="'deliveryAddress.city'"
        :label="'City'"
        :disabled="disabled"
      ></TextField>
    </div>
  </div>
</template>
