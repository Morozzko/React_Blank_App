import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkError } from '../../../Core/App/types';
import { ThunkCreator } from '../../../../utils/redux-utils';
import { UniversalApi } from '../Api';

export type usersArrtayType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const initialState = {
  users: [] as usersArrtayType[],
};

export const GetUsersTC = createAsyncThunk<usersArrtayType[], void, ThunkError>('Entity/Get', async (param, thunkAPI) => {
  return await ThunkCreator({ apiMethod: UniversalApi.get }, thunkAPI);
});

export const slice = createSlice({
  name: `TApp`,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ users: usersArrtayType[] }>) {
      state.users = action.payload.users;
    },
    setUsersForSagaAC(state, action: PayloadAction<{ users: usersArrtayType[] }>) {
      state.users = action.payload.users;
    },
  },
  extraReducers: builder => {
    builder.addCase(GetUsersTC.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const asyncActions = {
  GetUsersTC,
};
