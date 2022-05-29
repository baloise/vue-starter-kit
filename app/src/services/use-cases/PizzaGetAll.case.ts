import { PizzaApi } from '../interfaces/PizzaApi'
import { Pizza } from '../../domain/entities/Pizza.entity'
import { PizzaModel } from '../../domain/models/Pizza.model'
import { Result, UseCase } from '../../lib'

interface Context {}

export class PizzaGetAllUseCase implements UseCase<Context, Pizza[]> {
  constructor(private readonly api: PizzaApi) {}

  async execute(): Promise<Result<PizzaModel[], string>> {
    const result = await this.api.getAll()

    if (result.isSuccess) {
      const json = await result.value()
      const pizzas = json.map((item) => PizzaModel.create(item))
      return Result.ok(pizzas)
    } else {
      return Result.fail('Could not load pizzas form server')
    }
  }
}
