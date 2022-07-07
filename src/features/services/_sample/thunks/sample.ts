import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkError } from '../../../../app/entry/lib/types'
import { ThunkCreator } from '../../../../utils/lib/ThunkCreator'
import { RestAPI } from '../api'
import { name } from '../store'

export const GetUsersTC = createAsyncThunk<any, void, ThunkError>(`${name}/GetUsersTC`, async (payload, thunkAPI) => {
  return await ThunkCreator(
    {
      apiMethod: () => RestAPI.get(payload),
    },
    thunkAPI
  )
})
