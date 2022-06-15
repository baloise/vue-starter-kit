import { pizzaMargherita } from '../../../core/models/__test__/data/pizza.data'
import type { Meta, Story } from '@storybook/vue3'
import CartListItem from './CartListItem.vue'
import { ref } from 'vue'

export default {
  title: 'Components/Cart/CartListItem',
  component: CartListItem,
  argTypes: {
    onAddPizza: { action: 'addPizza' },
    onRemovePizza: { action: 'removePizza' },
  },
  args: {
    item: {
      pizza: pizzaMargherita,
      amount: 7,
    },
    readonly: false,
  },
  parameters: {
    previewTabs: {
      '@geometricpanda/storybook-addon-iframe': { hidden: true },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { CartListItem },
  setup: () => {
    const obj = ref<any>(args)
    function onAddPizza() {
      obj.value.item.amount = obj.value.item.amount + 1
    }

    function onRemovePizza() {
      obj.value.item.amount = obj.value.item.amount - 1
    }

    return { args, obj, onAddPizza, onRemovePizza }
  },
  template:
    '<bal-app><CartListItem v-bind="obj" @add-pizza="onAddPizza($event)" @remove-pizza="onRemovePizza($event)" /></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Readonly = Template.bind({})
Readonly.args = {
  readonly: true,
}
