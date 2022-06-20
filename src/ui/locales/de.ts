export default {
  common: {
    validation: {
      required: 'Pflichtfeld',
    },
  },
  home: {
    title: 'Willkommen',
  },
  name: {
    label: 'Pokemon name',
    validation: {
      required: '@:common.validation.required',
    },
  },
}
