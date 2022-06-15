import { defaultCounter } from './../../core/models/Counter'
import { defineStore } from 'pinia'
import { useCounterIncreaseUseCase } from './factories/useCounterIncreaseUseCase'
import { useCounterDecreaseUseCase } from './factories/useCounterDecreaseUseCase'

export const useCounterStore = defineStore('counter', {
  state: () => defaultCounter,
  actions: {
    async increase() {
      const useCase = useCounterIncreaseUseCase()
      const result = await useCase.execute({ counter: this.$state })

      if (result.isSuccess) {
        this.$patch(result.value())
      }
    },
    async decrease() {
      const useCase = useCounterDecreaseUseCase()
      const result = await useCase.execute({ counter: this.$state })

      if (result.isSuccess) {
        this.$patch(result.value())
      }
    },
  },
})
