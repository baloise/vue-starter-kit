<script setup lang="ts">
import { useShoppingCartStore } from '../stores/cart.store'
import { useOrderStore } from '../stores/order.store'
import ShoppingCartCard from './ShoppingCartCard.vue'

const cartStore = useShoppingCartStore()
const orderStore = useOrderStore()

interface Props {
  readonly: boolean
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false,
})
</script>

<template>
  <div>
    <ShoppingCartCard
      :list="cartStore.list"
      :total="cartStore.total"
      :amount="cartStore.amount"
      :readonly="props.readonly"
      @checkout="() => orderStore.checkout(cartStore.list)"
      @add-pizza="($event) => cartStore.addPizza($event)"
      @remove-pizza="($event) => cartStore.removePizza($event)"
    ></ShoppingCartCard>
  </div>
</template>
