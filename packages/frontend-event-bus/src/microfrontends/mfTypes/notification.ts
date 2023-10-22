export type NotificationMFMessageType =
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'text'

export type NotificationMFTableType = {
  columns: any[]
  rows: any[]
}
