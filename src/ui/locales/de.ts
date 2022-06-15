export default {
  common: {
    add: 'hinzufügen',
    back: 'zurück',
    submit: 'absenden',
    validation: {
      required: 'Pflichtfeld',
    },
  },
  pizza: {
    loading: 'Inhalt wird geladen. Bitte warten...',
  },
  checkout: {
    title: 'Bestellung',
    notification: {
      success: 'Bestellung war erfolgreich',
    },
  },
  cart: {
    title: 'Warenkorb',
    total: 'Total',
    checkout: 'bestellen',
    emptyMessage: 'Warenkorb ist leer.',
  },
  contact: {
    gender: {
      label: 'Geschlecht',
      value: {
        male: 'Mann',
        female: 'Frau',
      },
      validation: {
        required: '@:common.validation.required',
      },
    },
    firstName: {
      label: 'Vorname',
      validation: {
        required: '@:common.validation.required',
      },
    },
    lastName: {
      label: 'Nachname',
      validation: {
        required: '@:common.validation.required',
      },
    },
    wantsNewsletter: {
      label: 'Newsletter',
      labelValue: 'Abonnieren Sie unseren Newsletter',
    },
    email: {
      label: 'Email',
      validation: {
        required: '@:common.validation.required',
        email: 'Bitte geben Sie eine gültige Email an',
      },
    },
  },
  deliveryAddress: {
    title: 'Lieferadresse',
    postalCode: {
      label: 'Postleitzahl',
      validation: {
        required: '@:common.validation.required',
        length: 'Die Postleitzahl muss aus {arg} Zahlen bestehen',
      },
    },
    city: {
      label: 'Stadt',
      validation: {
        required: '@:common.validation.required',
      },
    },
    street: {
      label: 'Strasse',
      validation: {
        required: '@:common.validation.required',
      },
    },
    streetNumber: {
      label: 'Strassen Nummer',
      validation: {
        required: '@:common.validation.required',
      },
    },
  },
}
