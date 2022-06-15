import { produce, Immutable } from 'immer'

export type Pokemon = Immutable<{
  name: string
  frontImage?: string
  backImage?: string
}>

export const defaultPokemon: Pokemon = {
  name: 'Squirtle', // Ditto
  frontImage: undefined,
  backImage: undefined,
}

export function createPokemon(pokemon?: Partial<Pokemon>): Pokemon {
  return produce(defaultPokemon, (draft) => ({ ...draft, ...pokemon }))
}
