import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { OrderCheckoutUseCase } from '../../services/use-cases/OrderCheckout.case'
import { OrderModel } from '../../domain/models/Order.model'
import { CartItem } from '../../domain/entities/CartItem.entity'

export function useOrderStore() {
  const router = useRouter()

  return defineStore('order', {
    state: () => {
      return {
        order: OrderModel.defaults(),
      }
    },
    actions: {
      async checkout(items: CartItem[]) {
        const navigateToCheckout = () => router.push({ name: 'Checkout' })
        const useCase = new OrderCheckoutUseCase(navigateToCheckout)
        const result = await useCase.execute({ items })

        if (result.isSuccess) {
          const { order } = result.value()
          this.order = order
        }
      },
      submit() {
        // TODO implement
      },
    },
  })()
}
