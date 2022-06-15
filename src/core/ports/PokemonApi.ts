import { Result } from '@baloise/web-app-clean-architecture'

export interface PokemonDto {
  frontImage: string
  backImage: string
}

export interface PokemonApi {
  search(name: string): Promise<Result<PokemonDto>>
}
