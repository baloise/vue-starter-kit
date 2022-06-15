import {
  pizzaMargherita,
  pizzaStromboli,
} from '../../../core/models/__test__/data/pizza.data'
import type { Meta, Story } from '@storybook/vue3'
import CartCard from './CartCard.vue'

export default {
  title: 'Components/Cart/CartCard',
  component: CartCard,
  argTypes: {
    onCheckout: { action: 'checkout' },
    onAddPizza: { action: 'addPizza' },
    onRemovePizza: { action: 'removePizza' },
  },
  args: {
    amount: 6,
    total: 42,
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
  components: { CartCard },
  setup: () => {
    return { args }
  },
  template: '<bal-app><CartCard v-bind="args"/></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Readonly = Template.bind({})
Readonly.args = {
  readonly: true,
}
