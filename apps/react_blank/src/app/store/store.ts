import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { generatedMiddlewaresList } from '@app/store/generated/middlewares'
import { reducersList } from './reducers'

const rootReducer = combineReducers(reducersList)

export const store = configureStore({
  reducer: rootReducer,
  //@ts-ignore
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(thunkMiddleware)
      .concat(...generatedMiddlewaresList),
})

declare global {
  interface Window {
    store: typeof store
  }
}
window.store = store

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch
