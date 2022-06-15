import { produce, Immutable } from 'immer'

export type Counter = Immutable<{
  count: number
}>

export const defaultCounter: Counter = {
  count: 0,
}

export function createCounter(counter?: Partial<Counter>): Counter {
  return produce(defaultCounter, (draft) => ({ ...draft, ...counter }))
}

export function increase(counter: Counter): Counter {
  return produce(counter, (draft) => {
    draft.count = draft.count + 1
  })
}

export function decrease(counter: Counter): Counter {
  return produce(counter, (draft) => {
    draft.count = draft.count - 1
  })
}
