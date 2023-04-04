import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkCreator } from '../../../../utils/functions/ThunkCreator'
import { ThunkError } from '../../../../utils/lib/types/types'
import { RestAPI } from '../api'
import { name } from '../constants/name'

export const GetUsersTC = createAsyncThunk<any, void, ThunkError>(
  `${name}/GetUsersTC`,
  async (payload, thunkAPI) =>
    await ThunkCreator(
      {
        apiMethod: () => RestAPI.get(payload),
      },
      thunkAPI
    )
)
