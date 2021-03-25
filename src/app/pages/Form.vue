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
          <BalField expanded :disabled="lastName.disabled">
            <BalFieldLabel
              :text="$t('form.lastName.label')"
              required
            ></BalFieldLabel>
            <BalFieldControl>
              <BalInput
                :name="lastName.name"
                v-model="lastName.model"
                :disabled="lastName.disabled"
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
import { defineComponent } from '@vue/composition-api'
import {
  BalButton,
  BalFieldMessage,
  BalField,
  BalFieldControl,
  BalInput,
  BalFieldLabel,
} from '@baloise/ui-library-vue-2'
import { useForm } from '../../lib/form'
import { isMaxLength, isMinLength, isRequired } from '../helpers/validators'

export default defineComponent({
  name: 'Form',
  setup() {
    const { useFormControl, validateAll, isFormValid } = useForm()
    const { control: firstName } = useFormControl('firstName', null, [
      isRequired(),
      isMinLength(6),
      isMaxLength(8),
    ])
    const { control: lastName } = useFormControl('lastName', 'Wayne', [
      isRequired(),
    ])

    async function onSubmit() {
      await validateAll()
      if (isFormValid.value) {
        // call backend
      }
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
  components: {
    BalButton,
    BalFieldMessage,
    BalField,
    BalFieldControl,
    BalInput,
    BalFieldLabel,
  },
})
</script>
