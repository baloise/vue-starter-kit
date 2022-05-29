import { pizzaMargherita } from './data/index'
import { ShoppingCartItem } from '../CartItem'

describe('Domain: ShoppingCartItem', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      const shoppingCartItem = new ShoppingCartItem(pizzaMargherita, 1)

      expect(shoppingCartItem.product.isEqual(pizzaMargherita))
      expect(shoppingCartItem.amount).toBe(1)
    })
  })

  describe('sum', () => {
    test('total should be 0 due to empty amount', () => {
      const shoppingCartItem = new ShoppingCartItem(pizzaMargherita, 0)
      const total = shoppingCartItem.sum()
      expect(total).toBe(0)
    })

    test('total should be twice the product price', () => {
      const shoppingCartItem = new ShoppingCartItem(pizzaMargherita, 2)
      const total = shoppingCartItem.sum()
      expect(total).toBe(32)
    })
  })
})
