import { reactive, readonly } from 'vue'

export abstract class Store<T extends Object> {
  protected state: T

  constructor() {
    const data = this.data()
    this.state = reactive(data) as T
  }

  protected abstract data(): T

  public getState(): T {
    return readonly(this.state) as T
  }
}
