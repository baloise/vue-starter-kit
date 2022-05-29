import { Result, UseCase } from '../../lib'
import { CartModel } from '../../domain/models/Cart.model'
import { CartItem } from '../../domain/entities/CartItem.entity'

interface Context {}

interface TResult {
  items: CartItem[]
}

export class CartResetUseCase implements UseCase<Context, TResult> {
  async execute(): Promise<Result<TResult, string>> {
    try {
      const cart = CartModel.create()

      return Result.ok({ items: cart.items })
    } catch (error) {
      return Result.fail('Could not reset the shopping cart')
    }
  }
}
