import { Pizza } from './Pizza'

export class ShoppingCartItem {
  constructor(public product: Pizza, public amount = 0) {}

  public sum() {
    return this.product.price * this.amount
  }
}
