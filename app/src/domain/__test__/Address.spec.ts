import { addressBasel } from './data'

describe('Domain: Address', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      expect(addressBasel.postalCode).toBe('4000')
      expect(addressBasel.city).toBe('Basel')
      expect(addressBasel.street).toBe('Aeschengraben')
      expect(addressBasel.streetNumber).toBe('21')
    })
  })
})
