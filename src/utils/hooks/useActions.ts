import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { useAppDispatch } from './useAppDispatch'
import { useMemo } from 'react'

export function useActions<T extends ActionCreatorsMapObject>(actions: T) {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [])
}
