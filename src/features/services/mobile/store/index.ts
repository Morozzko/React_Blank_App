import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from '../structure'

export const slice = createSlice({
  name: `[Static - Mobile Service]`,
  initialState,
  reducers: {
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload
    },
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
