import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'

const baseUrl = process.env.REACT_APP_BACKEND_IP

const refreshPath = ''

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, api) => {
    headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)

    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(refreshPath, api, extraOptions)
    if (refreshResult.data) {
      // store the new token
      // api.dispatch(tokenReceived(refreshResult.data))
      localStorage.setItem('token', JSON.stringify(refreshResult.data))
      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      // api.dispatch(loggedOut())
    }
  }
  return result
}

const Api = createApi({
  reducerPath: 'BaseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['BaseApi'],
  endpoints: build => ({}),
})

export default baseQueryWithReauth
