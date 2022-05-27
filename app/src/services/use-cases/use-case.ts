export interface Callback<
  SuccessContext = unknown,
  ErrorContext = unknown | Error,
> {
  onSuccess: (context: SuccessContext) => void
  onError: (error: ErrorContext) => void
}

export interface UseCase<
  Context = Record<string, unknown>,
  SuccessContext = unknown,
  ErrorContext = unknown | Error,
> {
  (context: Context, callback: Callback<SuccessContext, ErrorContext>): void
}
