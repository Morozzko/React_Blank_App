import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../structure'
import { name } from '../constants/name'

export const slice = createSlice({
  name,
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
