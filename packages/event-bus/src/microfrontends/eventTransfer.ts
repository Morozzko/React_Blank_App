import { EventTransferActionsEnum, EventTransferPayloadType } from './enum'

type EventTransferGenericPayloadType<T extends EventTransferActionsEnum> = {
  data: EventTransferPayloadType[T]
  isDebugMode?: boolean
  name: T
}

// Закрытие меню: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.RootCloseMenu>
): void
// Закрытие меню: Конец

// Обновление токена: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.AuthRefreshToken>
): void
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.RefreshTokenComplete>
): void
// Обновление токена: Конец

// Вызов модального окна с информацией: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.AddPopupData>
): void
// Вызов модального окна с информацией: Конец

// Получение токена из interceptor: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.AuthSetCodeExchange>
): void
// Получение токена из interceptor: Конец

// Редирект из interceptor: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.NavigateToAuth>
): void
// Редирект из interceptor: Конец

// Показать навбар карточек: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.IsShowTopNavbar>
): void
// Показать навбар карточек: Конец

// Показать главную страницу в виде таблицы: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.IsTablePresentation>
): void
// Показать главную страницу в виде таблицы: Конец

// Основная функция: Начало
export function eventTransfer<T extends EventTransferActionsEnum>({
  data,
  name,
  isDebugMode,
}: EventTransferGenericPayloadType<T>): void {
  const type = name as string // Приведение типа, так как name может быть объектом

  const event = new CustomEvent(type, { detail: { data } })

  dispatchEvent(event)

  if (isDebugMode) {
    console.log('Event type:', type, '\nevent.detail.data: ', data)
  }
}
// Основная функция: Конец
