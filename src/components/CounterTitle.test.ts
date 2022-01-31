import { render } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import CounterTitle from './CounterTitle.vue'
import { useCounterStore } from '../data/counter.store'
import { vi } from 'vitest'

test('it should work', () => {
  const spy = vi.fn()

  const { getByText } = render(CounterTitle, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: spy,
        }),
      ],
    },
  })

  getByText('The count is at 0!')
})
