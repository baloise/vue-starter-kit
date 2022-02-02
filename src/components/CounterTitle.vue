<script setup lang="ts">
import { BalHeading } from '@baloise/design-system-components-vue'
import { useCounterStore } from '@/stores/counter.store'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { counter } = storeToRefs(store)
</script>

<template>
  <BalHeading
    data-testid="counter"
    subtile
    level="h5"
    color="danger"
    space="bottom"
  >
    The count is at {{ counter }}!
  </BalHeading>
</template>
