<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ count }}</p>
    <BalButton data-test-id="button-count" color="primary" @click="count++">
      Increase
    </BalButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { BalButton } from '@baloise/ui-library-vue-2'

export default defineComponent({
  setup() {
    const count = ref(0)
    return {
      count,
    }
  },
  components: {
    BalButton,
  },
})
</script>
