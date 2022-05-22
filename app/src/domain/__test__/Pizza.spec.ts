import { pizzaMargherita, pizzaStromboli } from './data'

describe('Domain: Pizza', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      expect(pizzaMargherita.name).toBe('Margherita')
      expect(pizzaMargherita.description).toBe(
        'Tomato sauce, mozzarella, organic oregano',
      )
      expect(pizzaMargherita.price).toBe(16)
      expect(pizzaMargherita.image).toBe('')
    })
  })
  describe('isEqual', () => {
    test('margherita should be equal to margherita', () => {
      expect(pizzaMargherita.isEqual(pizzaMargherita))
    })

    test('margherita should not be equal to stromboli', () => {
      expect(pizzaMargherita.isEqual(pizzaStromboli)).toBeFalsy()
      expect(pizzaStromboli.isEqual(pizzaMargherita)).toBeFalsy()
    })
  })
})
