import {Action, applyMiddleware, combineReducers, createStore, compose} from "redux";
import SimpleReducer, { ActionsType } from './reducers/simple-reducer'
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
const reducersList = {
    SimpleReducer: SimpleReducer
};


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let reducers = combineReducers(reducersList);
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;
declare global {
    interface Window {
        store: any
    }
}

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export type RootState = ReturnType<typeof reducers>
export type AppDispatch= ThunkDispatch<AppStateType, any, ActionsType>

export default store

