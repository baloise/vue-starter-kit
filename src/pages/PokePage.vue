<script setup lang="ts">
import {
  BalCard,
  BalCardTitle,
  BalCardSubtitle,
  BalCardContent,
  BalField,
  BalFieldControl,
  BalFieldLabel,
  BalFieldMessage,
  BalInput,
  BalButton,
} from '@baloise/design-system-components-vue'
import { computed, onMounted } from 'vue'
import { useAxios } from '@baloise/vue-axios'
import { useField, useForm } from 'vee-validate'
import { rules, isRequired } from '../helpers/validators'
import { pokeApi, pokeGetPokemon } from '../api/poke.api'

interface Pokemon {
  sprites: {
    front_default: string
    back_default: string
  }
}

const { request, data, isLoading, isFinished } = useAxios<Pokemon>(pokeApi)

const { validate } = useForm()

const { errorMessage: pokemonError, value: pokemon } = useField<string>(
  'pokemon',
  rules([isRequired()]),
)

const avatarFront = computed(() => data.value?.sprites.front_default)
const avatarBack = computed(() => data.value?.sprites.back_default)

async function search() {
  const { valid } = await validate()
  if (valid) {
    request(pokeGetPokemon(pokemon.value.toLowerCase()))
  }
}

onMounted(() => (pokemon.value = 'Squirtle'))
</script>

<template>
  <BalCard class="mt-6 p-5">
    <BalCardTitle>Find your pokemon</BalCardTitle>
    <BalCardSubtitle>Enter the name of your pokemon</BalCardSubtitle>
    <BalCardContent>
      <div class="columns">
        <div class="column is-10">
          <BalField
            :invalid="!!pokemonError"
            :disabled="isLoading"
            :loading="isLoading"
          >
            <BalFieldLabel>Name</BalFieldLabel>
            <BalFieldControl>
              <BalInput v-model="pokemon"></BalInput>
            </BalFieldControl>
            <BalFieldMessage>{{ pokemonError }}</BalFieldMessage>
          </BalField>
        </div>
        <div class="column">
          <BalButton
            style="margin-top: 12px"
            expanded
            :loading="isLoading"
            :disabled="!!pokemonError || isLoading"
            @click="search()"
          >
            Search
          </BalButton>
        </div>
      </div>

      <div v-if="isFinished" class="is-flex is-justify-content-center">
        <img :src="avatarFront" alt="pokemon" />
        <img :src="avatarBack" alt="pokemon" />
      </div>
    </BalCardContent>
  </BalCard>
</template>
