<script setup lang="ts">
import PizzaContainer from '../components/PizzaContainer.vue'
import ShoppingCartContainer from '../components/ShoppingCartContainer.vue'
</script>

<template>
  <div class="columns my-4">
    <div class="column is-8">
      <PizzaContainer></PizzaContainer>
    </div>
    <div class="column is-4">
      <ShoppingCartContainer></ShoppingCartContainer>
    </div>
  </div>
</template>
