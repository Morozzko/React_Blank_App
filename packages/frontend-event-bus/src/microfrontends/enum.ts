export enum EventTransferActionsEnum {
  // Обновление токена: Начало
  AuthRefreshToken = 'AuthRefreshToken',
  RefreshTokenComplete = 'RefreshTokenComplete',
  NavigateToAuth = 'NavigateToAuth',
  // Обновление токена: Конец
}

export type EventTransferPayloadType = {
  [EventTransferActionsEnum.AuthRefreshToken]: {}
  [EventTransferActionsEnum.RefreshTokenComplete]: {}
  [EventTransferActionsEnum.NavigateToAuth]: {}
}
