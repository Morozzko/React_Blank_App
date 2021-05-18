import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationPayloadType, NotificationType, RequestStatusType } from '../types';
import { v1 } from 'uuid';
import { SnackbarKey } from 'notistack';

const initialState = {
  status: 'idle' as RequestStatusType,
  notifications: [] as NotificationType[],
};

export const slice = createSlice({
  name: `Condition`,
  initialState,
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
    },
    enqueueNotification(state, action: PayloadAction<NotificationPayloadType>) {
      const date = new Date();
      const key = v1();
      const notification: NotificationType = {
        message: action.payload.message,
        date,
        key,
        options: {
          variant: action.payload.variant,
        },
      };
      state.notifications = [...state.notifications, notification];
    },
    enqueueSuccessNotification(state, action: PayloadAction<string>) {
      const date = new Date();
      const key = v1();
      const notification: NotificationType = {
        message: action.payload,
        date,
        key,
        options: {
          variant: 'success',
        },
      };

      state.notifications = [...state.notifications, notification];
    },
    removeNotification(state, action: PayloadAction<{ notificationId: SnackbarKey }>) {
      state.notifications = state.notifications.filter(notification => notification.key != action.payload.notificationId);
    },
  },
  extraReducers: builder => {},
});

export const asyncActions = {};
