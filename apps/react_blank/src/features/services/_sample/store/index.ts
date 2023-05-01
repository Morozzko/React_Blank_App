import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { name } from '../constants/name'
import { initialState } from '../structure'
import { asyncActions } from '../thunks/io'

export const slice = createSlice({
	name,
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<typeof initialState.loading>) {
			state.loading = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(asyncActions.GetUsersTC.fulfilled, (state, action) => {
			// state.users = action.payload;
		})
	},
})

export const Actions = {
	...slice.actions,
	...asyncActions,
}

export const Reducer = slice.reducer
