import { pizzaMargherita } from '../../../core/models/__test__/data/pizza.data'
import type { Meta, Story } from '@storybook/vue3'
import PizzaCard from './PizzaCard.vue'

export default {
  title: 'Components/Pizza/PizzaCard',
  component: PizzaCard,
  argTypes: {
    onAddPizza: { action: 'addPizza' },
  },
  args: {
    pizza: pizzaMargherita,
  },
  parameters: {
    previewTabs: {
      '@geometricpanda/storybook-addon-iframe': { hidden: true },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { PizzaCard },
  setup: () => ({ args }),
  template: '<bal-app><PizzaCard v-bind="args" /></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}
