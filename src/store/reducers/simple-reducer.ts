import {BaseThunkType, InferActionsTypes} from '../store'
import * as SearchApi from '../../api/simplePageApi/simplePageApi'

const IS_FETCHING = "IS-FETCHING"

const initialState = {
    isFetching: true,
}

const SimpleReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state
    }
}

export const actions = {

    toggleIsFetching: (isFetching: boolean) => ({type: IS_FETCHING, isFetching} as const),
}

export const searchUsers = (
    userForSearch: string,
    currentPage: number,
    objectPerPage: number): ThunkType => {

    return async (dispatch, getState) => {
        let data = await SearchApi.SearchPageApi.getUsers(userForSearch, currentPage, objectPerPage);
                dispatch(actions.toggleIsFetching(false));
    }
}

export const getData = (user: string): ThunkType => {

    return async (dispatch, getState) => {
        let data = await SearchApi.SearchPageApi.getReposFromUser(user)
        dispatch(actions.toggleIsFetching(false));
    }
}

export type InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
export default SimpleReducer;