import lodashClone from 'lodash.clone'

export const clone = lodashClone

export abstract class DomainModel<E> {
  toObject(): E {
    return clone<E>(this as any)
  }
}

export class DomainError extends Error {
  constructor(name: string, ...params: any[]) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DomainError)
    }

    this.name = name
  }
}

export interface UseCase<Context, TValue, TError = string> {
  execute(context: Context): Promise<Result<TValue, TError>>
}

export class Result<TValue, TError = string> {
  public readonly isSuccess: boolean
  public readonly isFailure: boolean
  public readonly _error: TError
  private _value: TValue

  public constructor(
    isSuccess: boolean,
    error: F | null,
    value: TValue | null,
  ) {
    if (isSuccess && error) {
      console.error(
        'InvalidOperation: A result cannot be successful and contain an error',
      )
      this.printError()
    }
    if (!isSuccess && !error) {
      console.error(
        'InvalidOperation: A failing result needs to contain an error message',
      )
      this.printError()
    }

    this.isSuccess = isSuccess
    this.isFailure = !isSuccess
    this._error = error as TError
    this._value = value as TValue

    Object.freeze(this)
  }

  private printError(): void {
    let match: any
    const stack = new Error().stack ?? ''
    try {
      // eslint-disable-next-line no-useless-escape
      match = stack.match(/at Object\.\<anonymous\> \(.*/)
    } catch {
      // eslint-disable-next-line no-regex-spaces
      match = stack.match(/  at\s.*  /)
    }
    console.error(match[0])
  }

  public value(): TValue {
    if (!this.isSuccess) {
      console.error(
        'Can not get the value of an error result. Use errorValue instead.',
      )
      console.error(JSON.stringify(this))
      this.printError()
    }
    return this._value
  }

  public error(): string {
    const isErrorString = typeof this._error === 'string'
    if (!isErrorString) {
      return JSON.stringify(this._error)
    } else {
      return String(this._error)
    }
  }

  public static ok<U = void, F = string>(value?: U): Result<U, F> {
    return new Result<U, F>(true, null, value ?? null)
  }

  public static fail<U = void, F = string>(error: F): Result<U, F> {
    return new Result<U, F>(false, error, null)
  }

  public static combine<T = unknown, F = unknown>(
    results: Result<T, F>[],
  ): Result<T, F> {
    for (const result of results) {
      if (result.isFailure) return result
    }
    if (results.length > 0) {
      return results[0]
    } else {
      return Result.ok<T, F>({} as unknown as T)
    }
  }
}
