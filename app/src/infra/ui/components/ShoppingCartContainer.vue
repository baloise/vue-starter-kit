<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useShoppingCartStore } from '../stores/cart.store'
import { useOrderStore } from '../stores/order.store'
import ShoppingCartCard from './ShoppingCartCard.vue'

const cartStore = useShoppingCartStore()
const orderStore = useOrderStore()
</script>

<template>
  <div>
    <ShoppingCartCard
      :list="cartStore.list"
      :total="cartStore.total"
      :amount="cartStore.amount"
      @checkout="() => orderStore.checkout(cartStore.list)"
      @add-pizza="($event) => cartStore.addPizza($event)"
      @remove-pizza="($event) => cartStore.removePizza($event)"
    ></ShoppingCartCard>
  </div>
</template>
