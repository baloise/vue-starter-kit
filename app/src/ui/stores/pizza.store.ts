import { defineStore } from 'pinia'
import { PizzaGetAllUseCase } from '../../services/use-cases/PizzaGetAll.case'
import { Pizza } from '../../domain/entities/Pizza.entity'
import { PizzaApiImpl } from '../../infra/PizzaApiMock'

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

      const api = new PizzaApiImpl()
      const useCase = new PizzaGetAllUseCase(api)
      const result = await useCase.execute()

      this.loading = false
      this.failed = result.isFailure

      if (result.isSuccess) {
        this.items = result.value()
      }
    },
  },
})
