import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { reducersList } from './reducers'

const rootReducer = combineReducers(reducersList)

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

declare global {
  interface Window {
    store: typeof store
  }
}
window.store = store

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch

// export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
// export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

export default store
