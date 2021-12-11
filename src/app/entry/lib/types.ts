import { FC } from 'react'

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

export type RouterComponentType = {
  path: string
  component: FC | JSX.Element
}
