import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from '../structure'
import { Constants } from '../../../../constants'

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
