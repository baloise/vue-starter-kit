import { object, string, SchemaOf } from 'yup'
import { Address } from '../../domain/entities/Address.entity'

export function useAddressSchema(): SchemaOf<Address> {
  return object({
    postalCode: string().defined().required().length(4),
    city: string().defined().required(),
    street: string().defined().required(),
    streetNumber: string().defined().required(),
  })
}
