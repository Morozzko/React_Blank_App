import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorType, RequestStatusType } from '../types';
import { v1 } from 'uuid';

const initialState = {
  status: 'idle' as RequestStatusType,
  message: '',
  errors: [] as ErrorType[],
};

export const slice = createSlice({
  name: `Condition`,
  initialState,
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
    },
    addAppErrors(state, action: PayloadAction<{ error: ErrorType | ErrorType[] }>) {
      if (Array.isArray(action.payload.error)) {
        const errors = action.payload.error.map(error => ({ ...error, id: v1(), date: new Date() }));
        state.errors = [...state.errors, ...errors];
      } else {
        const date = new Date();
        const id = v1();
        const error = { ...action.payload.error, date, id };
        state.errors = [...state.errors, error];
      }
    },
    removeError(state, action: PayloadAction<{ errorId: string }>) {
      state.errors = state.errors.filter(error => error.id !== action.payload.errorId);
    },
    setAppMessage(state, action: PayloadAction<{ message: string }>) {
      state.message = action.payload.message;
    },
  },
  extraReducers: builder => {},
});

export const asyncActions = {};
