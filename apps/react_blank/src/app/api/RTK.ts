import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { instance } from '@app/api/axios'

const axiosBaseQuery =
	(): BaseQueryFn<
		{
			url: string
			method?: AxiosRequestConfig['method']
			body?: AxiosRequestConfig['data']
			params?: AxiosRequestConfig['params']
		},
		unknown,
		unknown
	> =>
	async ({ url, method = 'get', body: data, params }) => {
		try {
			const result = await instance({
				url: url,
				method,
				data,
				params,
			})

			return { data: result.data }
		} catch (axiosError) {
			const err = axiosError as AxiosError

			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
	baseQuery: axiosBaseQuery(),
	reducerPath: 'reducer',
	endpoints: () => ({}),
})
