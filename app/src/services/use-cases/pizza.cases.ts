import { Pizza } from '../../domain/Pizza'
import { UseCase } from './use-case'
import { HttpAdapter } from '../../infra/api/http/http'

interface Context {
  http: HttpAdapter
  pizzas: Pizza[]
}

interface SuccessContext {
  pizzas: Pizza[]
}

export const getAllPizzasUseCase: UseCase<Context, SuccessContext> = async (
  { http, pizzas },
  { onSuccess, onError },
) => {
  const response = await http.get<Pizza[]>('/pizzas')

  if (response.ok) {
    const json = await response.json()
    pizzas = json.map(
      (item) => new Pizza(item.name, item.description, item.price, item.image),
    )
    onSuccess({ pizzas })
  } else {
    onError(response.status)
  }
}
