import type { Meta, Story } from '@storybook/vue3'
import type { CounterButtonProps } from '../CounterButton.vue'
import CounterButton from '../CounterButton.vue'

export default {
  title: 'Components/CounterButton',
  component: CounterButton,
  argTypes: {
    onIncrement: {
      name: 'increment',
      action: 'increment',
      table: {
        category: 'events',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
} as Meta

const Template: Story<CounterButtonProps> = (args) => ({
  components: { CounterButton },
  setup: () => ({ args }),
  template: '<counter-button v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'my label',
}
