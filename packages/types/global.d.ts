import { FunctionComponent, ReactNode } from 'react'

type ChildrenType = {
  children?: ReactNode
}

declare global {
  // Function Component
  type FC<T = {}> = FunctionComponent<T & ChildrenType>
  // Container Component
  type CC<T = {}> = () => T

  type Nullable<T> = T | null | undefined

  type Callback<Value = void | unknown, ReturnType = void> = (
    value: Value
  ) => ReturnType
  type UnknownCallback = (...args: any[]) => any
}

// Экспорт, чтобы модуль не был пустым
export {}
