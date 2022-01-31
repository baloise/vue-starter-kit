<script setup lang="ts">
import { BalButton } from '@baloise/design-system-components-vue'

interface Props {
  label: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'increase',
})

const emit = defineEmits<{
  (e: 'increment'): void
}>()
</script>

<template>
  <BalButton data-testid="button" @click="emit('increment')">
    {{ props.label }}
  </BalButton>
</template>
