<script setup lang="ts">
import { useCartStore } from '../stores/cart.store'
import { useOrderStore } from '../stores/order.store'
import CartCard from './CartCard.vue'

const cartStore = useCartStore()
const orderStore = useOrderStore()

interface Props {
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false,
})
</script>

<template>
  <div>
    <CartCard
      :items="cartStore.items"
      :total="cartStore.total"
      :amount="cartStore.amount"
      :readonly="props.readonly"
      @checkout="() => orderStore.checkout(cartStore.items)"
      @add-pizza="($event) => cartStore.addPizza($event)"
      @remove-pizza="($event) => cartStore.removePizza($event)"
    ></CartCard>
  </div>
</template>
