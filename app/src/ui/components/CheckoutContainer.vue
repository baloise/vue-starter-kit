<script setup lang="ts">
import { useCartStore } from '../stores/cart.store'
import { useOrderStore } from '../stores/order.store'
import CheckoutForm from './CheckoutForm.vue'

const orderStore = useOrderStore()
const cartStore = useCartStore()
</script>

<template>
  <div>
    <CheckoutForm
      :order="orderStore.order"
      :loading="orderStore.loading"
      @submit="(order) => orderStore.submit(order, cartStore.items)"
    ></CheckoutForm>
  </div>
</template>
