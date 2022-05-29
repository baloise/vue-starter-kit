<script setup lang="ts">
import GenderField from './form/GenderField.vue'
import NewsletterField from './form/NewsletterField.vue'
import TextField from './form/TextField.vue'
</script>

<template>
  <div>
    <GenderField :label="'Gender'" :field="'contact.gender'"></GenderField>
    <div class="columns">
      <TextField
        class="column pb-0"
        :field="'contact.firstName'"
        :label="'FirstName'"
      ></TextField>
      <TextField
        class="column pb-0"
        :field="'contact.lastName'"
        :label="'LastName'"
      ></TextField>
    </div>
    <NewsletterField :label="'Newsletter'"></NewsletterField>
    <TextField :field="'contact.email'" :label="'Email'"></TextField>
  </div>
</template>
