import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import CounterTitle from '../CounterTitle.vue'

describe('CounterTitle', () => {
  test('it should work', () => {
    const spy = vi.fn()
    const wrapper = mount(CounterTitle, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: spy,
          }),
        ],
      },
    })

    expect(wrapper.text()).toContain('The count is at 0!')
  })
})
