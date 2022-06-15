<script setup lang="ts">
import {
  BalCard,
  BalCardTitle,
  BalCardSubtitle,
  BalCardContent,
  BalField,
  BalFieldLabel,
  BalFieldControl,
  BalFieldMessage,
  BalInput,
  BalButton,
} from '@baloise/design-system-components-vue'
import { usePokemonStore } from '../../stores/pokemon.store'
import { useForm, useField } from 'vee-validate'
import { computed } from 'vue'
import { usePokemonSchema } from '../../../core/schemas/pokemon.schema'
import { Pokemon } from '../../../core/models/Pokemon'
import { useBalField } from '@baloise/web-app-form-vue'

const pokemonStore = usePokemonStore()

const { handleSubmit } = useForm<Pokemon>({
  validationSchema: computed(() => usePokemonSchema()),
  initialValues: pokemonStore.pokemon,
})

const { value } = useField<string>('name')
const { invalid, message } = useBalField('name')

const onSubmit = handleSubmit((pokemon) => {
  pokemonStore.search(pokemon.name)
})
</script>

<template>
  <form @submit="onSubmit">
    <BalCard class="mt-6 p-5">
      <BalCardTitle>Find your pokemon</BalCardTitle>
      <BalCardSubtitle>Enter the name of your pokemon</BalCardSubtitle>
      <BalCardContent>
        <div className="columns">
          <div className="column is-10">
            <BalField
              :invalid="!!invalid"
              :disabled="pokemonStore.isLoading"
              :loading="pokemonStore.isLoading"
            >
              <BalFieldLabel>Name</BalFieldLabel>
              <BalFieldControl>
                <BalInput v-model="value"></BalInput>
              </BalFieldControl>
              <BalFieldMessage>{{ message }}</BalFieldMessage>
            </BalField>
          </div>
          <div className="column">
            <BalButton
              type="submit"
              style="margin-top: 12px"
              expanded
              :loading="pokemonStore.isLoading"
              :disabled="!!pokemonStore.isFailure || pokemonStore.isLoading"
            >
              Search
            </BalButton>
          </div>
        </div>

        <div
          v-if="pokemonStore.isFinished"
          className="is-flex is-justify-content-center"
        >
          <img :src="pokemonStore.pokemon.frontImage" alt="pokemon" />
          <img :src="pokemonStore.pokemon.backImage" alt="pokemon" />
        </div>
      </BalCardContent>
    </BalCard>
  </form>
</template>
