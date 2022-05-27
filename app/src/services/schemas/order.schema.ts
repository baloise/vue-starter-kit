import { object, SchemaOf } from 'yup'
import { Order } from '../../domain/Order'
import { useAddressSchema } from './address.schema'
import { useContactSchema } from './contact.schema'

export function useOrderSchema(disabled = false): SchemaOf<Order> {
  return object({
    deliveryAddress: useAddressSchema(),
    contact: useContactSchema(disabled),
  })
}
