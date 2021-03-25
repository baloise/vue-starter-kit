import { MutationTree } from 'vuex'

import { INCREASE, DECREASE } from './example.mutations.types'
import { ExampleState } from './example.state'

export const mutations: MutationTree<ExampleState> = {
  [INCREASE](state: ExampleState): void {
    state.counter = state.counter + 1
  },
  [DECREASE](state: ExampleState): void {
    state.counter = state.counter - 1
  },
}
