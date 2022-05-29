import { defineStore } from 'pinia'
import { mockAdapter } from '../../infra/api/mock.adapter'
import { PizzaGetAllUseCase } from '../../services/use-cases/PizzaGetAll.case'
import { Pizza } from '../../domain/entities/Pizza.entity'

export const usePizzaStore = defineStore('pizza', {
  state: () => {
    return {
      items: [] as Pizza[],
      loading: false,
      failed: false,
    }
  },
  actions: {
    async load() {
      this.loading = true
      this.failed = false

      const useCase = new PizzaGetAllUseCase(mockAdapter)
      const result = await useCase.execute()

      this.loading = false
      this.failed = result.isFailure

      if (result.isSuccess) {
        this.items = result.value()
      }
    },
  },
})
