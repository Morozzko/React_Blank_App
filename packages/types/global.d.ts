declare global {
  type Nullable<T> = T | null | undefined

  type Callback<Value = void | unknown, ReturnType = void> = (
    value: Value
  ) => ReturnType

  type UnknownCallback = (...args: any[]) => any
}

// Экспорт, чтобы модуль не был пустым
export {}
