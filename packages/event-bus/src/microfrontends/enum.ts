import { ReactNode } from 'react'
import { NotificationMFMessageType, NotificationMFTableType } from './mfTypes'

export enum EventTransferActionsEnum {
  RootCloseMenu = 'RootCloseMenu',
  // Обновление токена: Начало
  AuthRefreshToken = 'AuthRefreshToken',
  RefreshTokenComplete = 'RefreshTokenComplete',
  AuthSetCodeExchange = 'AuthSetCodeExchange',
  NavigateToAuth = 'NavigateToAuth',
  // Обновление токена: Конец

  IsShowTopNavbar = 'IsShowTopNavbar',
  IsTablePresentation = 'IsTablePresentation',
  AddPopupData = 'AddPopupData',
}

export type EventTransferPayloadType = {
  [EventTransferActionsEnum.RootCloseMenu]: { isClosed: boolean }
  [EventTransferActionsEnum.AuthRefreshToken]: {}
  [EventTransferActionsEnum.RefreshTokenComplete]: {}
  [EventTransferActionsEnum.NavigateToAuth]: {}
  [EventTransferActionsEnum.AuthSetCodeExchange]: {
    codeForExchange: string
  }
  [EventTransferActionsEnum.IsShowTopNavbar]: { isShow: boolean }
  [EventTransferActionsEnum.IsTablePresentation]: { isTable: boolean }
  [EventTransferActionsEnum.AddPopupData]: {
    title: string
    type: NotificationMFMessageType
    message: string
    table?: NotificationMFTableType
    component?: ReactNode
  } | null
}
