import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkCreator } from '@functions/ThunkCreator'
import { ThunkErrorType } from '../../../../utils/lib/types/types'
import { RestAPI } from '../api'
import { name } from '../constants/name'

const typePrefix = `${name}/GetUsersTC`

export const GetUsersTC = createAsyncThunk<any, void, ThunkErrorType>(
	typePrefix,
	async (payload, thunkAPI) =>
		await ThunkCreator(
			{
				apiMethod: signal => RestAPI.get(payload, { signal }),
				requestKey: typePrefix,
			},
			thunkAPI
		)
)
