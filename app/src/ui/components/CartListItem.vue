<script setup lang="ts">
import { BalInputStepper } from '@baloise/design-system-components-vue'
import { balCurrency } from '@baloise/web-app-pipes'
import { computed } from 'vue'
import { CartItem } from '../../domain/entities/CartItem.entity'
import { Pizza } from '../../domain/entities/Pizza.entity'
import { CartItemModel } from '../../domain/models/CartItem.model'

interface Props {
  /**
   * Counter value to show in the heading
   */
  item?: CartItem
  readonly: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'addPizza', value: Pizza): void
  (event: 'removePizza', value: Pizza): void
}>()

const valueChange = (value: number | undefined) => {
  const pizza = props.item?.pizza
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

const price = computed(() => CartItemModel.create(props.item).sum())
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
      v-if="!props.readonly"
      class="is-flex-grow-1"
      :min="0"
      :max="10"
      :value="props.item.amount"
      @bal-input="valueChange($event as any)"
    ></BalInputStepper>
    <p
      v-if="props.readonly"
      class="is-flex-grow-1 has-text-info has-text-rights"
    >
      x{{ props.item.amount }}
    </p>
    <h5 class="title is-size-5 m-0 has-text-right" style="width: 120px">
      {{ balCurrency(price) }}
    </h5>
  </div>
</template>
