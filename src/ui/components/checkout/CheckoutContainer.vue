<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '@/ui/stores/cart.store'
import { useOrderStore } from '@/ui/stores/order.store'
import CheckoutForm from './CheckoutForm.vue'

const orderStore = useOrderStore()
const cartStore = useCartStore()
const router = useRouter()
</script>

<template>
  <div>
    <CheckoutForm
      :order="orderStore.order"
      :loading="orderStore.loading"
      @back="() => router.push({ name: 'Home' })"
      @submit="(order) => orderStore.submit(order, cartStore.items)"
    />
  </div>
</template>
