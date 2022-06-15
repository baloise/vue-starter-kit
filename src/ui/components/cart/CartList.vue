<script setup lang="ts">
import { computed } from 'vue'
import { CartItem } from '@/core/models/CartItem'
import { Pizza } from '@/core/models/Pizza'
import CartListItem from './CartListItem.vue'

export interface Props {
  /**
   * List of the current selected cart items.
   */
  items: CartItem[]
  /**
   * If `true` the cart items can only be viewed
   * and not changed anymore.
   */
  readonly: boolean
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [] as CartItem[],
  readonly: false,
})

const emit = defineEmits<{
  /**
   * Event to add a pizza to the cart list.
   */
  (event: 'addPizza', value: Pizza): void
  /**
   * Event to remove a pizza to the cart list.
   */
  (event: 'removePizza', value: Pizza): void
}>()

const filteredItems = computed(() =>
  props.items.filter((item) => item.amount > 0),
)
</script>

<template>
  <div>
    <CartListItem
      v-for="item in filteredItems"
      :key="item.pizza.name"
      :item="item"
      :readonly="readonly"
      @add-pizza="($event) => emit('addPizza', $event)"
      @remove-pizza="($event) => emit('removePizza', $event)"
    />
  </div>
</template>
