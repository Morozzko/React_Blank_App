import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkError } from '../../../../app/entry/lib/types'
import { ThunkCreator } from '../../../../utils/lib/ThunkCreator'
import { RestAPI } from '../api'

export const GetUsersTC = createAsyncThunk<any, void, ThunkError>('Entity/Get', async (payload, thunkAPI) => {
  return await ThunkCreator(
    {
      apiMethod: () => RestAPI.get(payload),
    },
    thunkAPI
  )
})
