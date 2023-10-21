import { waitForTokenRefresh } from '@npm.piece/common'
import { Mutex } from 'async-mutex'
import axios from 'axios'

// Получение ссылки на backend из local environment
const baseURL = process.env.REACT_APP_BACKEND_IP

// Объявление изначальных Headers
const headers = {
  Authorization: '',
  withCredentials: true,
}

// Создание единого экземпляра axios: Начало
export const instance = axios.create({
  baseURL,
  headers,
})
// Создание единого экземпляра axios: Конец

// Создаем экземпляр Mutex
// Для другого перехватчика, лучше создать отдельный экземпляр
const mutex401 = new Mutex()

// Перехватчики запросов: Начало
instance.interceptors.request.use(config => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`

  config.headers!['Content-Type'] = 'application/x-www-form-urlencoded'

  config.data = new URLSearchParams(config.data).toString()

  return config
})
// Перехватчики запросов: Конец

// Перехватчики ответов: Начало
instance.interceptors.response.use(
  config => config,
  error => waitForTokenRefresh(error, mutex401, instance)
)
// Перехватчики ответов: Конец
