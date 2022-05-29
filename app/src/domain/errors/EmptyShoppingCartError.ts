import { DomainError } from '../../lib'

export class EmptyShoppingCartError extends DomainError {
  constructor(...params: any[]) {
    super('EmptyShoppingCartError', ...params)
  }
}
