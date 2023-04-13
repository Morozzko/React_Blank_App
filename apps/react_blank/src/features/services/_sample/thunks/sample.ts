import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkCreator } from '@functions/ThunkCreator'
import { ThunkErrorType } from '../../../../utils/lib/types/types'
import { RestAPI } from '../api'
import { name } from '../constants/name'

export const GetUsersTC = createAsyncThunk<any, void, ThunkErrorType>(
  `${name}/GetUsersTC`,
  async (payload, thunkAPI) =>
    await ThunkCreator(
      {
        apiMethod: () => RestAPI.get(payload),
      },
      thunkAPI
    )
)
