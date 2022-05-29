<script setup lang="ts">
import GenderField from './form/GenderField.vue'
import NewsletterField from './form/NewsletterField.vue'
import TextField from './form/TextField.vue'

interface Props {
  disabled: false
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <GenderField
      :label="'Gender'"
      :field="'contact.gender'"
      :disabled="disabled"
    ></GenderField>
    <div class="columns">
      <TextField
        class="column pb-0"
        :field="'contact.firstName'"
        :label="'FirstName'"
        :disabled="disabled"
      ></TextField>
      <TextField
        class="column pb-0"
        :field="'contact.lastName'"
        :label="'LastName'"
        :disabled="disabled"
      ></TextField>
    </div>
    <NewsletterField
      :label="'Newsletter'"
      :disabled="disabled"
    ></NewsletterField>
    <TextField
      :field="'contact.email'"
      :label="'Email'"
      :disabled="disabled"
    ></TextField>
  </div>
</template>
