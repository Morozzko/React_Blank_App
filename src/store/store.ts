import {Action, combineReducers} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {reducersList} from "./reducers";
// import {rootWatcher, sagaMiddleware} from "./sagas";


const rootReducer = combineReducers(reducersList);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware()
            .prepend(thunkMiddleware)
            // .prepend(sagaMiddleware),
});

// sagaMiddleware.run(rootWatcher)


declare global {
    interface Window {
        store: typeof store;
    }
}
window.store = store

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

export default store;
