<script setup lang="ts">
import { onMounted } from 'vue'
import { useShoppingCartStore } from '../stores/cart.store'
import { usePizzaStore } from '../stores/pizza.store'
import PizzaList from './PizzaList.vue'

const pizzaStore = usePizzaStore()
const cartStore = useShoppingCartStore()

onMounted(() => {
  pizzaStore.load()
})
</script>

<template>
  <PizzaList
    :pizzas="pizzaStore.list"
    :loading="pizzaStore.loading"
    :failed="pizzaStore.failed"
    @add-pizza="($event) => cartStore.addPizza($event)"
  ></PizzaList>
</template>
