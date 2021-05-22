import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ThunkError} from '../../../Core/App/types';
import {ThunkCreator} from '../../../../utils/redux-utils';
import {UniversalApi} from '../Api';


const initialState = {

};

export const GetUsersTC = createAsyncThunk<any, void, ThunkError>('Entity/Get', async (param, thunkAPI) => {
    return await ThunkCreator({apiMethod: UniversalApi.get, param}, thunkAPI);
});

export const slice = createSlice({
    name: `TApp`,
    initialState,
    reducers: {
        // setJWT(state, action: PayloadAction<{ users: usersArrtayType[] }>) {
        //     state.users = action.payload.users;
        // },

    },
    extraReducers: builder => {
        builder
            .addCase(GetUsersTC.fulfilled, (state, action) => {
                // state.users = action.payload;
            })

    },
});

export const asyncActions = {
    GetUsersTC,
};
