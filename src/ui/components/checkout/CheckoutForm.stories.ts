import { userJohnDoe } from './../../../core/models/__test__/data/contact.data'
import { addressBasel } from './../../../core/models/__test__/data/address.data'
import { defaultOrder } from './../../../core/models/Order'
import type { Meta, Story } from '@storybook/vue3'
import CheckoutForm from './CheckoutForm.vue'

export default {
  title: 'Components/Checkout/CheckoutForm',
  component: CheckoutForm,
  argTypes: {
    onBack: { action: 'back' },
    onSubmit: { action: 'submit' },
  },
  args: {
    order: defaultOrder,
    loading: false,
  },
  parameters: {
    previewTabs: {
      '@geometricpanda/storybook-addon-iframe': { hidden: true },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { CheckoutForm },
  setup: () => {
    return { args }
  },
  template: '<bal-app><CheckoutForm v-bind="args"/></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  order: {
    contact: userJohnDoe,
    deliveryAddress: addressBasel,
  },
}
