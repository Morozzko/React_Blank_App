import { FunctionComponent, ReactNode } from 'react'

type ChildrenType = {
	children?: ReactNode
}

declare global {
	type FC<T = {}> = FunctionComponent<T & ChildrenType>
	type Nullable<T> = T | null | undefined
	type Callback<Value = void | unknown, ReturnType = void> = (
		value?: Value
	) => ReturnType
	type UnknownCallback = (...args: any[]) => any
	interface Window {
		store: typeof store
	}
}
