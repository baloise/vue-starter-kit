<script setup lang="ts">
import {
  BalCard,
  BalCardContent,
  BalButton,
} from '@baloise/design-system-components-vue'
import { balCurrency } from '@baloise/web-app-pipes'
import { computed } from 'vue'
import { CartItem } from '@/core/models/CartItem'
import { Pizza } from '@/core/models/Pizza'
import CartList from './CartList.vue'

export interface Props {
  /**
   * List of the current selected cart items.
   */
  items: CartItem[]
  /**
   * Total price of all the selected cart items.
   */
  total: number
  /**
   * Amount of pizzas in the cart.
   */
  amount: number
  /**
   * If `true` the cart items can only be viewed
   * and not changed anymore.
   */
  readonly: boolean
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  total: 0,
  amount: 0,
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
  /**
   * Event to checkout the current cart items and
   * to proceed to finish the order.
   */
  (event: 'checkout'): void
}>()

const isEmpty = computed(() => props.items.length === 0)
</script>

<template>
  <BalCard>
    <BalCardContent>
      <h2 class="title is-size-3 mt-0 mb-6">
        {{ $t('cart.title') }}
      </h2>
      <CartList
        :items="props.items"
        :readonly="props.readonly"
        @add-pizza="($event) => emit('addPizza', $event)"
        @remove-pizza="($event) => emit('removePizza', $event)"
      ></CartList>
      <p v-if="isEmpty">
        {{ $t('cart.emptyMessage') }}
      </p>
      <hr class="lined my-4" v-if="!isEmpty" />
      <div class="is-flex my-4" v-if="!isEmpty">
        <p class="is-flex-grow-1 is-bold is-lead">
          {{ $t('cart.total') }}
        </p>
        <p class="has-text-right is-bold is-lead" data-testid="cart-total">
          {{ balCurrency(props.total) }}
        </p>
      </div>
      <BalButton
        class="mt-6 mb-4"
        data-testid="cart-checkout"
        v-if="!props.readonly"
        expanded
        :disabled="isEmpty"
        @click="emit('checkout')"
      >
        {{ $t('cart.checkout') }}
      </BalButton>
    </BalCardContent>
  </BalCard>
</template>
