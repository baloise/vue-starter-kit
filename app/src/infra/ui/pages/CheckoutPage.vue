<script setup lang="ts">
import ShoppingCartContainer from '../components/ShoppingCartContainer.vue'
import CheckoutContainer from '../components/CheckoutContainer.vue'
</script>

<template>
  <div class="columns my-4">
    <div class="column is-8">
      <CheckoutContainer></CheckoutContainer>
    </div>
    <div class="column is-4">
      <ShoppingCartContainer readonly></ShoppingCartContainer>
    </div>
  </div>
</template>
