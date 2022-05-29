import { clone, DomainModel } from '../../lib'
import { Cart } from '../entities/Cart.entity'
import { CartItemModel } from './CartItem.model'
import { PizzaModel } from './Pizza.model'
import { MaxShoppingCartItemAmountError } from '../errors/MaxShoppingCartItemAmountError'
import { MinShoppingCartItemAmountError } from '../errors/MinShoppingCartItemAmountError'

export class CartModel extends DomainModel<Cart> implements Cart {
  constructor(public items: CartItemModel[]) {
    super()
  }

  static create(cart?: Partial<Cart>): CartModel {
    const newCart = clone<Cart>({
      ...CartModel.defaults(),
      ...cart,
    })
    return new CartModel(newCart.items.map(CartItemModel.create))
  }

  static defaults(): Cart {
    return {
      items: [],
    }
  }

  add(pizza: PizzaModel): void {
    const index = this.findIndex(pizza)

    if (index >= 0) {
      const { amount } = this.items[index]
      const newAmount = amount + 1

      if (newAmount > 10) {
        throw new MaxShoppingCartItemAmountError()
      }
      this.items[index] = CartItemModel.create({ pizza, amount: newAmount })
    } else {
      this.items.push(CartItemModel.create({ pizza, amount: 1 }))
    }
  }

  remove(pizza: PizzaModel): void {
    const index = this.findIndex(pizza)
    if (index >= 0) {
      const { amount } = this.items[index]
      const newAmount = amount - 1
      if (newAmount < 0) {
        throw new MinShoppingCartItemAmountError()
      }

      this.items[index] = CartItemModel.create({ pizza, amount: newAmount })
    }
  }

  reset(): void {
    this.items = []
  }

  sum(): number {
    return this.items.reduce((total, item) => (total += item.sum()), 0)
  }

  amount(): number {
    return this.items.reduce((total, item) => (total += item.amount), 0)
  }

  private findIndex(pizza: PizzaModel): number {
    return this.items.findIndex((item) => item.pizza.isEqual(pizza))
  }
}
