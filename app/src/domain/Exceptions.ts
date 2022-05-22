export class CustomError extends Error {
  constructor(name: string, ...params: any[]) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = name
  }
}

export class MaxShoppingCartItemAmountException extends CustomError {
  constructor(...params: any[]) {
    super('MaxShoppingCartItemAmountException', ...params)
  }
}

export class MinShoppingCartItemAmountException extends CustomError {
  constructor(...params: any[]) {
    super('MinShoppingCartItemAmountException', ...params)
  }
}

export class EmptyShoppingCartException extends CustomError {
  constructor(...params: any[]) {
    super('EmptyShoppingCartException', ...params)
  }
}
