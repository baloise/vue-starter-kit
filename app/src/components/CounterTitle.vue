<script setup lang="ts">
import { BalHeading } from '@baloise/design-system-components-vue'

export interface CounterTitleProps {
  /**
   * Counter value to show in the heading
   */
  counter: number
}

const props = withDefaults(defineProps<CounterTitleProps>(), {
  counter: 0,
})
</script>

<template>
  <BalHeading
    data-testid="counter"
    subtile
    level="h5"
    color="danger"
    space="bottom"
  >
    The count is at {{ props.counter }}!
  </BalHeading>
</template>
