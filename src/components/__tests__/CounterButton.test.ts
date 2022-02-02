import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CounterButton from '../CounterButton.vue'

describe('CounterButton', () => {
  test('it should work', () => {
    const wrapper = mount(CounterButton, {
      props: {
        label: 'Test Label',
      },
    })

    expect(wrapper.text()).toContain('Test Label')
  })
})
