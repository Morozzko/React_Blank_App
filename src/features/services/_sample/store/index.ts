import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../structure'
import { asyncActions } from '../thunks/io'
import { name } from '../constants/name'

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ sample: string }>) {
      state.sample = action.payload.sample
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncActions.GetUsersTC.fulfilled, (state, action) => {
      // state.users = action.payload;
    })
  },
})

export const Actions = {
  ...slice.actions,
  ...asyncActions,
}

export const Reducer = slice.reducer
