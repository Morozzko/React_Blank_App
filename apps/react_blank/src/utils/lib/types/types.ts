export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type FieldErrorType = {
  field: string
  error: string
}

export type ThunkErrorType = {
  rejectValue: {
    errors: string[]
    fieldsErrors?: FieldErrorType[]
  }
}
