import {Action, combineReducers} from "redux";
import SimpleReducer from './reducers/simple-reducer'
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";

const reducersList = {
    SimpleReducer: SimpleReducer
};

const rootReducer = combineReducers(reducersList);
export const store= configureStore({
    reducer:rootReducer,
    middleware:getDefaultMiddleware => getDefaultMiddleware()
        .prepend(thunkMiddleware)
})

window.store = store;
declare global {
    interface Window {
        store: typeof store
    }
}

export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export default store

