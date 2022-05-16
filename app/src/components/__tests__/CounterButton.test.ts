import { mount } from '@vue/test-utils'
import CounterButton from '../CounterButton.vue'

describe('CounterButton', () => {
  test('it should have a label', () => {
    const wrapper = mount(CounterButton, {
      props: {
        label: 'Test Label',
      },
    })

    expect(wrapper.text()).toContain('Test Label')
  })

  test('it should emit increment', async () => {
    const wrapper = mount(CounterButton, {
      props: {
        label: 'Test Label',
      },
    })

    const button = wrapper.find('bal-button')
    await button.trigger('click')

    const emittedIncrement = wrapper.emitted().increment
    expect(emittedIncrement).toBeTruthy()
    expect(emittedIncrement.length).toBe(1)
    expect(emittedIncrement[0]).toEqual([42])
  })
})
