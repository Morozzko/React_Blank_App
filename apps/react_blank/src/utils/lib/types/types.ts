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
