import { Pizza } from '../../domain/entities/Pizza.entity'
import { PizzaModel } from '../../domain/models/Pizza.model'
import { Result, UseCase } from '../../lib'
import { CartModel } from '../../domain/models/Cart.model'
import { CartItem } from '../../domain/entities/CartItem.entity'

interface Context {
  pizza: Pizza
  items: CartItem[]
}

interface TResult {
  items: CartItem[]
}

export class CartRemovePizzaUseCase implements UseCase<Context, TResult> {
  async execute({ items, pizza }: Context): Promise<Result<TResult, string>> {
    try {
      const cart = CartModel.create({ items })
      cart.remove(PizzaModel.create(pizza))

      return Result.ok({ items: cart.items })
    } catch (error) {
      return Result.fail('Could not remove from shopping cart')
    }
  }
}
