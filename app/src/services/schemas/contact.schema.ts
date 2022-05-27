import { Contact } from './../../domain/Contact'
import { object, string, mixed, SchemaOf, boolean } from 'yup'

export function useContactSchema(disabled = false): SchemaOf<Contact> {
  return object({
    firstName: string().when([], {
      is: () => disabled,
      then: (schema) => schema.optional(),
      otherwise: (schema) => schema.defined().required(),
    }),
    lastName: string().defined().required(),
    gender: mixed().oneOf(['male', 'female']).defined().required(),
    wantsNewsletter: boolean().required(),
    email: string()
      .email()
      .when('wantsNewsletter', {
        is: true,
        then: (schema) => schema.required(),
        otherwise: (schema) => schema,
      }),
  })
}
