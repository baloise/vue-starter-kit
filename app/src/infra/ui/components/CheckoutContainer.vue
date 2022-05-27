<script setup lang="ts">
import { useOrderStore } from '../stores/order.store'
import CheckoutForm from './CheckoutForm.vue'

const orderStore = useOrderStore()
</script>

<template>
  <div>
    <CheckoutForm
      :order="orderStore.order"
      @submit="() => orderStore.submit()"
    ></CheckoutForm>
  </div>
</template>
