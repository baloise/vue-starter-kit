<script setup lang="ts">
import {
  BalCard,
  BalCardTitle,
  BalCardContent,
  BalButton,
  BalButtonGroup,
} from '@baloise/design-system-components-vue'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { Order } from '../../domain/entities/Order.entity'
import { useOrderSchema } from '../../services/schemas/order.schema'
import CheckoutFormContact from './CheckoutFormContact.vue'
import CheckoutFormAddress from './CheckoutFormAddress.vue'
import { OrderModel } from '../../domain/models/Order.model'

interface Props {
  order: Order
  loading: boolean
}

interface Emits {
  (event: 'submit', value: Order): void
}

const props = withDefaults(defineProps<Props>(), {
  order: () => OrderModel.defaults(),
  loading: false,
})

const emit = defineEmits<Emits>()

const { handleSubmit, isSubmitting } = useForm<Order>({
  validationSchema: computed(() => useOrderSchema()),
  initialValues: props.order,
})

const onSubmit = handleSubmit((values) => emit('submit', values))
</script>

<template>
  <BalCard>
    <BalCardTitle>Checkout</BalCardTitle>
    <BalCardContent>
      <form @submit="onSubmit">
        <CheckoutFormContact
          :disabled="isSubmitting || loading"
          class="mb-6"
        ></CheckoutFormContact>
        <CheckoutFormAddress
          :disabled="isSubmitting || loading"
          class="mb-6"
        ></CheckoutFormAddress>
        <BalButtonGroup>
          <BalButton
            type="submit"
            :disabled="isSubmitting"
            :loading="isSubmitting || loading"
            >Submit</BalButton
          >
        </BalButtonGroup>
      </form>
    </BalCardContent>
  </BalCard>
</template>
