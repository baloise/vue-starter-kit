import { createCounter } from '../Counter'

describe('Model: Counter', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      const counter = createCounter()
      expect(counter.count).toBe(0)
    })
  })
})
