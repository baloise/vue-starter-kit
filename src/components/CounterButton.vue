<script setup lang="ts">
import { BalButton, BalCard } from '@baloise/design-system-components-vue'

export interface CounterButtonProps {
  /**
   * Label of the button component
   */
  label: string
}

const props = withDefaults(defineProps<CounterButtonProps>(), {
  label: 'increase',
})

const emit = defineEmits<{
  /**
   * Fired when the button was clicked
   */
  (event: 'increment', value: number): void
}>()

const emitIncrement = () => {
  emit('increment', 42)
}
</script>

<template>
  <BalButton data-testid="button" @click="emitIncrement()">
    {{ props.label }}
  </BalButton>
</template>
