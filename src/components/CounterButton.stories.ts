import CounterButton from './CounterButton.vue'
import '../styles/main.scss'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/CounterButton',
  component: CounterButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onIncrement: {
      name: 'increment',
      action: 'increment',
      table: {
        category: 'events',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CounterButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<counter-button v-bind="args" />',
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  label: 'my label',
}
