import {
  pizzaMargherita,
  pizzaStromboli,
} from '../../../core/models/__test__/data/pizza.data'
import type { Meta, Story } from '@storybook/vue3'
import PizzaList from './PizzaList.vue'

export default {
  title: 'Components/Pizza/PizzaList',
  component: PizzaList,
  argTypes: {
    onAddPizza: { action: 'addPizza' },
  },
  args: {
    pizzas: [pizzaMargherita, pizzaStromboli],
    loading: false,
  },
  parameters: {
    previewTabs: {
      '@geometricpanda/storybook-addon-iframe': { hidden: true },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { PizzaList },
  setup: () => ({ args }),
  template: '<bal-app><PizzaList v-bind="args" /></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
