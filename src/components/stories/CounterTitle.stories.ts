import type { Meta, Story } from '@storybook/vue3'
import type { CounterTitleProps } from '../CounterTitle.vue'
import CounterTitle from '../CounterTitle.vue'

export default {
  title: 'Components/CounterTitle',
  component: CounterTitle,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
} as Meta

const Template: Story<CounterTitleProps> = (args) => ({
  components: { CounterTitle },
  setup: () => ({ args }),
  template: '<counter-title v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  counter: 0,
}
