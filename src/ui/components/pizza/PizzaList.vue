<script setup lang="ts">
import { BalSpinner } from '@baloise/design-system-components-vue'
import { Pizza } from '@/core/models/Pizza'
import PizzaCard from './PizzaCard.vue'

export interface Props {
  /**
   * List of pizzas to display on the home screen.
   */
  pizzas: Pizza[]
  /**
   * If `true` a spinner is shown.
   */
  loading: boolean
}

withDefaults(defineProps<Props>(), {
  pizzas: () => [] as Pizza[],
  loading: false,
})

const emit = defineEmits<{
  /**
   * Event to add a pizza to the cart list.
   */
  (event: 'addPizza', value: Pizza): void
}>()
</script>

<template>
  <div
    v-if="loading"
    class="is-flex is-justify-content-center is-align-items-center is-flex-direction-column mt-8"
  >
    <BalSpinner />
    <p class="is-lead has-text-centered has-text-hint py-4">
      {{ $t('pizza.loading') }}
    </p>
  </div>
  <div v-else>
    <PizzaCard
      v-for="pizza in pizzas"
      :key="pizza.name"
      :pizza="pizza"
      @add-pizza="($event) => emit('addPizza', $event)"
    />
  </div>
</template>
