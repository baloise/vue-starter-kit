<script setup lang="ts">
import {
  BalCard,
  BalCardContent,
  BalButton,
} from '@baloise/design-system-components-vue'
import { balCurrency } from '@baloise/web-app-pipes'
import { CartItem } from '../../domain/entities/CartItem.entity'
import { Pizza } from '../../domain/entities/Pizza.entity'
import CartList from './CartList.vue'

interface Props {
  items: CartItem[]
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
      <CartList
        :items="props.items"
        :readonly="props.readonly"
        @add-pizza="($event) => emit('addPizza', $event)"
        @remove-pizza="($event) => emit('removePizza', $event)"
      ></CartList>
      <hr class="lined my-4" />
      <div class="is-flex my-4">
        <p class="is-flex-grow-1 is-bold">Total</p>
        <p class="has-text-right wis-bold">{{ balCurrency(props.total) }}</p>
      </div>
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
