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

// interface Props {
//   order: Order
// }

// defineProps<Props>()

const validationSchema = computed(() => useOrderSchema())

const { handleSubmit, isSubmitting } = useForm<Order>({
  validationSchema,
  initialValues: OrderModel.defaults(),
})

const onSubmit = handleSubmit(
  (values, { resetForm }) => {
    console.log('valid', values) // send data to API
    // reset the form and the field values to their initial values
    resetForm()
  },
  ({ values, errors, results }) => {
    console.log('invalid') // current form values
    console.log(values) // current form values
    console.log(errors) // current form values
    console.log(results) // current form values
  },
)
</script>

<template>
  <BalCard>
    <BalCardTitle>Checkout</BalCardTitle>
    <BalCardContent>
      <form @submit="onSubmit">
        <CheckoutFormContact class="mb-6"></CheckoutFormContact>
        <CheckoutFormAddress class="mb-6"></CheckoutFormAddress>
        <BalButtonGroup>
          <BalButton type="submit" :disabled="isSubmitting">Submit</BalButton>
        </BalButtonGroup>
      </form>
    </BalCardContent>
  </BalCard>
</template>
