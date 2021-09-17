import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThunkError } from '../../../Core/App/types'
import { ThunkCreator } from '../../../../utils/lib/ThunkCreator'
import { RestAPI } from '../Api'

const initialState = {
  sample: '',
}

export const GetUsersTC = createAsyncThunk<any, void, ThunkError>('Entity/Get', async (payload, thunkAPI) => {
  return await ThunkCreator({ apiMethod: RestAPI.get, payload }, thunkAPI)
})

export const slice = createSlice({
  name: `Sample`,
  initialState,
  reducers: {
    // setJWT(state, action: PayloadAction<{ users: usersArrtayType[] }>) {
    //     state.users = action.payload.users;
    // },
  },
  extraReducers: builder => {
    builder.addCase(GetUsersTC.fulfilled, (state, action) => {
      // state.users = action.payload;
    })
  },
})

export const asyncActions = {
  GetUsersTC,
}

export const localActions = {
  ...slice.actions,
  ...asyncActions,
}
