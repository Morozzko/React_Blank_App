import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { generatedMiddlewaresList } from '@app/store/generated/middlewares'
import { reducersList } from './reducers'

const rootReducer = combineReducers(reducersList)

export const store = configureStore({
	reducer: rootReducer,
	// @ts-ignore
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.prepend(thunkMiddleware)
			// Добавляем автоматические middleware сгенерированные библиотекой @rtk-query/codegen-openapi
			.concat(...generatedMiddlewaresList),
	devTools: process.env.NODE_ENV !== 'production',
})

if (process.env.NODE_ENV === 'development') {
	window.store = store
}

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch
