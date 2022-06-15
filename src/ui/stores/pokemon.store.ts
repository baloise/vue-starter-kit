import { defaultPokemon, Pokemon } from './../../core/models/Pokemon'
import { defineStore } from 'pinia'
import { usePokemonSearchUseCase } from './factories/usePokemonSearchUseCase'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemon: defaultPokemon as Pokemon,
    isFinished: false,
    isLoading: false,
    isFailure: false,
  }),
  actions: {
    async search(name: string) {
      this.isLoading = true
      this.isFailure = false

      const useCase = usePokemonSearchUseCase()
      const result = await useCase.execute({ name })

      this.isFailure = result.isFailure
      this.isLoading = false

      if (result.isSuccess) {
        this.pokemon = result.value()
        this.isFinished = true
      }
    },
  },
})
