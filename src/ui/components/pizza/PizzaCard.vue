<script setup lang="ts">
import {
  BalCard,
  BalCardContent,
  BalButton,
} from '@baloise/design-system-components-vue'
import { balCurrency } from '@baloise/web-app-pipes'
import { Pizza } from '@/core/models/Pizza'

export interface Props {
  /**
   * Pizza domain object to display the pizza.
   */
  pizza?: Pizza
}

defineProps<Props>()

interface Emits {
  /**
   * Event to add a pizza to the cart list.
   */
  (event: 'addPizza', value: Pizza): void
}

const emit = defineEmits<Emits>()
</script>

<template>
  <BalCard v-if="pizza" class="mb-4">
    <BalCardContent>
      <div class="is-flex">
        <img
          src="../../assets/pizza.png"
          alt="pizza"
          width="120"
          height="120"
        />
        <div class="is-flex is-flex-direction-column pl-4 is-flex-grow-1">
          <h3 class="title is-size-4 m-0 is-flex">
            <span class="is-flex-grow-1">
              {{ pizza.name }}
            </span>
            <span>
              {{ balCurrency(pizza.price) }}
            </span>
          </h3>
          <p class="has-text-hint is-small my-3">
            {{ pizza.description }}
          </p>
          <BalButton
            :data-testid="`pizza-card__add-${pizza.name.toLowerCase()}`"
            color="info"
            outlined
            icon="plus"
            @click="() => emit('addPizza', pizza as Pizza)"
          >
            {{ $t('common.add') }}
          </BalButton>
        </div>
      </div>
    </BalCardContent>
  </BalCard>
</template>
