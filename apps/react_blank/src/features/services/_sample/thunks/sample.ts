import { createAsyncThunk } from '@reduxjs/toolkit'
import { CreateThunkType, ThunkCreator } from '@functions/ThunkCreator'
import { RestAPI } from '../api'
import { name } from '../constants/name'

const typePrefix = `${name}/GetUsersTC`
type ThunkType = CreateThunkType<typeof RestAPI.get>

export const GetUsersTC = createAsyncThunk<
	ThunkType['Return'],
	ThunkType['Payload'],
	ThunkType['Error']
>(
	typePrefix,
	async (payload, thunkAPI) =>
		await ThunkCreator(
			{
				apiMethod: signal => RestAPI.get(...payload, { signal }),
				requestKey: typePrefix,
			},
			thunkAPI
		)
)
