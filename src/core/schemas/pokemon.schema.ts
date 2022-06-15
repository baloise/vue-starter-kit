import { Pokemon } from './../models/Pokemon'
import { object, string, SchemaOf } from 'yup'

export function usePokemonSchema(): SchemaOf<Pokemon> {
  return object({
    name: string().defined().required(),
    frontImage: string(),
    backImage: string(),
  })
}
