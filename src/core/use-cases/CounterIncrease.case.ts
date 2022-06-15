import { Counter, increase } from './../models/Counter'
import { Result, UseCase } from '@baloise/web-app-clean-architecture'

interface Context {
  counter: Counter
}

export class CounterIncreaseUseCase implements UseCase<Context, Counter> {
  async execute({ counter }: Context): Promise<Result<Counter, string>> {
    try {
      const newCounter = increase(counter)
      return Result.ok(newCounter)
    } catch (error) {
      return Result.fail('Could not increase counter')
    }
  }
}
