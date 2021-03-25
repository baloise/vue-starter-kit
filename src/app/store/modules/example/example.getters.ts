import { ExampleState } from './example.state'

// -------------------------------------------------------------------------
// Define Getter Types
// -------------------------------------------------------------------------

export const COUNTER = 'COUNTER'

// -------------------------------------------------------------------------
// Define Getter Object
// -------------------------------------------------------------------------

export const getters = {
  [COUNTER](state: ExampleState): number {
    return state.counter
  },
}
