import { userJohnDoe, addressBasel } from './data/index'

describe('Domain: User', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      expect(userJohnDoe.firstName).toBe('John')
      expect(userJohnDoe.lastName).toBe('Doe')
      expect(userJohnDoe.gender).toBe('male')
      expect(userJohnDoe.email).toBe('john.doe@baloise.com')
      expect(userJohnDoe.deliveryAddress).toBe(addressBasel)
    })
  })
})
