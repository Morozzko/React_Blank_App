import { Mutex } from 'async-mutex'
import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_IP

const headers = {
  Authorization: '',
}

export const instance = axios.create({
  baseURL,
  headers,
})

// Создаем экземпляр Mutex
const mutex = new Mutex()

// Перехватчики запросов: Начало
instance.interceptors.request.use(config => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})
// Перехватчики запросов: Конец

// Перехватчики ответов: Начало
instance.interceptors.response.use(
  config => config,
  async error => {
    const request = error.config

    // Обработка 401 ошибки: Начало
    if (error.response.status === 401 && error.config && error.config.errorsCount !== 5) {
      // Если поток свободен: Начало
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        try {
          // Код для обновления токена
        } catch (e) {
          request.errorsCount = (request.errorsCount || 1) + 1
        } finally {
          // Освобождаем поток для следующих
          release()
        }
      }
      // Если поток свободен: Конец
      else {
        // Ждем разблокировки потока
        await mutex.waitForUnlock()
      }
      // Вызываем запрос повторно

      return instance.request(request)
    }
    // Обработка 401 ошибки: Конец

    // Если ошибка не обработана вернуть ошибку
    throw error
  }
)
// Перехватчики ответов: Конец
