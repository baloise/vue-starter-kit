<script setup lang="ts">
import { onMounted } from 'vue'
import { useCartStore } from '@/ui/stores/cart.store'
import { usePizzaStore } from '@/ui/stores/pizza.store'
import PizzaList from './PizzaList.vue'

const pizzaStore = usePizzaStore()
const cartStore = useCartStore()

onMounted(() => pizzaStore.load())
</script>

<template>
  <PizzaList
    :pizzas="pizzaStore.items"
    :loading="pizzaStore.loading"
    @add-pizza="cartStore.addPizza"
  />
</template>
