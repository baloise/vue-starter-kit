import { CartRemovePizzaUseCase } from '../../services/use-cases/CartRemovePizza.case'
import { CartAddPizzaUseCase } from '../../services/use-cases/CartAddPizza.case'
import { CartItem } from '../../domain/entities/CartItem.entity'
import { defineStore } from 'pinia'
import { Pizza } from '../../domain/entities/Pizza.entity'
import { CartResetUseCase } from '../../services/use-cases/CartReset.case'
import { useStorage } from '@vueuse/core'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      items: useStorage<CartItem[]>('cart-items', []),
      amount: 0,
      total: 0,
      loading: false,
      failed: false,
    }
  },
  actions: {
    async addPizza(pizza: Pizza) {
      const useCase = new CartAddPizzaUseCase()
      const result = await useCase.execute({ pizza, items: this.items })

      if (result.isSuccess) {
        const { items, total, amount } = result.value()
        this.items = items
        this.total = total
        this.amount = amount
      }
    },
    async removePizza(pizza: Pizza) {
      const useCase = new CartRemovePizzaUseCase()
      const result = await useCase.execute({ pizza, items: this.items })

      if (result.isSuccess) {
        const { items, total, amount } = result.value()
        this.items = items
        this.total = total
        this.amount = amount
      }
    },
    async reset() {
      const useCase = new CartResetUseCase()
      const result = await useCase.execute()

      if (result.isSuccess) {
        const { items, total, amount } = result.value()
        this.items = items
        this.total = total
        this.amount = amount
      }
    },
  },
})
