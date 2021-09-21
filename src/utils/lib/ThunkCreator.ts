import { handleAsyncServerAppError, handleAsyncServerNetworkError, handleSetAppStatus, ThunkAPIType } from './AppStatusHandlers'
import { Action, AnyAction } from 'redux'

type ThunkCreatorType = {
  payload?: any
  apiMethod: (param: any) => any
  status?: number
  errorCallback?: () => void
  customLoadingAction?: Function
}

export const ThunkCreator = async (creator: ThunkCreatorType, thunkAPI: ThunkAPIType) => {
  creator.status = creator.status ? creator.status : 200
  creator.customLoadingAction ? thunkAPI.dispatch(creator.customLoadingAction({ status: 'loading' })) : handleSetAppStatus('loading', thunkAPI)
  try {
    const res = await creator.apiMethod(creator.payload)
    if (res.status === creator.status) {
      creator.customLoadingAction ? thunkAPI.dispatch(creator.customLoadingAction({ status: 'succeeded' })) : handleSetAppStatus('succeeded', thunkAPI)
      return res.data
    } else {
      creator.errorCallback && creator.errorCallback()
      return handleAsyncServerAppError(res.data, thunkAPI)
    }
  } catch (error) {
    creator.errorCallback && creator.errorCallback()
    return handleAsyncServerNetworkError(error, thunkAPI)
  }
}
