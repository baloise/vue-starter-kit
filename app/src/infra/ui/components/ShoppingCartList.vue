<script setup lang="ts">
import { Pizza } from '../../../domain/Pizza'
import { ShoppingCartItem } from '../../../domain/ShoppingCartItem'
import ShoppingCartListItem from './ShoppingCartListItem.vue'

interface Props {
  /**
   * Counter value to show in the heading
   */
  list: ShoppingCartItem[]
  readonly: boolean
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [] as ShoppingCartItem[],
  readonly: false,
})

const emit = defineEmits<{
  (event: 'addPizza', value: Pizza): void
  (event: 'removePizza', value: Pizza): void
}>()
</script>

<template>
  <div>
    <ShoppingCartListItem
      v-for="item in props.list"
      :key="item.product.name"
      :item="item"
      :readonly="readonly"
      @add-pizza="($event) => emit('addPizza', $event)"
      @remove-pizza="($event) => emit('removePizza', $event)"
    ></ShoppingCartListItem>
  </div>
</template>
