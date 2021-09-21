import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkCreator } from '../../../../utils/lib/ThunkCreator'
import RestAPI from '../api'
import { ThunkError } from '../../../../app/entry/lib/types'

const GetUsersTC = createAsyncThunk<any, void, ThunkError>('Entity/Get', async (payload, thunkAPI) => {
  return await ThunkCreator({ apiMethod: RestAPI.get, payload }, thunkAPI)
})

export default GetUsersTC
