import type { Meta, Story } from '@storybook/vue3'
import GenderField from './GenderField.vue'

export default {
  title: 'Components/Form/GenderField',
  component: GenderField,
  args: {
    field: 'gender',
    label: 'Label',
    disabled: false,
    message: 'Message',
  },
  parameters: {
    previewTabs: {
      '@geometricpanda/storybook-addon-iframe': { hidden: true },
    },
  },
} as Meta

const Template: Story = (args) => ({
  components: { GenderField },
  setup: () => ({ args }),
  template: '<bal-app><GenderField v-bind="args" /></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
