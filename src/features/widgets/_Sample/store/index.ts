import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../structure'
import { name } from '../constants/name'

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ sample: string }>) {
      state.sample = action.payload.sample
    },
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
