import { MaxShoppingCartItemAmountException } from './../Exceptions'
import { pizzaMargherita, pizzaStromboli } from './data/index'
import { ShoppingCart } from '../ShoppingCart'
import { ShoppingCartItem } from '../ShoppingCartItem'

describe('Domain: ShoppingCart', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      const shoppingCart = new ShoppingCart()

      expect(shoppingCart.list.length).toBe(0)
    })
  })

  describe('list', () => {
    test('should only return products with an amount bigger than 0', () => {
      const shoppingCart = new ShoppingCart([
        new ShoppingCartItem(pizzaMargherita, 1),
        new ShoppingCartItem(pizzaStromboli, 0),
      ])

      expect(shoppingCart.list.length).toBe(1)
    })
  })

  describe('add', () => {
    test('should add a pizza with the amount 1, because it is new to the cart', () => {
      const shoppingCart = new ShoppingCart()
      shoppingCart.add(pizzaMargherita)

      expect(shoppingCart.list.length).toBe(1)
    })

    test('should add a pizza with the amount 2 to the cart', () => {
      const shoppingCart = new ShoppingCart()
      shoppingCart.add(pizzaMargherita)
      shoppingCart.add(pizzaMargherita)

      expect(shoppingCart.list.length).toBe(1)
      expect(shoppingCart.list[0].amount).toBe(2)
    })

    test('should add two various pizzas with the amount 1 to the cart', () => {
      const shoppingCart = new ShoppingCart()
      shoppingCart.add(pizzaMargherita)
      shoppingCart.add(pizzaStromboli)

      expect(shoppingCart.list.length).toBe(2)
    })

    test('should add two various pizzas with the amount 1 to the cart', () => {
      const shoppingCart = new ShoppingCart([
        new ShoppingCartItem(pizzaMargherita, 10),
      ])

      try {
        shoppingCart.add(pizzaMargherita)
      } catch (error) {
        expect((error as Error).name).toBe('MaxShoppingCartItemAmountException')
      }
    })
  })

  describe('remove', () => {
    test('should remove one pizza from the cart', () => {
      const shoppingCart = new ShoppingCart([
        new ShoppingCartItem(pizzaMargherita, 2),
      ])
      shoppingCart.remove(pizzaMargherita)

      expect(shoppingCart.list.length).toBe(1)
      expect(shoppingCart.list[0].amount).toBe(1)
    })

    test('should not change the cart, due to the amount is already 0', () => {
      const shoppingCart = new ShoppingCart([
        new ShoppingCartItem(pizzaMargherita, 0),
      ])

      try {
        shoppingCart.remove(pizzaMargherita)
      } catch (error) {
        expect((error as Error).name).toBe('MinShoppingCartItemAmountException')
        expect(shoppingCart.list.length).toBe(0)
      }
    })

    test('should not change the cart, because the pizza is not in the cart', () => {
      const shoppingCart = new ShoppingCart()
      shoppingCart.remove(pizzaMargherita)

      expect(shoppingCart.list.length).toBe(0)
    })
  })

  describe('reset', () => {
    test('should reset the cart to an empty cart', () => {
      const shoppingCart = new ShoppingCart([
        new ShoppingCartItem(pizzaMargherita, 1),
        new ShoppingCartItem(pizzaStromboli, 2),
      ])

      shoppingCart.reset()

      expect(shoppingCart.list.length).toBe(0)
    })
  })

  describe('sum', () => {
    test('should sum up the total amount in the cart', () => {
      const shoppingCart = new ShoppingCart([
        new ShoppingCartItem(pizzaMargherita, 1),
        new ShoppingCartItem(pizzaStromboli, 2),
      ])

      expect(shoppingCart.sum()).toBe(16 + 18 * 2)
    })

    test('should sum up the total amount of the empty cart', () => {
      const shoppingCart = new ShoppingCart()

      expect(shoppingCart.sum()).toBe(0)
    })
  })
})
