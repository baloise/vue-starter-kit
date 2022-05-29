<script setup lang="ts">
import { onMounted } from 'vue'
import { useCartStore } from '../stores/cart.store'
import { usePizzaStore } from '../stores/pizza.store'
import PizzaList from './PizzaList.vue'

const pizzaStore = usePizzaStore()
const cartStore = useCartStore()

onMounted(() => {
  pizzaStore.load()
})
</script>

<template>
  <PizzaList
    :pizzas="pizzaStore.items"
    :loading="pizzaStore.loading"
    :failed="pizzaStore.failed"
    @add-pizza="($event) => cartStore.addPizza($event)"
  ></PizzaList>
</template>
