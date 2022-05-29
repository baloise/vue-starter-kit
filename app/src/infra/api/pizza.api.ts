import { HttpRequestConfig } from '../../lib/http/http'

class PizzaApi {
  public defaults: HttpRequestConfig = {}

  getAll() {
    return {
      ...this.defaults,
      url: `/pizzas`,
    }
  }
}

export const pizzaApi = new PizzaApi()
