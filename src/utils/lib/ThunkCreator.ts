import { handleAsyncServerAppError, handleAsyncServerNetworkError, handleSetAppStatus, ThunkAPIType } from './AppStatusHandlers'

export const ThunkCreator = async (
  creator: { param?: any; apiMethod: (param: any) => any; status?: number; errorCallback?: () => void },
  thunkAPI: ThunkAPIType
) => {
  creator.status = creator.status ? creator.status : 200
  handleSetAppStatus('loading', thunkAPI)
  try {
    const res = await creator.apiMethod(creator.param)
    if (res.status === creator.status) {
      handleSetAppStatus('succeeded', thunkAPI)
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