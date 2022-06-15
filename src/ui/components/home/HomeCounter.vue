<script setup lang="ts">
import {
  BalHeading,
  BalButtonGroup,
  BalButton,
} from '@baloise/design-system-components-vue'

export interface Props {
  count?: number
}

const props = defineProps<Props>()

interface Emits {
  (event: 'increase'): void
  (event: 'decrease'): void
}

const emit = defineEmits<Emits>()
</script>

<template>
  <BalHeading
    data-testid="counter"
    subtile
    level="h5"
    color="danger"
    space="bottom"
  >
    The count is at {{ props.count }}!
  </BalHeading>
  <BalButtonGroup>
    <BalButton
      color="success"
      icon="plus"
      data-testid="button"
      @click="emit('increase')"
    >
      increase
    </BalButton>
    <BalButton color="danger" icon="minus" @click="emit('decrease')">
      decrease
    </BalButton>
  </BalButtonGroup>
</template>
