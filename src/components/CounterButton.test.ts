import { render } from '@testing-library/vue'
import CounterButton from './CounterButton.vue'

test('it should work', () => {
  const { getByText } = render(CounterButton, {
    props: {
      label: 'Test Label',
    },
  })

  getByText('Test Label')
})
