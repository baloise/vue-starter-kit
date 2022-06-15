import { Counter, decrease } from '../models/Counter'
import { Result, UseCase } from '@baloise/web-app-clean-architecture'

interface Context {
  counter: Counter
}

export class CounterDecreaseUseCase implements UseCase<Context, Counter> {
  async execute({ counter }: Context): Promise<Result<Counter, string>> {
    try {
      const newCounter = decrease(counter)
      return Result.ok(newCounter)
    } catch (error) {
      return Result.fail('Could not decrease counter')
    }
  }
}
