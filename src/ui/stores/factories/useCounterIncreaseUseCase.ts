import { CounterIncreaseUseCase } from '@/core/use-cases/CounterIncrease.case'

export function useCounterIncreaseUseCase(): CounterIncreaseUseCase {
  return new CounterIncreaseUseCase()
}
