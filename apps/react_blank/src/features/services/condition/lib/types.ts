export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type NotificationType = {
  key: string
  date: Date | string
  message: string
  options: {
    onClose?: never
    variant: 'warning' | 'success' | 'error' | 'info'
  }
}
export type NotificationPayloadType = {
  message: string
  variant: 'warning' | 'success' | 'error' | 'info'
}
