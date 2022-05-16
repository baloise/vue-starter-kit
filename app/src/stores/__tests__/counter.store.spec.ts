import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '../counter.store'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const counter = useCounterStore()
    expect(counter.counter).toBe(0)
    counter.increment()
    expect(counter.counter).toBe(1)
  })
})
