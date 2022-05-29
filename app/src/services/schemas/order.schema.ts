import { object, SchemaOf } from 'yup'
import { Order } from '../../domain/entities/Order.entity'
import { useAddressSchema } from './address.schema'
import { useContactSchema } from './contact.schema'

export function useOrderSchema(): SchemaOf<Order> {
  return object({
    deliveryAddress: useAddressSchema(),
    contact: useContactSchema(),
  })
}
