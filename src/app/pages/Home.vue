<template>
  <section id="home-page">
    <BalCard class="has-large-margin-top">
      <BalCardTitle>Vue Starter Kit</BalCardTitle>
      <BalCardSubtitle data-test-id="count-message">
        The button was called {{ count }} times!
      </BalCardSubtitle>
      <BalCardContent>
        Welcome to our Baloise Starter Kit for the Vue Framework.
      </BalCardContent>
      <BalCardActions>
        <BalButton data-test-id="count-button" color="primary" @click="count++">
          Click me
        </BalButton>
      </BalCardActions>
    </BalCard>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import {
  BalButton,
  BalCard,
  BalCardTitle,
  BalCardSubtitle,
  BalCardContent,
  BalCardActions,
} from '@baloise/ui-library-vue-2'

export default defineComponent({
  setup() {
    const count = ref(0)
    return {
      count,
    }
  },
  components: {
    BalButton,
    BalCard,
    BalCardTitle,
    BalCardSubtitle,
    BalCardContent,
    BalCardActions,
  },
})
</script>
