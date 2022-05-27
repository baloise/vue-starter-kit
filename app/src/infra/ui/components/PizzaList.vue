<script setup lang="ts">
import { BalSpinner } from '@baloise/design-system-components-vue'
import { Pizza } from '../../../domain/Pizza'
import PizzaCard from './PizzaCard.vue'

interface Props {
  pizzas: Pizza[]
  loading: boolean
  failed: boolean
}

const props = withDefaults(defineProps<Props>(), {
  pizzas: () => [] as Pizza[],
  loading: false,
  failed: false,
})

const emit = defineEmits<{
  (event: 'addPizza', value: Pizza): void
}>()
</script>

<template>
  <div
    v-if="loading"
    class="is-flex is-justify-content-center is-flex-direction-column mt-8"
  >
    <BalSpinner></BalSpinner>
    <p class="is-lead has-text-centered has-text-hint py-4">
      Content gets loaded. Please wait...
    </p>
  </div>
  <div v-else>
    <PizzaCard
      v-for="pizza in props.pizzas"
      :key="pizza.name"
      :pizza="pizza"
      @add-pizza="($event) => emit('addPizza', $event)"
    ></PizzaCard>
  </div>
</template>
