import { ActionContext, ActionTree } from 'vuex'

import { ExampleState } from './example.state'

// -------------------------------------------------------------------------
// Define Types & Interfaces
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Define Action Types
// -------------------------------------------------------------------------

export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'

// -------------------------------------------------------------------------
// Define Action Object
// -------------------------------------------------------------------------

export const actions: ActionTree<ExampleState, ExampleState> = {
  [INCREASE]({ commit }: ActionContext<ExampleState, ExampleState>): void {
    commit(INCREASE)
  },
  [DECREASE]({ commit }: ActionContext<ExampleState, ExampleState>): void {
    commit(DECREASE)
  },
}
