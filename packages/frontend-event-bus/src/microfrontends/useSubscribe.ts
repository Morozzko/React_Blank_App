import { useEffect } from 'react'
import { EventTransferActionsEnum } from './enum'
import { SubscribeType } from './mfTypes'

// Перегрузка для обновления токена: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.AuthRefreshToken>
): void

export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.RefreshTokenComplete>
): void
// Перегрузка для обновления токена: Конец

// Перегрузка для редиректа из interceptor: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.NavigateToAuth>
): void
// Перегрузка для редиректа из interceptor: Конец

// Основная реализация: Начало
export function useSubscribe<T extends EventTransferActionsEnum>(
  payload: SubscribeType<T>
): void {
  const { type, callback, isDebugMode } = payload

  const eventHandler = (event: CustomEvent) => {
    if (isDebugMode) {
      console.log(event.detail.data)
    }
    callback(event.detail.data)
  }

  useEffect(() => {
    window.addEventListener(type, eventHandler as EventListener)
    if (isDebugMode) {
      console.log('Subscribe: ', type)
    }

    return () => {
      window.removeEventListener(type, eventHandler as EventListener)
      if (isDebugMode) {
        console.log('Unsubscribe: ', type)
      }
    }
  }, [])
}
// Основная реализация: Конец
