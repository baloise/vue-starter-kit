import { PizzaModel } from './Pizza.model'
import { clone, DomainModel } from '../../lib'
import { CartItem } from '../entities/CartItem.entity'

export class CartItemModel extends DomainModel<CartItem> implements CartItem {
  constructor(public pizza: PizzaModel, public amount: number) {
    super()
  }

  static create(cartItem?: Partial<CartItem>): CartItemModel {
    const newCartItem = clone<CartItem>({
      ...CartItemModel.defaults(),
      ...cartItem,
    })
    return new CartItemModel(
      PizzaModel.create(newCartItem.pizza),
      newCartItem.amount,
    )
  }

  static defaults(): CartItem {
    return {
      pizza: PizzaModel.create(),
      amount: 0,
    }
  }

  sum(): number {
    return this.pizza.price * this.amount
  }
}
