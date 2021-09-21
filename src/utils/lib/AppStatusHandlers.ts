import { AxiosError } from 'axios'
import { Dispatch } from 'redux'
import { RequestStatusType, ResponseType } from '../../app/entry/lib/types'
import { condition } from '../../features/services/condition'

export type ThunkAPIType = {
  dispatch: Dispatch
  rejectWithValue: Function
}

export const handleSetAppStatus = (status: RequestStatusType, thunkAPI: ThunkAPIType) => {
  thunkAPI.dispatch(condition.Actions.setAppStatus({ status }))
}

export const handleAsyncServerAppError = <D>(data: ResponseType<D>, thunkAPI: ThunkAPIType, showError = true) => {
  if (showError) {
    thunkAPI.dispatch(
      condition.Actions.enqueueNotification({
        variant: 'error',
        message: data.message ? data.message : 'Some error occurred',
      })
    )
  }
  thunkAPI.dispatch(condition.Actions.setAppStatus({ status: 'failed' }))

  return thunkAPI.rejectWithValue({
    errors: data.message,
    fieldsErrors: undefined,
  })
}

export const handleAsyncServerNetworkError = (error: AxiosError, thunkAPI: ThunkAPIType, showError = true) => {
  if (showError) {
    thunkAPI.dispatch(
      condition.Actions.enqueueNotification({
        variant: 'error',
        message: error.message,
      })
    )
  }
  thunkAPI.dispatch(condition.Actions.setAppStatus({ status: 'failed' }))

  return thunkAPI.rejectWithValue({
    errors: [error.message],
    fieldsErrors: undefined,
  })
}
