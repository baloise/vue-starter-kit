import { mount } from '@vue/test-utils'
import CounterTitle from '../CounterTitle.vue'

describe('CounterTitle', () => {
  test('it should work', () => {
    const wrapper = mount(CounterTitle, {
      props: {
        counter: 42,
      },
    })

    expect(wrapper.text()).toContain('The count is at 42!')
  })
})
