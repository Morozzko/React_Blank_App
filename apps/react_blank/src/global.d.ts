import { FunctionComponent, ReactNode } from 'react'

type ChildrenType = {
  children?: ReactNode
}

declare global {
  type FC<T = {}> = FunctionComponent<T & ChildrenType>
}
