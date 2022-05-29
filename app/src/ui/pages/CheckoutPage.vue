<script setup lang="ts">
import CartContainer from '../components/CartContainer.vue'
import CheckoutContainer from '../components/CheckoutContainer.vue'
</script>

<template>
  <div class="columns my-4">
    <div class="column is-8">
      <CheckoutContainer></CheckoutContainer>
    </div>
    <div class="column is-4">
      <CartContainer readonly></CartContainer>
    </div>
  </div>
</template>
