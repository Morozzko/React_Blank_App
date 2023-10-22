import { EventTransferActionsEnum } from './enum'
import { EventTransferGenericPayloadType } from './mfTypes'

// Обновление токена: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.AuthRefreshToken>
): void
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.RefreshTokenComplete>
): void
// Обновление токена: Конец

// Редирект из interceptor: Начало
export function eventTransfer(
  payload: EventTransferGenericPayloadType<EventTransferActionsEnum.NavigateToAuth>
): void
// Редирект из interceptor: Конец

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
