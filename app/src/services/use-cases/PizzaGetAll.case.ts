import { Pizza } from '../../domain/entities/Pizza.entity'
import { PizzaModel } from '../../domain/models/Pizza.model'
import { HttpAdapter } from '../../lib/http/http'
import { Result, UseCase } from '../../lib'

interface Context {}

export class PizzaGetAllUseCase implements UseCase<Context, Pizza[]> {
  constructor(private readonly http: HttpAdapter) {}

  async execute(): Promise<Result<PizzaModel[], string>> {
    const response = await this.http.get<Pizza[]>('/pizzas')

    if (response.ok) {
      const json = await response.json()
      const pizzas = json.map((item) => PizzaModel.create(item))
      return Result.ok(pizzas)
    } else {
      return Result.fail('Could not load pizzas form server')
    }
  }
}
