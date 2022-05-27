import { checkoutOrderUseCase } from './../../../services/use-cases/order.cases'
import { Order } from './../../../domain/Order'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ShoppingCartItem } from '../../../domain/ShoppingCartItem'

export function useOrderStore() {
  const router = useRouter()

  return defineStore('order', {
    state: () => {
      return {
        order: Order.create(),
      }
    },
    actions: {
      checkout(items: ShoppingCartItem[]) {
        checkoutOrderUseCase(
          {
            items,
            navigateToCheckout: () => router.push({ name: 'Checkout' }),
          },
          {
            onSuccess: ({ order }) => {
              this.order = order
            },
            onError: (error) => {
              console.error(error)
            },
          },
        )
      },
      submit() {
        // TODO implement
      },
    },
  })()
}
