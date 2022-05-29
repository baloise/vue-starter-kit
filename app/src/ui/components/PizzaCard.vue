<script setup lang="ts">
import {
  BalCard,
  BalCardContent,
  BalButton,
} from '@baloise/design-system-components-vue'
import { balCurrency } from '@baloise/web-app-pipes'
import { Pizza } from '../../domain/entities/Pizza.entity'

interface Props {
  /**
   * Counter value to show in the heading
   */
  pizza?: Pizza
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'addPizza', value: Pizza): void
}>()
</script>

<template>
  <BalCard v-if="props.pizza" class="mb-4">
    <BalCardContent>
      <div class="is-flex">
        <div>
          <img src="../assets/pizza.png" alt="pizza" width="120" height="120" />
        </div>
        <div class="is-flex is-flex-direction-column pl-4 is-flex-grow-1">
          <h3 class="title is-size-4 m-0 is-flex">
            <span class="is-flex-grow-1">
              {{ props.pizza.name }}
            </span>
            <span>
              {{ balCurrency(props.pizza.price) }}
            </span>
          </h3>
          <p class="has-text-hint is-small my-3">
            {{ props.pizza.description }}
          </p>
          <BalButton
            color="info"
            outlined
            icon="plus"
            @click="() => emit('addPizza', props.pizza as Pizza)"
          >
            Add
          </BalButton>
        </div>
      </div>
    </BalCardContent>
  </BalCard>
</template>
