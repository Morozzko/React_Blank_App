import { NotificationType, RequestStatusType } from '../lib/types'

const initialState = {
  status: 'idle' as RequestStatusType,
  notifications: [] as NotificationType[],
}

export default initialState
