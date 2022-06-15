import type { Meta, Story } from '@storybook/vue3'
import { createContact } from '../../../core/models/Contact'
import CheckoutFormContact from './CheckoutFormContact.vue'

export default {
  title: 'Components/Checkout/CheckoutFormContact',
  component: CheckoutFormContact,
  args: {
    contact: createContact(),
    disabled: false,
  },
  parameters: {
    previewTabs: {
      '@geometricpanda/storybook-addon-iframe': { hidden: true },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { CheckoutFormContact },
  setup: () => {
    return { args }
  },
  template: '<bal-app><CheckoutFormContact v-bind="args"/></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
