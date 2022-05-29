import { useCartStore } from './cart.store'
import { VueRouterService } from '../router/RouterService'
import { ToastService } from './../../infra/ToastService'
import { PizzaApiImpl } from '../../infra/PizzaApiMock'
import { OrderSubmitUseCase } from './../../services/use-cases/OrderSubmit.case'
import { Order } from './../../domain/entities/Order.entity'
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
        loading: false,
        failed: false,
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
      async submit(order: Order, items: CartItem[]) {
        this.loading = true
        this.failed = false

        const api = new PizzaApiImpl()
        const notification = new ToastService()
        const router = new VueRouterService(this.router)
        const cart = useCartStore()
        const useCase = new OrderSubmitUseCase(api, notification, router, cart)
        const result = await useCase.execute({ order, items })

        this.loading = false
        this.failed = result.isFailure

        if (result.isSuccess) {
          const { order: newOrder } = result.value()
          this.order = newOrder
        }
      },
    },
  })()
}
