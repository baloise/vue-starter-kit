<template>
  <h1>Home</h1>
  <p>{{ count }}</p>
  <BalButton data-test-id="button-count" color="primary" @click="count++">
    Increase
  </BalButton>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    return {
      count,
    }
  },
})
</script>
