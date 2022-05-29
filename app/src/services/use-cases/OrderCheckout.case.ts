import { Result, UseCase } from '../../lib'
import { CartModel } from '../../domain/models/Cart.model'
import { CartItem } from '../../domain/entities/CartItem.entity'
import { Order } from '../../domain/entities/Order.entity'
import { EmptyShoppingCartError } from '../../domain/errors/EmptyShoppingCartError'
import { OrderModel } from '../../domain/models/Order.model'

/**
 * CHECKOUT ORDER - USE CASE
 * -----------------------------------------
 * Removes a pizza to the shopping cart or if there is already a pizza
 * in decreases the amount.
 */

interface Context {
  items: CartItem[]
}

interface TResult {
  order: Order
}

export class OrderCheckoutUseCase implements UseCase<Context, TResult> {
  constructor(private readonly navigateToCheckout: () => void) {}

  async execute({ items }: Context): Promise<Result<TResult, string>> {
    try {
      const cart = CartModel.create({ items })
      const amount = cart.amount()

      if (amount <= 0) {
        throw new EmptyShoppingCartError()
      }

      const order = OrderModel.create()
      this.navigateToCheckout()
      return Result.ok({ order })
    } catch (error) {
      return Result.fail('Could not checkout current shopping cart')
    }
  }
}
