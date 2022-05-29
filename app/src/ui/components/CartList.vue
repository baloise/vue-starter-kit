<script setup lang="ts">
import { CartItem } from '../../domain/entities/CartItem.entity'
import { Pizza } from '../../domain/entities/Pizza.entity'
import CartListItem from './CartListItem.vue'

interface Props {
  items: CartItem[]
  readonly: boolean
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [] as CartItem[],
  readonly: false,
})

const emit = defineEmits<{
  (event: 'addPizza', value: Pizza): void
  (event: 'removePizza', value: Pizza): void
}>()
</script>

<template>
  <div>
    <CartListItem
      v-for="item in props.items"
      :key="item.pizza.name"
      :item="item"
      :readonly="readonly"
      @add-pizza="($event) => emit('addPizza', $event)"
      @remove-pizza="($event) => emit('removePizza', $event)"
    ></CartListItem>
  </div>
</template>
