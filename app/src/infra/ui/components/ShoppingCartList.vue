<script setup lang="ts">
import {
  BalCard,
  BalCardContent,
  BalButton,
} from '@baloise/design-system-components-vue'
import { Pizza } from '../../../domain/Pizza'
import { ShoppingCartItem } from '../../../domain/ShoppingCartItem'
import ShoppingCartListItem from './ShoppingCartListItem.vue'

interface Props {
  /**
   * Counter value to show in the heading
   */
  list: ShoppingCartItem[]
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [] as ShoppingCartItem[],
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
      @add-pizza="($event) => emit('addPizza', $event)"
      @remove-pizza="($event) => emit('removePizza', $event)"
    ></ShoppingCartListItem>
  </div>
</template>
