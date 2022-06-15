export default {
  common: {
    add: 'add',
    back: 'back',
    submit: 'submit',
    validation: {
      required: 'Field is required',
    },
  },
  pizza: {
    loading: 'Content gets loaded. Please wait...',
  },
  checkout: {
    title: 'Checkout',
    notification: {
      success: 'Successfully submitted order.',
    },
  },
  cart: {
    title: 'Shopping Cart',
    total: 'Total',
    checkout: 'checkout',
    emptyMessage:
      'Looks like your cart is empty. Select a pizza on the left to get started!',
  },
  contact: {
    gender: {
      label: 'Gender',
      value: {
        male: 'Male',
        female: 'Female',
      },
      validation: {
        required: '@:common.validation.required',
      },
    },
    firstName: {
      label: 'Firstname',
      validation: {
        required: '@:common.validation.required',
      },
    },
    lastName: {
      label: 'Lastname',
      validation: {
        required: '@:common.validation.required',
      },
    },
    wantsNewsletter: {
      label: 'Newsletter',
      labelValue: 'Subscribe to our newsletter',
    },
    email: {
      label: 'Email',
      validation: {
        required: '@:common.validation.required',
        email: 'Please enter a valid email',
      },
    },
  },
  deliveryAddress: {
    title: 'Delivery Address',
    postalCode: {
      label: 'PostalCode',
      validation: {
        required: '@:common.validation.required',
        length: 'The postal code must have the length of {arg}',
      },
    },
    city: {
      label: 'City',
      validation: {
        required: '@:common.validation.required',
      },
    },
    street: {
      label: 'Street',
      validation: {
        required: '@:common.validation.required',
      },
    },
    streetNumber: {
      label: 'Street Number',
      validation: {
        required: '@:common.validation.required',
      },
    },
  },
}
