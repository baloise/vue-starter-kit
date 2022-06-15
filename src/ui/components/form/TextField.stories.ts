import type { Meta, Story } from '@storybook/vue3'
import TextField from './TextField.vue'

export default {
  title: 'Components/Form/TextField',
  component: TextField,
  args: {
    field: 'field',
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
  components: { TextField },
  setup: () => ({ args }),
  template: '<bal-app><TextField v-bind="args" /></bal-app>',
})

export const Primary = Template.bind({})
Primary.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
