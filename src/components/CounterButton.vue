<script setup lang="ts">
import { BalButton } from '@baloise/design-system-components-vue'

interface Props {
  /**
   * Label of the button component
   */
  label: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'increase',
})

const emit = defineEmits<{
  /**
   * Fired when the button was clicked
   */
  (event: 'increment', label: string): void
}>()

const emitIncrement = () => {
  emit('increment', props.label)
}
</script>

<template>
  <BalButton data-testid="button" @click="emitIncrement()">
    {{ props.label }}
  </BalButton>
</template>
