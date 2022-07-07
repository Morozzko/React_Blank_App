import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Constants } from '../../../../constants'
import { initialState } from '../structure'

export const name = `[@${Constants.app.name} - Sample - Widget]`

export const slice = createSlice({
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
