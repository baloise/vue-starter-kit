import { Pokemon } from './../models/Pokemon'
import { Result, UseCase } from '@baloise/web-app-clean-architecture'
import { PokemonApi } from '../ports/PokemonApi'
import { createPokemon } from '../models/Pokemon'

interface Context {
  name: string
}

export class PokemonSearchUseCase implements UseCase<Context, Pokemon> {
  constructor(private api: PokemonApi) {}

  async execute({ name }: Context): Promise<Result<Pokemon, string>> {
    const result = await this.api.search(name)

    if (result.isFailure) {
      return Result.fail('Could not find any pokemon with that name')
    }

    return Result.ok(
      createPokemon({
        name,
        ...result.value(),
      }),
    )
  }
}
