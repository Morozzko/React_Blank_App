import { useEffect } from 'react'
import { EventTransferActionsEnum, EventTransferPayloadType } from './enum'

type SubscribeType<T extends EventTransferActionsEnum> = {
  type: T
  callback: (value: EventTransferPayloadType[T]) => void
  isDebugMode?: boolean
}

// Перегрузка для открытия и закрытия меню: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.RootCloseMenu>
): void
// Перегрузка для открытия и закрытия меню: Конец

// Перегрузка для обновления токена: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.AuthRefreshToken>
): void

export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.RefreshTokenComplete>
): void
// Перегрузка для обновления токена: Конец

// Перегрузка для получения информации в модальное окно: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.AddPopupData>
): void
// Перегрузка для получения информации в модальное окно: Конец

// Перегрузка для показа скрытия навигационного меню в карточке: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.IsShowTopNavbar>
): void
// Перегрузка для показа скрытия навигационного меню в карточке: Конец

// Перегрузка для получения токена из interceptor: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.AuthSetCodeExchange>
): void
// Перегрузка для получения токена из interceptor: Конец

// Перегрузка для редиректа из interceptor: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.NavigateToAuth>
): void
// Перегрузка для редиректа из interceptor: Конец

// Перегрузка для переключения представления главной страницы: Начало
export function useSubscribe(
  payload: SubscribeType<EventTransferActionsEnum.IsTablePresentation>
): void
// Перегрузка для переключения представления главной страницы: Конец

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
