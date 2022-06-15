<script setup lang="ts">
import { useCartStore } from '@/ui/stores/cart.store'
import { useOrderStore } from '@/ui/stores/order.store'
import CartCard from './CartCard.vue'

const cartStore = useCartStore()
const orderStore = useOrderStore()

interface Props {
  /**
   * If `true` the cart items can only be viewed
   * and not changed anymore.
   */
  readonly?: boolean
}

withDefaults(defineProps<Props>(), {
  readonly: false,
})
</script>

<template>
  <div>
    <CartCard
      :items="cartStore.items"
      :total="cartStore.total"
      :amount="cartStore.amount"
      :readonly="readonly"
      @checkout="() => orderStore.checkout(cartStore.items)"
      @add-pizza="($event) => cartStore.addPizza($event)"
      @remove-pizza="($event) => cartStore.removePizza($event)"
    />
  </div>
</template>
