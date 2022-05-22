import {
  MaxShoppingCartItemAmountException,
  MinShoppingCartItemAmountException,
} from './exceptions'
import { Pizza } from './Pizza'
import { ShoppingCartItem } from './ShoppingCartItem'

export class ShoppingCart {
  constructor(private shoppingCartItems: ShoppingCartItem[] = []) {}

  public get list() {
    return this.shoppingCartItems.filter(
      (shoppingCardItem) => shoppingCardItem.amount > 0,
    )
  }

  public add(product: Pizza) {
    const index = this.findIndex(product)
    if (index >= 0) {
      const { amount } = this.shoppingCartItems[index]
      const newAmount = amount + 1
      if (newAmount > 10) {
        throw new MaxShoppingCartItemAmountException()
      }
      this.shoppingCartItems[index] = new ShoppingCartItem(product, newAmount)
    } else {
      this.shoppingCartItems.push(new ShoppingCartItem(product, 1))
    }
  }

  public remove(product: Pizza) {
    const index = this.findIndex(product)
    if (index >= 0) {
      const { amount } = this.shoppingCartItems[index]
      const newAmount = amount - 1
      if (newAmount < 0) {
        throw new MinShoppingCartItemAmountException()
      }

      this.shoppingCartItems[index] = new ShoppingCartItem(product, newAmount)
    }
  }

  public reset() {
    this.shoppingCartItems = []
  }

  public sum() {
    return this.shoppingCartItems.reduce(
      (total, product) => (total += product.sum()),
      0,
    )
  }

  public amount() {
    return this.shoppingCartItems.reduce(
      (total, product) => (total += product.amount),
      0,
    )
  }

  private findIndex(product: Pizza): number {
    return this.shoppingCartItems.findIndex((shoppingCardItem) =>
      shoppingCardItem.product.isEqual(product),
    )
  }
}
