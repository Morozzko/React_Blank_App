import { ThunkAPIType, handleAsyncServerAppError, handleAsyncServerNetworkError, handleSetAppStatus } from './AppStatusHandlers'

type ThunkCreatorType = {
  apiMethod: () => any
  status?: number
  errorCallback?: () => void
  customLoadingAction?: Function
}

export const ThunkCreator = async (creator: ThunkCreatorType, thunkAPI: ThunkAPIType) => {
  creator.status = creator.status ? creator.status : 200
  creator.customLoadingAction ? thunkAPI.dispatch(creator.customLoadingAction({ status: 'loading' })) : handleSetAppStatus('loading', thunkAPI)
  try {
    const res = await creator.apiMethod()
    if (res.status === creator.status) {
      creator.customLoadingAction ? thunkAPI.dispatch(creator.customLoadingAction({ status: 'succeeded' })) : handleSetAppStatus('succeeded', thunkAPI)
      return res.data
    } else {
      creator.errorCallback && creator.errorCallback()
      return handleAsyncServerAppError(res.data, thunkAPI)
    }
  } catch (error: any) {
    creator.errorCallback && creator.errorCallback()
    return handleAsyncServerNetworkError(error, thunkAPI)
  }
}
