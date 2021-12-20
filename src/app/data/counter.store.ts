import { Store } from './store'

export interface CounterState extends Object {
  count: number
}

export class CounterStore extends Store<CounterState> {
  protected data(): CounterState {
    return {
      count: 0,
    }
  }

  increase(): void {
    this.state.count++
  }
}

export const counterStore: CounterStore = new CounterStore()
