import { CounterDecreaseUseCase } from '@/core/use-cases/CounterDecrease.case'

export function useCounterDecreaseUseCase(): CounterDecreaseUseCase {
  return new CounterDecreaseUseCase()
}
