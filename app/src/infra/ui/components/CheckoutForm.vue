<script setup lang="ts">
import {
  BalCard,
  BalCardTitle,
  BalCardContent,
  BalButton,
  BalButtonGroup,
} from '@baloise/design-system-components-vue'
import { useForm } from 'vee-validate'
import { computed, ref } from 'vue'
import { Order } from '../../../domain/Order'
import { Contact } from '../../../domain/Contact'
import { useContactSchema } from '../../../services/schemas/contact.schema'
import CheckoutFormContact from './CheckoutFormContact.vue'

interface Props {
  order: Order
}

defineProps<Props>()

// const emit = defineEmits<{
//   (event: 'submit', value: Order): void
// }>()

const firstNameDisabled = ref(false)

const disableFirstName = () => {
  firstNameDisabled.value = !firstNameDisabled.value
}

const validationSchema = computed(() =>
  useContactSchema(firstNameDisabled.value),
)

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: Contact.create() as any,
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
        <div class="mb-6">
          <CheckoutFormContact
            :disabled="firstNameDisabled"
          ></CheckoutFormContact>
        </div>
        <BalButtonGroup>
          <BalButton type="submit" :disabled="isSubmitting">Submit</BalButton>
          <BalButton color="info" outlined @click="disableFirstName()">
            Disable FirstName
          </BalButton>
        </BalButtonGroup>
      </form>
    </BalCardContent>
  </BalCard>
</template>
