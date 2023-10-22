import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { name } from '../constants/name'
import { initialState } from '../structure'

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setDarkThemeMode(
      state,
      action: PayloadAction<typeof initialState.isDarkTheme>
    ) {
      state.isDarkTheme = action.payload
    },
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
