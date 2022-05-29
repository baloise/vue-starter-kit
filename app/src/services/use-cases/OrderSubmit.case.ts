import { Result, UseCase } from '../../lib'
import { CartModel } from '../../domain/models/Cart.model'
import { CartItem } from '../../domain/entities/CartItem.entity'
import { Order } from '../../domain/entities/Order.entity'
import { OrderModel } from '../../domain/models/Order.model'
import { PizzaApi } from '../interfaces/PizzaApi'
import { useOrderSchema } from '../schemas/order.schema'
import { NotificationService } from '../interfaces/NotificationService'
import { RouterService } from '../interfaces/RouterService'
import { CartStore } from '../interfaces/CartStore'

interface Context {
  items: CartItem[]
  order: Order
}

interface TResult {
  order: Order
}

export class OrderSubmitUseCase implements UseCase<Context, TResult> {
  constructor(
    private readonly api: PizzaApi,
    private readonly notification: NotificationService,
    private readonly router: RouterService,
    private readonly cartStore: CartStore,
  ) {}

  async execute({ items, order }: Context): Promise<Result<TResult, string>> {
    const cart = CartModel.create({ items })
    const amount = cart.amount()

    if (amount <= 0) {
      return Result.fail('Cannot submit order with empty cart')
    }

    try {
      const schema = useOrderSchema()
      await schema.validate(order)
    } catch (_) {
      return Result.fail('Invalid order form data')
    }

    const result = await this.api.create({ items, order })

    if (result.isSuccess) {
      this.notification.success('Successfully submitted order.')
      await this.cartStore.reset()
      await this.router.goToHome()
      return Result.ok({ order: OrderModel.defaults() })
    }
    return Result.fail('Submit request failed')
  }
}
