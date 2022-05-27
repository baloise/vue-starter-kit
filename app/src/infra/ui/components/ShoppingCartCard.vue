<script setup lang="ts">
import {
  BalCard,
  BalCardContent,
  BalButton,
} from '@baloise/design-system-components-vue'
import { Pizza } from '../../../domain/Pizza'
import { ShoppingCartItem } from '../../../domain/ShoppingCartItem'
import ShoppingCartList from './ShoppingCartList.vue'

interface Props {
  list: ShoppingCartItem[]
  total: number
  amount: number
  readonly: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'addPizza', value: Pizza): void
  (event: 'removePizza', value: Pizza): void
  (event: 'checkout'): void
}>()
</script>

<template>
  <BalCard>
    <BalCardContent>
      <h2 class="title is-size-3 mt-0 mb-6">Shopping Cart</h2>
      <ShoppingCartList
        :list="props.list"
        :readonly="props.readonly"
        @add-pizza="($event) => emit('addPizza', $event)"
        @remove-pizza="($event) => emit('removePizza', $event)"
      ></ShoppingCartList>
      <hr class="lined my-4" />
      <p class="my-4">Total: {{ props.total }}</p>
      <BalButton
        v-if="!props.readonly"
        :disabled="props.amount <= 0"
        expanded
        class="mt-6 mb-4"
        @click="emit('checkout')"
      >
        Checkout
      </BalButton>
    </BalCardContent>
  </BalCard>
</template>
