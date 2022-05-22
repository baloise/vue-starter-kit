import { userJohnDoe, pizzaMargherita } from './data/index'
import { Order } from '../Order'
import { ShoppingCart } from '../ShoppingCart'
import { ShoppingCartItem } from '../ShoppingCartItem'

describe('Domain: Order', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      const order = new Order(
        userJohnDoe,
        new ShoppingCart([new ShoppingCartItem(pizzaMargherita, 1)]),
      )

      expect(order.user).toBe(userJohnDoe)
      expect(order.shoppingCard.list.length).toBe(1)
      expect(pizzaMargherita.isEqual(order.shoppingCard.list[0].product))
    })
  })
})
