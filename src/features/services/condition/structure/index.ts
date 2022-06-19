import { NotificationType, RequestStatusType } from '../lib/types'

export const initialState = {
  status: 'idle' as RequestStatusType,
  notifications: [] as NotificationType[],
}
