import type { Meta, Story } from '@storybook/vue3'
import { createAddress } from '../../../core/models/Address'
import CheckoutFormAddress from './CheckoutFormAddress.vue'

export default {
  title: 'Components/Checkout/CheckoutFormAddress',
  component: CheckoutFormAddress,
  args: {
    address: createAddress(),
    disabled: false,
  },
  parameters: {
    previewTabs: {
      '@geometricpanda/storybook-addon-iframe': { hidden: true },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { CheckoutFormAddress },
  setup: () => {
    return { args }
  },
  template: '<bal-app><CheckoutFormAddress v-bind="args"/></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
