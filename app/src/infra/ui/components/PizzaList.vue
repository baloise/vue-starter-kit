<script setup lang="ts">
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
  <div>
    <PizzaCard
      v-for="pizza in props.pizzas"
      :key="pizza.name"
      :pizza="pizza"
      @add-pizza="($event) => emit('addPizza', $event)"
    ></PizzaCard>
  </div>
</template>
