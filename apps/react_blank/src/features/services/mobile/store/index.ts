import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { name } from '../constants/name'
import { initialState } from '../structure'

const slice = createSlice({
	name,
	initialState,
	reducers: {
		setIsMobile(state, action: PayloadAction<typeof initialState.isMobile>) {
			state.isMobile = action.payload
		},
	},
})

export const Actions = {
	...slice.actions,
}

export const Reducer = slice.reducer
