<script setup lang="ts">
import { BalInputStepper } from '@baloise/design-system-components-vue'
import { balCurrency } from '@baloise/web-app-pipes'
import { Pizza } from '../../../domain/Pizza'
import { ShoppingCartItem } from '../../../domain/ShoppingCartItem'

interface Props {
  /**
   * Counter value to show in the heading
   */
  item?: ShoppingCartItem
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'addPizza', value: Pizza): void
  (event: 'removePizza', value: Pizza): void
}>()

const valueChange = (value: number | undefined) => {
  const pizza = props.item?.product
  const amount = props.item?.amount

  if (pizza && value !== undefined && amount !== undefined) {
    if (value > amount) {
      emit('addPizza', pizza)
    }
    if (value < amount) {
      emit('removePizza', pizza)
    }
  }
}
</script>

<template>
  <div
    class="is-flex is-justify-content-center is-align-items-center"
    v-if="props.item"
  >
    <h5 class="title is-size-5 m-0" style="width: 120px">
      {{ props.item.product.name }}
    </h5>
    <BalInputStepper
      class="is-flex-grow-1"
      :min="0"
      :max="10"
      :value="props.item.amount"
      @bal-input="valueChange($event as any)"
    ></BalInputStepper>
    <h5 class="title is-size-5 m-0 has-text-right" style="width: 120px">
      {{ balCurrency(props.item.sum()) }}
    </h5>
  </div>
</template>
