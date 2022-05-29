import { DomainError } from '../../lib'

export class MinShoppingCartItemAmountError extends DomainError {
  constructor(...params: any[]) {
    super('MinShoppingCartItemAmountError', ...params)
  }
}
