import { Constants } from '../../../../constants'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from '../structure'

export const slice = createSlice({
  name: `[@${Constants.app.name} - Sample - Widget]`,
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
