export default {
  common: {
    validation: {
      required: 'Field is required',
    },
  },
  home: {
    title: 'Welcome',
  },
  name: {
    label: 'Pokemon name',
    validation: {
      required: '@:common.validation.required',
    },
  },
}
