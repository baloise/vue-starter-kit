import {
  pizzaMargherita,
  pizzaStromboli,
} from '../../../core/models/__test__/data/pizza.data'
import type { Meta, Story } from '@storybook/vue3'
import CartList from './CartList.vue'

export default {
  title: 'Components/Cart/CartList',
  component: CartList,
  argTypes: {
    onAddPizza: { action: 'addPizza' },
    onRemovePizza: { action: 'removePizza' },
  },
  args: {
    items: [
      {
        pizza: pizzaMargherita,
        amount: 4,
      },
      {
        pizza: pizzaStromboli,
        amount: 2,
      },
    ],
    readonly: false,
  },
  parameters: {
    previewTabs: {
      '@geometricpanda/storybook-addon-iframe': { hidden: true },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { CartList },
  setup: () => {
    return { args }
  },
  template: '<bal-app><CartList v-bind="args"/></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Readonly = Template.bind({})
Readonly.args = {
  readonly: true,
}
