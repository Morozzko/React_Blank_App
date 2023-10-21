import { InternalAxiosRequestConfig } from 'axios'

export const addTokenInterceptor = (
  config: InternalAxiosRequestConfig<any>
) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
}
