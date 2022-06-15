createCartItem
<script setup lang="ts">
import { BalInputStepper } from '@baloise/design-system-components-vue'
import { balCurrency } from '@baloise/web-app-pipes'
import { computed } from 'vue'
import {
  calculatePrice,
  CartItem,
  createCartItem,
} from '@/core/models/CartItem'
import { Pizza } from '@/core/models/Pizza'

export interface Props {
  /**
   * Cart list item has a pizza and the selected
   * amount of it.
   */
  item?: CartItem
  /**
   * If `true` the cart items can only be viewed
   * and not changed anymore.
   */
  readonly: boolean
}

const props = withDefaults(defineProps<Props>(), {
  item: () => createCartItem(),
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

const price = computed(() => calculatePrice(createCartItem(props.item)))
</script>

<template>
  <div
    class="is-flex is-justify-content-center is-align-items-center mb-2"
    v-if="props.item"
  >
    <h5 class="title is-size-5 m-0" style="width: 120px">
      {{ props.item.pizza.name }}
    </h5>
    <BalInputStepper
      class="is-flex-grow-1"
      v-if="!props.readonly"
      :min="0"
      :max="10"
      :value="props.item.amount"
      @bal-increase="emit('addPizza', props.item?.pizza)"
      @bal-decrease="emit('removePizza', props.item?.pizza)"
    />
    <p
      class="is-flex-grow-1 has-text-info has-text-rights m-0"
      v-if="props.readonly"
    >
      x{{ props.item.amount }}
    </p>
    <h5 class="title is-size-5 m-0 has-text-right" style="width: 120px">
      {{ balCurrency(price) }}
    </h5>
  </div>
</template>
