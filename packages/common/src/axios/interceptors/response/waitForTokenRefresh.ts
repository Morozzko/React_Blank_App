import { eventTransfer, EventTransferActionsEnum } from '@rtkcd/event-bus'
import { AxiosInstance } from 'axios'

export const waitForTokenRefresh = async (
  error: any,
  mutex401: any,
  instance: AxiosInstance
) => {
  const request = error.config

  // Обработка 401 ошибки: Начало
  if (
    error.response.status === 401 &&
    error.config &&
    request.errorsCount !== 3
  ) {
    // Если поток свободен: Начало
    if (!mutex401.isLocked()) {
      const release = await mutex401.acquire()

      // Посылаем сигнал для обновления токена: Начало
      eventTransfer({
        name: EventTransferActionsEnum.AuthRefreshToken,
        data: {},
      })
      // Посылаем сигнал для обновления токена: Конец

      const waitForRefreshTokenHandler = async () => {
        release()
      }
      // Создаем обработчик для сигнала о том что токен обновлен: Начало
      window.addEventListener(
        EventTransferActionsEnum.RefreshTokenComplete,
        waitForRefreshTokenHandler
      )
      // Создаем обработчик для сигнала о том что токен обновлен: Конец
      request.errorsCount = (request.errorsCount || 1) + 1
      try {
        await mutex401.waitForUnlock()

        return instance.request(request)
      } catch (e) {
        console.log(e)
      } finally {
        // Снимаем обработчик из памяти
        window.removeEventListener(
          EventTransferActionsEnum.RefreshTokenComplete,
          waitForRefreshTokenHandler
        )
        // Освобождаем поток для следующих запросов
        release()
      }
    }
    // Если поток свободен: Конец
    else {
      // Ждем разблокировки потока
      await mutex401.waitForUnlock()
    }
    // Вызываем запрос повторно

    return instance.request(request)
  }
  // Обработка 401 ошибки: Конец

  // Если ошибка не обработана вернуть ошибку
  throw error
}
