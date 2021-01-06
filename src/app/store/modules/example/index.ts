import { Module } from "vuex";
import { actions, INCREASE, DECREASE } from "./example.actions";
import { getters, COUNTER } from "./example.getters";
import { mutations } from "./example.mutations";
import { initialState, ExampleState } from "./example.state";

// -------------------------------------------------------------------------
// Export Types & Interfaces
// -------------------------------------------------------------------------

export * from "./example.state";

// -------------------------------------------------------------------------
// Define Namespace, Actions & Getters
// -------------------------------------------------------------------------

export const ExampleNamespace = "EXAMPLE";

export const ExampleActions = {
  Increase: `${ExampleNamespace}/${INCREASE}`,
  Decrease: `${ExampleNamespace}/${DECREASE}`,
};

export const ExampleGetters = {
  Counter: `${ExampleNamespace}/${COUNTER}`,
};

// -------------------------------------------------------------------------
// Export Store
// -------------------------------------------------------------------------

export const example: Module<ExampleState, any> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
