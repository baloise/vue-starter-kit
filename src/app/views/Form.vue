<template>
  <div class="form">
    <h1 class="title is-size-1 has-no-margin">{{ $t('form.title') }}</h1>
    <h2 class="title is-size-2 has-no-margin-top has-text-warning">
      {{ isFormValid }}
    </h2>
    <form @submit.prevent="onSubmit">
      <div class="columns">
        <div class="column">
          <BalField expanded :disabled="firstName.disabled">
            <BalFieldLabel
              :text="$t('form.firstName.label')"
              required
            ></BalFieldLabel>
            <BalFieldControl>
              <BalInput
                :name="firstName.name"
                v-model="firstName.model"
                :placeholder="$t('form.firstName.placeholder')"
                :disabled="firstName.disabled"
              ></BalInput>
            </BalFieldControl>
            <BalFieldMessage color="danger">
              {{ firstName.error }}
            </BalFieldMessage>
          </BalField>
          <p>Touched => {{ firstName.touched }}</p>
          <p>Pending => {{ firstName.pending }}</p>
          <p>Disabled => {{ firstName.disabled }}</p>
          <p>Valid => {{ !firstName.invalid }}</p>
        </div>
        <div class="column">
          <BalField expanded :disabled="lastName.disable">
            <BalFieldLabel
              :text="$t('form.lastName.label')"
              required
            ></BalFieldLabel>
            <BalFieldControl>
              <BalInput
                :name="lastName.name"
                v-model="lastName.model"
                :disabled="lastName.disable"
                :placeholder="$t('form.lastName.placeholder')"
              ></BalInput>
            </BalFieldControl>
            <BalFieldMessage color="danger" v-if="lastName.invalid">{{
              lastName.error
            }}</BalFieldMessage>
          </BalField>
          <p>Touched => {{ lastName.touched }}</p>
          <p>Pending => {{ lastName.pending }}</p>
          <p>Disabled => {{ lastName.disabled }}</p>
          <p>Valid => {{ !lastName.invalid }}</p>
        </div>
      </div>
      <BalButton color="danger" @click="disable()">Disabel Firstname</BalButton>
      <BalButton color="primary">{{ $t('form.submit.label') }}</BalButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  BalField,
  BalFieldControl,
  BalFieldLabel,
  BalFieldMessage,
  BalInput,
  BalButton,
} from '@baloise/ui-library-vue'
import { useForm } from '@/app/composables/use-validation'
import { isRequired, maxLength, minLength } from '@/app/composables/validators'

export default defineComponent({
  name: 'Form',
  components: {
    BalField,
    BalFieldControl,
    BalFieldLabel,
    BalFieldMessage,
    BalInput,
    BalButton,
  },
  setup() {
    const { useFormControl, validateAll, isFormValid } = useForm()
    const { control: firstName } = useFormControl('firstName', null, [
      isRequired(),
      minLength(6),
      maxLength(8),
    ])
    const { control: lastName } = useFormControl('lastName', 'Wayne', [
      isRequired(),
    ])

    async function onSubmit() {
      const valid = await validateAll()
      console.log('validateAll', valid)
      console.log('isFormValid.value', isFormValid.value)
    }

    function disable() {
      firstName.disabled = !firstName.disabled
    }

    return {
      firstName,
      lastName,
      onSubmit,
      disable,
      isFormValid,
    }
  },
})
</script>
