import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      counter: 0,
    }
  },
  actions: {
    increment() {
      this.counter++
    },
  },
})
