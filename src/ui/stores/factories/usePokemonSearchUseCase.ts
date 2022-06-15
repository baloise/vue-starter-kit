import { PokemonApiAdapter } from './../../adapters/PokemonApiAdapter'
import { PokemonSearchUseCase } from '@/core/use-cases/PokemonSearch.case'

export function usePokemonSearchUseCase(): PokemonSearchUseCase {
  const api = new PokemonApiAdapter()

  return new PokemonSearchUseCase(api)
}
