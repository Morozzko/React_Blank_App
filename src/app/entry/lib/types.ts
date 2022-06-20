import { ReactNode } from 'react'

enum ResultCodeEnum {
  ERROR,
  SUCCESS,
  NOT_FOUND,
}

export type ResponseType<D> = {
  data: D
  ResultCode: ResultCodeEnum
  message: string
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type FieldErrorType = {
  field: string
  error: string
}

export type ThunkError = {
  rejectValue: {
    errors: string[]
    fieldsErrors?: FieldErrorType[]
  }
}

export type RouterType = Partial<RouterComponentType>

export type RouterComponentType = {
  id: string
  path: string
  element: ReactNode
  index: boolean
  child: RouterType[]
}
