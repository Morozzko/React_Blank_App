import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { name } from '../constants/name'
import { initialState } from '../structure'
import { asyncActions } from '../thunks/export'

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<typeof initialState.loading>) {
      state.loading = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(asyncActions.GetUsersTC.fulfilled, (state, action) => {
        // state.users = action.payload;
        state.loading = false
      })
      .addCase(asyncActions.GetUsersTC.pending, state => {
        state.loading = true
      })
      .addCase(asyncActions.GetUsersTC.rejected, state => {
        state.loading = false
      })
  },
})

export const Actions = {
  ...slice.actions,
  ...asyncActions,
}

export const Reducer = slice.reducer
