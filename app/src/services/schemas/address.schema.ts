import { object, string, SchemaOf } from 'yup'
import { Address } from '../../domain/Address'

export function useAddressSchema(): SchemaOf<Address> {
  return object({
    postalCode: string().defined().length(4),
    city: string().defined(),
    street: string().defined(),
    streetNumber: string().defined(),
  })
}
