import { FunctionComponent, ReactNode } from 'react'

type ChildrenType = {
  children?: ReactNode
}

type MFPropsType = {
  basename?: string
}

declare global {
  // Function Component
  type FC<T = {}> = FunctionComponent<T & ChildrenType>

  // Container Component
  type CC<T = {}> = () => T

  // Service Component
  type SC = () => void

  type ImportedMF<T = {}> = FC<T & MFPropsType>

  type Nullable<T> = T | null | undefined

  type Callback<Value = void | unknown, ReturnType = void> = (
    value: Value
  ) => ReturnType

  type UnknownCallback = (...args: any[]) => any
}

// Экспорт, чтобы модуль не был пустым
export {}
