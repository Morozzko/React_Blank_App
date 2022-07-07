import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Constants } from '../../../../constants'
import { initialState } from '../structure'

export const name = `[@${Constants.app.name} - Mobile - Service]`

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
