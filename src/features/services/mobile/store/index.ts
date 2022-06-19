import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Constants } from '../../../../constants'
import { initialState } from '../structure'

export const slice = createSlice({
  name: `[@${Constants.app.name} - Mobile - Service]`,
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
