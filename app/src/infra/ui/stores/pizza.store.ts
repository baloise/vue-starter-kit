import { Pizza } from './../../../domain/Pizza'
import { getAllPizzasUseCase } from './../../../services/use-cases/pizza.cases'
import { defineStore } from 'pinia'
import { mockAdapter } from '../../api/http/mock.adapter'

export const usePizzaStore = defineStore('pizza', {
  state: () => {
    return {
      list: [] as Pizza[],
      loading: false,
      failed: false,
    }
  },
  actions: {
    load() {
      this.loading = true
      this.failed = false
      getAllPizzasUseCase(
        {
          pizzas: this.list,
          http: mockAdapter,
        },
        {
          onSuccess: ({ pizzas }) => {
            this.list = pizzas
            this.loading = false
            this.failed = false
          },
          onError: (error) => {
            console.error(error)
            this.loading = false
            this.failed = true
          },
        },
      )

      // const result = await getAllPizzasUseCase({
      //   pizzas: this.list,
      //   http: mockAdapter,
      // })

      // if (result.ok) {
      //   this.list = result.data
      //   this.loading = false
      //   this.failed = false
      // } else {
      //   console.error(result.error)
      //   this.loading = false
      //   this.failed = true
      // }
    },
    // increment() {
    //   this.counter++
    // },
  },
})
