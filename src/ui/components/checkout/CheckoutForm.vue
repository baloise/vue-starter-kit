createOrder
<script setup lang="ts">
import {
  BalCard,
  BalCardTitle,
  BalCardContent,
  BalButton,
  BalButtonGroup,
} from '@baloise/design-system-components-vue'
import { useForm } from 'vee-validate'
import { computed, shallowRef } from 'vue'
import { createOrder, Order } from '@/core/models/Order'
import { useOrderSchema } from '@/core/schemas/order.schema'
import CheckoutFormContact from './CheckoutFormContact.vue'
import CheckoutFormAddress from './CheckoutFormAddress.vue'

export interface Props {
  /**
   * Domain object for the order. Used to initialize
   * the form value.
   */
  order: Order
  /**
   * If `true` the form is disabled and the button is
   * in a loading state.
   */
  loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
  order: () => createOrder(),
  loading: false,
})

interface Emits {
  /**
   * Event to submit the order to the backend.
   */
  (event: 'submit', value: Order): void
  /**
   * Event to navigate back to the home screen.
   */
  (event: 'back'): void
}

const emit = defineEmits<Emits>()

const initialValues = shallowRef(props.order)

const { handleSubmit, isSubmitting } = useForm<Order>({
  validationSchema: computed(() => useOrderSchema()),
  initialValues,
})

const onSubmit = handleSubmit((values) => emit('submit', values))
</script>

<template>
  <form novalidate @submit="onSubmit">
    <BalCard class="mb-6">
      <BalCardTitle>{{ $t('checkout.title') }}</BalCardTitle>
      <BalCardContent>
        <CheckoutFormContact :disabled="isSubmitting || loading" />
      </BalCardContent>
    </BalCard>
    <BalCard class="mb-6">
      <BalCardTitle>{{ $t('deliveryAddress.title') }}</BalCardTitle>
      <BalCardContent>
        <CheckoutFormAddress :disabled="isSubmitting || loading" />
      </BalCardContent>
    </BalCard>
    <BalButtonGroup>
      <BalButton color="info" outlined @click="() => emit('back')">
        {{ $t('common.back') }}
      </BalButton>
      <BalButton
        data-testid="checkout-submit"
        type="submit"
        :loading="isSubmitting || loading"
        :disabled="isSubmitting || loading"
      >
        {{ $t('common.submit') }}
      </BalButton>
    </BalButtonGroup>
  </form>
</template>
