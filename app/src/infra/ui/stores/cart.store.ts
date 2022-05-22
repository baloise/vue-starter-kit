import { resetUseCase } from './../../../services/shopping-cart.cases'
import { Pizza } from './../../../domain/Pizza'
import { ShoppingCartItem } from './../../../domain/ShoppingCartItem'
import { defineStore } from 'pinia'
import {
  addPizzaUseCase,
  removePizzaUseCase,
} from '../../../services/shopping-cart.cases'

export const useShoppingCartStore = defineStore('cart', {
  state: () => {
    return {
      list: [] as ShoppingCartItem[],
      amount: 0,
      total: 0,
      loading: false,
      failed: false,
    }
  },
  actions: {
    addPizza(pizza: Pizza) {
      addPizzaUseCase(
        {
          pizza,
          list: this.list,
        },
        {
          onSuccess: ({ list, total, amount }) => {
            this.list = list
            this.total = total
            this.amount = amount
          },
          onError: (error) => {
            console.error(error)
          },
        },
      )
    },
    removePizza(pizza: Pizza) {
      removePizzaUseCase(
        {
          pizza,
          list: this.list,
        },
        {
          onSuccess: ({ list, total, amount }) => {
            this.list = list
            this.total = total
            this.amount = amount
          },
          onError: (error) => {
            console.error(error)
          },
        },
      )
    },
    reset() {
      resetUseCase(
        {},
        {
          onSuccess: ({ list, total, amount }) => {
            this.list = list
            this.total = total
            this.amount = amount
          },
          onError: (error) => {
            console.error(error)
          },
        },
      )
    },
  },
})
