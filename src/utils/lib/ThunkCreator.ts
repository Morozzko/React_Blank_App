import { handleSetAppStatus, handleThunkError, handleThunkSuccess, ThunkAPIType } from './AppStatusHandlers'

type ThunkCreatorType = {
  apiMethod: () => any
  status?: number
  errorCallback?: () => void
  notification?: {
    hideSuccess?: boolean
    hideError?: boolean
    notifySuccess?: string
    notifyError?: string
  }
}

export const ThunkCreator = async (creator: ThunkCreatorType, thunkAPI: ThunkAPIType) => {
  creator.status = creator.status ? creator.status : 200
  handleSetAppStatus('loading', thunkAPI)
  try {
    const res = await creator.apiMethod()

    if (res.status === creator.status) {
      handleThunkSuccess({ showNotify: !creator.notification?.hideSuccess, message: creator.notification?.notifySuccess }, thunkAPI)
      return res.data
    }
  } catch (error: any) {
    creator.errorCallback && creator.errorCallback()
    return handleThunkError({ showNotify: !creator.notification?.notifyError, message: creator.notification?.notifyError || error }, thunkAPI)
  }
}
