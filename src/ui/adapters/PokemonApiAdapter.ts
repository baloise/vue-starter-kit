import { PokemonApi, PokemonDto } from './../../core/ports/PokemonApi'
import { Result } from '@baloise/web-app-clean-architecture'

export class PokemonApiAdapter implements PokemonApi {
  async search(name: string): Promise<Result<PokemonDto, string>> {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
    )

    if (!response.ok) {
      return Result.fail('Could not find pokemon')
    }

    const json = await response.json()
    return Result.ok({
      frontImage: json.sprites.front_default,
      backImage: json.sprites.back_default,
    })
  }
}
