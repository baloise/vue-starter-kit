import { AxiosRequestConfig } from 'axios'
import { $axios } from '@baloise/vue-axios'

export const pokeApi = $axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export const pokeGetPokemon = (name: string): AxiosRequestConfig => ({
  baseURL: pokeApi.defaults.baseURL,
  url: `/pokemon/${name}`,
})
