<script setup lang="ts">
import GenderField from './form/GenderField.vue'
import NewsletterField from './form/NewsletterField.vue'
import TextField from './form/TextField.vue'

interface Props {
  disabled: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <GenderField :label="'Gender'"></GenderField>
  <TextField
    :field="'firstName'"
    :label="'FirstName'"
    :disabled="props.disabled"
  ></TextField>
  <TextField :field="'lastName'" :label="'LastName'"></TextField>
  <NewsletterField :label="'Newsletter'"></NewsletterField>
  <TextField :field="'email'" :label="'Email'"></TextField>
</template>
