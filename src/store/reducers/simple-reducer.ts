import {BaseThunkType, InferActionsTypes} from '../store'
import * as SearchApi from '../../api/simplePageApi/simplePageApi'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: true,
}

const slice = createSlice({
    name: "SimpleReducer",
    initialState,
    reducers: {
        toggleIsFetching(state, action: PayloadAction<{ isFetching: boolean }>) {
            state.isFetching = action.payload.isFetching
        }
    }
})

const SimpleReducer = slice.reducer
const actions = slice.actions

export const getData = (user: string): ThunkType => {
    return async (dispatch, getState) => {
        let data = await SearchApi.SearchPageApi.getReposFromUser(user)
        if (data) {
            dispatch(actions.toggleIsFetching({isFetching: false}));
        }
    }
}

export type InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
export default SimpleReducer;
