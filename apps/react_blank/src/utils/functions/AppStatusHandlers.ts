import { Dispatch } from 'redux'
import { Actions as condition } from '@services/condition'

export type ThunkAPIType = {
  dispatch: Dispatch
  rejectWithValue: Function
}
type ThunkHelperPayloadType = {
  message?: string
}
export const handleThunkError = ({ message }: ThunkHelperPayloadType, thunkAPI: ThunkAPIType) => {
  if (message) {
    thunkAPI.dispatch(
      condition.enqueueNotification({
        variant: 'error',
        message,
      })
    )
  }

  return thunkAPI.rejectWithValue({})
}

export const handleThunkSuccess = ({ message }: ThunkHelperPayloadType, thunkAPI: ThunkAPIType) => {
  if (message) {
    thunkAPI.dispatch(
      condition.enqueueNotification({
        variant: 'success',
        message,
      })
    )
  }
}
