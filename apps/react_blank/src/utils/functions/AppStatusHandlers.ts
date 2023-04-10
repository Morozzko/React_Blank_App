import { Dispatch } from 'redux'
import { Actions as condition } from '@services/condition'
import { RequestStatusType } from '../lib/types/types'

export type ThunkAPIType = {
  dispatch: Dispatch
  rejectWithValue: Function
}

export const handleSetAppStatus = (status: RequestStatusType, thunkAPI: ThunkAPIType) => {
  thunkAPI.dispatch(condition.setAppStatus({ status }))
}

export const handleThunkError = ({ showNotify = true, message = 'Error' }, thunkAPI: ThunkAPIType) => {
  if (showNotify) {
    thunkAPI.dispatch(
      condition.enqueueNotification({
        variant: 'error',
        message,
      })
    )
  }
  handleSetAppStatus('failed', thunkAPI)

  return thunkAPI.rejectWithValue({})
}

export const handleThunkSuccess = ({ showNotify = true, message = 'Success' }, thunkAPI: ThunkAPIType) => {
  if (showNotify) {
    thunkAPI.dispatch(
      condition.enqueueNotification({
        variant: 'success',
        message,
      })
    )
  }
  handleSetAppStatus('succeeded', thunkAPI)
}
