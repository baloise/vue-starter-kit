import { CartItemModel } from '../../domain/models/CartItem.model'
import { Pizza } from '../../domain/entities/Pizza.entity'
import { PizzaModel } from '../../domain/models/Pizza.model'
import { Result, UseCase } from '../../lib'
import { CartModel } from '../../domain/models/Cart.model'
import { CartItem } from '../../domain/entities/CartItem.entity'

/**
 * RESET SHOPPING CART - USE CASE
 * -----------------------------------------
 * Set the selected pizzas to 0, to have an empty shopping cart at the end.
 */

interface Context {}

interface TResult {
  items: CartItem[]
  total: number
  amount: number
}

export class CartResetUseCase implements UseCase<Context, TResult> {
  async execute(): Promise<Result<TResult, string>> {
    try {
      const cart = CartModel.create()

      return Result.ok({
        items: cart.items,
        total: cart.sum(),
        amount: cart.amount(),
      })
    } catch (error) {
      return Result.fail('Could not reset the shopping cart')
    }
  }
}
