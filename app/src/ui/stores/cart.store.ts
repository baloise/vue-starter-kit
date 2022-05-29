import { CartRemovePizzaUseCase } from '../../services/use-cases/CartRemovePizza.case'
import { CartAddPizzaUseCase } from '../../services/use-cases/CartAddPizza.case'
import { CartItem } from '../../domain/entities/CartItem.entity'
import { defineStore } from 'pinia'
import { Pizza } from '../../domain/entities/Pizza.entity'
import { CartResetUseCase } from '../../services/use-cases/CartReset.case'
import { useStorage } from '@vueuse/core'
import { CartModel } from '../../domain/models/Cart.model'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      items: useStorage<CartItem[]>('cart-items', []),
      loading: false,
      failed: false,
    }
  },
  getters: {
    amount: (state) => {
      const cart = CartModel.create({ items: state.items })
      return cart.amount()
    },
    total: (state) => {
      const cart = CartModel.create({ items: state.items })
      return cart.sum()
    },
  },
  actions: {
    async addPizza(pizza: Pizza) {
      const useCase = new CartAddPizzaUseCase()
      const result = await useCase.execute({ pizza, items: this.items })

      if (result.isSuccess) {
        const { items } = result.value()
        this.items = items
      }
    },
    async removePizza(pizza: Pizza) {
      const useCase = new CartRemovePizzaUseCase()
      const result = await useCase.execute({ pizza, items: this.items })

      if (result.isSuccess) {
        const { items } = result.value()
        this.items = items
      }
    },
    async reset() {
      const useCase = new CartResetUseCase()
      const result = await useCase.execute()

      if (result.isSuccess) {
        const { items } = result.value()
        this.items = items
      }
    },
  },
})
