import { DomainError } from '../../lib'

export class MaxShoppingCartItemAmountError extends DomainError {
  constructor(...params: any[]) {
    super('MaxShoppingCartItemAmountError', ...params)
  }
}
